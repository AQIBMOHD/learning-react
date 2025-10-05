// import ResList from "./ResList";
// import { resList } from "../utils/mockData";
// import RestaurantCard from "./RestaurantCard";




// // Body Component
// const Body = ()  => {

//     const ListofRestaurant = [ {data:{
//         id: "229",
//         name: "Meghana Foods",
//         uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
//         city: "1",
//         area: "Koramangala",
//         totalRatingsString: "5000+ ratings",
//         cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
//         cuisines: [
//           "Biryani",
//           "Andhra",
//           "South Indian",
//           "North Indian",
//           "Chinese",
//           "Seafood",
//         ],
//         avgRating: 3.9,
//         costForTwo: 40000,
//         deliveryTime: 39,
//         minDeliveryTime: 39,
//         maxDeliveryTime: 39,
//       }}];
//     return (
//         <div className="body">
//             <div className="filter">
//                 <button className ="filter-btn"
//                 onMouseOver={()=>{
//                     console.log("Button Clicked");

//                 }}> Top Rated Restaurant
//                 </button>
//                 </div>

//             <div className="res-container">
//                 { 
//                 ListofRestaurant.map((restaurant)=>(
//                     <RestaurantCard key={restaurant.data.id} resData={restaurant} />


//                 )) }
//             </div>
//         </div>
//     );  
// };

// export default Body;  

//  import RestaurantCard from "./RestaurantCard";


// const ListofRestaurant = [
//     {
//       data: {
//         id: "229",
//         name: "Meghana Foods",
//         uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
//         city: "1",
//         area: "Koramangala",
//         totalRatingsString: "5000+ ratings",
//         cloudinaryImageId: "xqwpuhgnsafdfj34zvtv",
//         cuisines: ["Biryani", "Andhra", "South Indian", "North Indian", "Chinese", "Seafood"],
//         avgRating: 3.9,
//         costForTwo: 40000,
//         deliveryTime: 39,
//         minDeliveryTime: 39,
//         maxDeliveryTime: 39,
//       }
//     }
//   ];
  
//   const Body = () => {
//     return (
//       <div className="body">
//         <div className="filter">
//           {/* Your filter button */}
//           <button className="filter-btn"
//             onClick={() => {
//               console.log("Button Clicked");
//             }}> Top Rated Restaurant
//           </button>
//         </div>
        
//         {/* Map over the ListOfRestaurant array */}
//         <div className="res-container">
//           {ListofRestaurant.map((restaurant) => (
//             <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Body;
  





// src/component/Body.js
// src/component/Body.js
import { useState, useEffect, useCallback } from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurantmenu from "./Restaurantmenu";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constant"; // API import

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);  
  const [searchText, setSearchText] = useState("");
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };  

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(RESTAURANT_LIST_API);  
      if (!response.ok) {
        throw new Error("Failed to fetch restaurants. Please try again.");
      }
      const json = await response.json();
      const restaurantArray = json?.data?.cards?.find(card => 
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log("Fetched restaurants:", restaurantArray);
      setListOfRestaurants(restaurantArray);
      setFilteredRestaurants(restaurantArray);
    } catch (err) {
      setError(err.message);
      console.log("Fetch error:", err);
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filterTopRated = () => {
    const filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4.0);
    setFilteredRestaurants(filtered);
  };

  const debouncedSearch = useCallback(
    debounce((text) => {
      const filtered = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }, 300),
    [listOfRestaurants]
  );

  const resetFilters = () => {
    setSearchText("");
    setFilteredRestaurants(listOfRestaurants);
    setSelectedRestaurantId(null);
  };

  const handleSearchInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
    debouncedSearch(text);
  };

  const handleRestaurantClick = (id) => {
    console.log("Selected restaurant ID:", id);
    setSelectedRestaurantId(id);
  };

  if (!isLoading && listOfRestaurants.length === 0) {
    return (
      <div className="error-container">
        <Shimmer />
        {error && (
          <div className="error-overlay">
            <p className="error-text">{error}</p>
            <button className="retry-btn" onClick={fetchData}>Retry</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter-section">
        <input
          type="text"
          className="search-bar"
          value={searchText}
          onChange={handleSearchInput}
          placeholder="Search for restaurants..."
          disabled={isLoading}
        />
        <button className="filter-btn" onClick={filterTopRated} disabled={isLoading}>
          Top Rated
        </button>
        <button className="reset-btn" onClick={resetFilters} disabled={isLoading}>
          Reset
        </button>
      </div>  

      <div className="restaurant-container">
        {isLoading ? (
          <Shimmer />
        ) : error ? (
          <div className="error-container">
            <p className="error-text">{error}</p>
            <button className="retry-btn" onClick={fetchData}>Retry</button>
          </div>
        ) : selectedRestaurantId ? (
          <Restaurantmenu restaurantId={selectedRestaurantId} />
        ) : filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
              onClick={() => handleRestaurantClick(restaurant.info.id)}
            />
          ))
        ) : (
          <p className="no-results">No restaurants found.... Try a different search.</p>
        )}
      </div>
    </div>
  );  
};

export default Body;



  
       