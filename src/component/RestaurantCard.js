// // Restaurant Card Component
// import { CDN_URL } from "../utils/constant"; // Correct import path

// const RestaurantCard = ({ resData }) => {
//     return (
//         <div className="res-card">
//             <img 
//                 className="res-logo"
//                 alt="res-logo" 
//                 src = {CDN_URL + resData.cloudinaryImageId}

//             />
//             <h3>{resData.name}</h3>
//             <h5>{resData.cuisines.join(", ")}</h5>
//             <h5>{resData.avgRating} stars</h5>
//             <h5>₹{resData.costForTwo / 100} for two</h5>
//             <h5>{resData.deliveryTime} minutes</h5>
//         </div>
//     );  
// };     

// export default RestaurantCard;    
  


// src/component/RestaurantCard.js
import { CDN_URL } from "../utils/constant";
import { useState } from "react";

// Fallback food images from Unsplash (reliable CDN)
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", // Pizza
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", // Burger
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop", // Biryani
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", // Food plate
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop", // BBQ
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", // Salad
];

// Get image URL with fallback support
const getImageUrl = (cloudinaryImageId, restaurantId) => {
  if (!cloudinaryImageId) {
    // Use a random fallback based on restaurant ID
    const index = parseInt(restaurantId) % FALLBACK_IMAGES.length;
    return FALLBACK_IMAGES[index];
  }
  return `${CDN_URL}${cloudinaryImageId}`;
};

const RestaurantCard = ({ resData, onClick }) => {
  const safeData = resData?.info || resData || {};
  const { id, cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, aggregatedDiscountInfoV3 } = safeData;
  
  const [imgError, setImgError] = useState(false);
  
  // Get fallback image based on restaurant ID
  const fallbackIndex = parseInt(id || "0") % FALLBACK_IMAGES.length;
  const fallbackImg = FALLBACK_IMAGES[fallbackIndex];

  return (
    <div className="res-card" onClick={onClick}>
      <div className="res-img-container">
        <img
          className="res-logo"
          alt={`${name || "restaurant"}-logo`}
          src={imgError ? fallbackImg : getImageUrl(cloudinaryImageId, id)}
          onError={() => setImgError(true)}
        />
        {aggregatedDiscountInfoV3 && (
          <div className="res-discount">
            {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>
      <h3>{name}</h3>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{avgRating ? `${avgRating} stars` : "Rating unavailable"}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.slaString || (sla?.deliveryTime ? `${sla.deliveryTime} mins` : "")}</h5>
    </div>
  );
};

export default RestaurantCard;    