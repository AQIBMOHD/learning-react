

// import RestaurantCard from "./RestaurantCard";





// // Restaurant List Component
// const ResList = ({ resList }) => {
//     return (
//         <div className="restaurant-container">
//             {resList.map((restaurant) => (
//                 <RestaurantCard key={restaurant.id} resData={restaurant} />
//             ))}
//         </div>
//     );
// };

// export default ResList;         



// import RestaurantCard from "./RestaurantCard";





// const ResList = ({ resList }) => {
//     // Remove duplicate restaurants by filtering based on unique `id`
//     const uniqueResList = resList.filter(
//         (restaurant, index, self) =>
//             index === self.findIndex((r) => r.id === restaurant.id)
//     );

//     return (
//         <div className="restaurant-container">
//             {uniqueResList.map((restaurant) => (
//                 <RestaurantCard key={restaurant.id} resData={restaurant} />
//             ))}
//         </div>
//     );
// };

// export default ResList;



import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";

const ResList = ({ resList = [] }) => {
    // Ensure resList is an array before using filter()
    if (!Array.isArray(resList)) {
        console.error("resList is not an array:", resList);
        return null;
    }

    // Remove duplicate restaurants by filtering based on unique `id`
    const uniqueResList = resList.filter(
        (restaurant, index, self) =>
            index === self.findIndex((r) => r.id === restaurant.id)
    );  

    return (
        <div className="restaurant-container">
            {uniqueResList.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
        </div>
    );
};
    
export default ResList;
