
import React, { useDebugValue } from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    -logo
 *    - Nav items
 * Body
 *   - Search
 *   - Restaurant Container
 *     - Restaurant Card
 *         -img ,  -Restaurant Name  , -Star Rating , cuisines
 *   
 *             
 *   
 * footer
 *   -Copyright
 *    -links
 *    -Address
 *    -Contact
 *     
 
 */
// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logocontainer">
//             <img className ="logo" src = "https://www.codester.com/static/uploads/items/000/014/14970/preview-xl.jpg"
//             />
//             </div>  
           
//            <div className="nav-items">
//             <ul>
//               <li>Home</li>
//               <li>About us</li>
//               <li> Contact us</li>
//               <li>Cart</li>
//             </ul>
            
//            </div>
            

//         </div>
         
//     )

// }

// const styleCard = {
//     backgroundColor: "#f0f0f0",
// }

// const RestaurantCard = () => {
//     return (
//         <div className="res-card" style={styleCard}>
//             <img className ="res-logo"
//             alt="res-logo" 
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b7beedf80b1ec55cd8e10452f1877ab5"/>
//          <h3>Mubin Foods Corner</h3>
//          <h5>Biryani, Akbari Gate, Lucknow</h5>
//          <h5>4.5 Stars</h5>
//          <h5>38 min</h5>

//         </div>
//     )

// }   
// const Body = ()  => {
//     return (
//        <div className="body">
//         <div className="search">Search</div>
//         <div className="restaurant-container">
//          <RestaurantCard/>
//         </div>
//        </div>
  
//     )   
  

// }



// const Applayout = () => { 
//     return(
//         <div className="app">
//             <Header/>
//             <Body/>
//         </div>


//     )


// };


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout/>);  

/////////////////////////////////



// src/App.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Error from "./component/Error";
import Restaurantmenu from "./component/Restaurantmenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: "Aqib Naqvi" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", 
        element: <Body /> 

      },
      { 
        path: "/about",
        element: <About /> 

      },
      {
         path: "/contact",
         element: <Contact /> 

      },
      { 
        path: "/cart",
        element: <Cart /> 

      },
      { 
        path: "/restaurants/:resId",
        element: <Restaurantmenu /> 
      }, // Added restaurant menu route
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);