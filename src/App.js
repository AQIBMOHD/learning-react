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
import Footer from "./component/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { 
        path: "/", 
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
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
