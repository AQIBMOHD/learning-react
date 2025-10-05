// import { use, useEffect } from "react";



// const Restaurantmenu = () => {

//     useEffect(() =>{
//         fetchMenu();
//     },[]);

//     const fetchMenu = async() =>{
    
//         const data =await fetch();
//         const json = await data.json;

//         console,log(json);
//     }
//   return (
//     <div>
//         <h1>Name of Restauant</h1>
//         <h2>Menu</h2>
//         <ul>
//             <li>Biryani </li>
//             <li>Burger</li>
//             <li>Pizza</li>
//         </ul>
//     </div>
//   )
// }

// export default Restaurantmenu




// import { useState, useEffect } from "react";
// import { RESTAURANT_MENU_API } from "../utils/constant";

// const Restaurantmenu = ({ restaurantId }) => {
//   const [menuData, setMenuData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, [restaurantId]);

//   const fetchMenu = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       if (!restaurantId) throw new Error("No restaurant ID provided");

//       const apiUrl = `${RESTAURANT_MENU_API}${restaurantId}`; // API कॉल यहाँ से शुरू
//       const response = await fetch(apiUrl);
//       if (!response.ok) throw new Error(`Failed to fetch menu. Status: ${response.status}`);

//       const json = await response.json();
//       const menuItems = json?.data?.cards?.find(card => 
//         card?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       )?.groupedCard?.cardGroupMap?.REGULAR?.cards; // मेनू आइटम्स यहाँ से निकाले गए
//       const restaurantInfo = json?.data?.cards?.find(card => 
//         card?.card?.card?.info
//       )?.card?.card?.info; // रेस्तरां की जानकारी यहाँ से

//       setMenuData({ items: menuItems, info: restaurantInfo }); // डेटा स्टोर हुआ
//     } catch (err) {
//       setError(err.message);
//       setMenuData(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // मेनू आइटम्स को फ़िल्टर और फ्लैट किया गया
//   const allMenuItems = menuData?.items
//     ?.filter(item => item?.card?.card?.itemCards)
//     ?.flatMap(item => item?.card?.card?.itemCards);

//   // रेस्तरां की जानकारी निकाली गई
//   const cuisines = menuData?.info?.cuisines;
//   const costForTwo = menuData?.info?.costForTwo;

//   if (loading) return <div className="loading-text">Loading menu...</div>;
//   if (error) return (
//     <div className="error-container">
//       <p className="error-text">{error}</p>
//       <button className="retry-btn" onClick={fetchMenu}>Retry</button>
//     </div>
//   );

//   // आउटपुट यहाँ से रेंडर हुआ
//   return (
//     <div className="restaurant-menu">
//       <h1>{menuData?.info?.name}</h1> 
//       <p>{cuisines?.join(", ") + " - " + costForTwo}</p> 
//       <h2>Menu</h2>
//       {allMenuItems?.length > 0 ? (
//         <ul>
//           {allMenuItems?.map((menuItem) => (
//             <li key={menuItem?.card?.info?.id}>
//               {menuItem?.card?.info?.name || "Unnamed Item"} - Rs.
//               {(menuItem?.card?.info?.price || menuItem?.card?.info?.defaultPrice) / 100}
//             </li> 
//           ))}
//         </ul>
//       ) : (
//         <p>No menu items available</p>
//       )}
//     </div>
//   );
// };

// export default Restaurantmenu;
//ye code sahi hai





import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer"; 

const Restaurantmenu = ({ restaurantId }) => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [restaurantId]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);
      if (!restaurantId) throw new Error("No restaurant ID provided");

      const apiUrl = `${RESTAURANT_MENU_API}${restaurantId}`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`Failed to fetch menu. Status: ${response.status}`);

      const json = await response.json();
      const menuItems = json?.data?.cards?.find(card => 
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const restaurantInfo = json?.data?.cards?.find(card => 
        card?.card?.card?.info
      )?.card?.card?.info;

      setMenuData({ items: menuItems, info: restaurantInfo });
    } catch (err) {
      setError(err.message);
      setMenuData(null);
    } finally {
      setLoading(false);
    }
  };

  const allMenuItems = menuData?.items
    ?.filter(item => item?.card?.card?.itemCards)
    ?.flatMap(item => item?.card?.card?.itemCards);

  const cuisines = menuData?.info?.cuisines;
  const costForTwo = menuData?.info?.costForTwo;

  // Shimmer को नए कोड की तरह जोड़ा, लेकिन loading स्टेट के साथ
  if (loading) return <Shimmer />; // जब लोडिंग हो, तो Shimmer दिखाएँ
  if (error) return (
    <div className="error-container">
      <p className="error-text">{error}</p>
      <button className="retry-btn" onClick={fetchMenu}>Retry</button>
    </div>
  );

  return (
    <div className="restaurant-menu">
      <h1>{menuData?.info?.name}</h1>
      <p>{cuisines?.join(", ") + " - " + costForTwo}</p>
      <h2>Menu</h2>
      {allMenuItems?.length > 0 ? (
        <ul>
          {allMenuItems?.map((menuItem) => (
            <li key={menuItem?.card?.info?.id}>
              {menuItem?.card?.info?.name || "Unnamed Item"} - Rs.
              {(menuItem?.card?.info?.price || menuItem?.card?.info?.defaultPrice) / 100}
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

export default Restaurantmenu;    
