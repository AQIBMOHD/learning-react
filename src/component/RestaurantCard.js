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

const RestaurantCard = ({ resData, onClick }) => {
  const safeData = resData?.info || resData || {};
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = safeData;

  return (
    <div className="res-card" onClick={onClick}>
      <img
        className="res-logo"
        alt={`${name || "restaurant"}-logo`}
        src={cloudinaryImageId ? `${CDN_URL}${cloudinaryImageId}` : "https://via.placeholder.com/150"}
      />
      <h3>{name}</h3>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{avgRating ? `${avgRating} stars` : "Rating unavailable"}</h5>
      <h5>{costForTwo }</h5>
      <h5>{sla?.deliveryTime ? `${sla.deliveryTime} minutes` : "Time unavailable"}</h5>
    </div>
  );
};

export default RestaurantCard;    