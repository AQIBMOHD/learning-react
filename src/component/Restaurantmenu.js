// src/component/Restaurantmenu.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_MENU_API, CDN_URL } from "../utils/constant";
import { addItem, selectCartItems } from "../utils/cartSlice";
import Shimmer from "./Shimmer";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!resId) throw new Error("No restaurant ID provided");

      const response = await fetch(`${RESTAURANT_MENU_API}${resId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch menu. Status: ${response.status}`);
      }

      const json = await response.json();
      setResInfo(json.data);
      
      // Expand first category by default
      const menuCard = json.data?.cards?.find(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
      const categories = menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];
      
      if (categories.length > 0) {
        setExpandedCategories({ 0: true });
      }
    } catch (err) {
      setError(err.message);
      setResInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = (item) => {
    dispatch(addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      defaultPrice: item.defaultPrice,
      description: item.description,
      imageId: item.imageId,
      isVeg: item.isVeg,
    }));
  };

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  const toggleCategory = (index) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) return <Shimmer />;

  if (error) {
    return (
      <div className="menu-error">
        <p>{error}</p>
        <button onClick={fetchMenu}>Retry</button>
      </div>
    );
  }

  const restaurantInfo =
    resInfo?.cards?.[0]?.card?.card?.info ||
    resInfo?.cards?.[2]?.card?.card?.info;

  const menuCard = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName, sla, cloudinaryImageId } =
    restaurantInfo || {};

  return (
    <div className="menu-page">
      {/* Restaurant Header */}
      <div className="menu-restaurant-header">
        <div className="restaurant-info-card">
          <div className="info-left">
            <h1>{name}</h1>
            <p className="cuisines">{cuisines?.join(", ")}</p>
            <p className="area">{areaName} • {sla?.slaString}</p>
          </div>
          <div className="info-right">
            <div className="rating-box">
              <span className="rating">
                <svg viewBox="0 0 20 20" height="14" width="14" fill="#fff">
                  <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                </svg>
                {avgRating}
              </span>
              <span className="rating-count">{totalRatingsString}</span>
            </div>
          </div>
        </div>
        
        <div className="delivery-info">
          <div className="delivery-item">
            <svg viewBox="0 0 20 20" height="18" width="18" fill="#3d4152">
              <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H9v6l5.25 3.15.75-1.23-4.5-2.67V5z"/>
            </svg>
            <span>{sla?.slaString}</span>
          </div>
          <div className="delivery-item">
            <svg viewBox="0 0 20 20" height="18" width="18" fill="#3d4152">
              <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H9v6l5.2 3.2.8-1.3-4.5-2.7V5z"/>
            </svg>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="menu-categories-section">
        <div className="menu-divider">
          <span>MENU</span>
        </div>

        {categories.map((category, index) => {
          const categoryData = category?.card?.card;
          const items = categoryData?.itemCards || [];
          const isExpanded = expandedCategories[index];

          return (
            <div key={index} className="menu-category">
              <div 
                className="category-header"
                onClick={() => toggleCategory(index)}
              >
                <h3>
                  {categoryData?.title} ({items.length})
                </h3>
                <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
                  <svg viewBox="0 0 20 20" height="16" width="16" fill="#3d4152">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#3d4152" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </div>

              {isExpanded && (
                <div className="category-items">
                  {items.map((item) => {
                    const itemInfo = item?.card?.info;
                    const price = itemInfo?.price || itemInfo?.defaultPrice;
                    const quantity = getItemQuantity(itemInfo?.id);

                    return (
                      <div key={itemInfo?.id} className="menu-item">
                        <div className="item-info">
                          <span className={`veg-icon ${itemInfo?.isVeg ? 'veg' : 'non-veg'}`}></span>
                          <h4>{itemInfo?.name}</h4>
                          <p className="item-price">
                            ₹{price ? (price / 100).toFixed(0) : "N/A"}
                          </p>
                          {itemInfo?.ratings?.aggregatedRating?.rating && (
                            <p className="item-rating">
                              <svg viewBox="0 0 20 20" height="12" width="12" fill="#116649">
                                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                              </svg>
                              {itemInfo.ratings.aggregatedRating.rating} ({itemInfo.ratings.aggregatedRating.ratingCount})
                            </p>
                          )}
                          <p className="item-desc">
                            {itemInfo?.description?.slice(0, 150)}
                            {itemInfo?.description?.length > 150 ? "..." : ""}
                          </p>
                        </div>

                        <div className="item-image-section">
                          {itemInfo?.imageId && (
                            <img
                              src={`${CDN_URL}${itemInfo.imageId}`}
                              alt={itemInfo?.name}
                              className="item-image"
                            />
                          )}
                          
                          {quantity > 0 ? (
                            <div className="add-btn added">
                              <button onClick={() => dispatch({ type: 'cart/removeItem', payload: itemInfo?.id })}>−</button>
                              <span>{quantity}</span>
                              <button onClick={() => handleAddItem(itemInfo)}>+</button>
                            </div>
                          ) : (
                            <button 
                              className="add-btn"
                              onClick={() => handleAddItem(itemInfo)}
                            >
                              ADD
                              <span className="add-plus">+</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="category-divider"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restaurantmenu;
