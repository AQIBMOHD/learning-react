// API Base URL - Update this when you deploy the proxy server to Vercel
// For local development: http://localhost:3000
// For Vercel deployment: https://your-vercel-app-name.vercel.app

// Automatically detect if running locally or in production
const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

// Set your deployed Vercel URL here after deployment
const DEPLOYED_API_URL = "https://your-swiggy-api.vercel.app";

// API Base URL - automatically switches between local and production
export const API_BASE_URL = isLocalhost 
  ? "http://localhost:3000" 
  : DEPLOYED_API_URL;

// Restaurant List API
export const RESTAURANT_LIST_API = `${API_BASE_URL}/api/restaurants`;

// Restaurant Menu API (append restaurantId to this)
export const RESTAURANT_MENU_API = `${API_BASE_URL}/api/menu?restaurantId=`;

// Swiggy CDN for restaurant images
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Logo URL
export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";
