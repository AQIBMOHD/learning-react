
// Detect hostname
const hostname = typeof window !== "undefined" ? window.location.hostname : "";

// Local development or Docker front-end preview ALWAYS uses localhost
const LOCAL_API_URL = "http://localhost:3000";

// Vercel backend
const DEPLOYED_API_URL = "https://swiggy-api-2-d709kzhao-md-aqibs-projects-5e09b9ac.vercel.app";

// Logic
const isLocal = hostname === "localhost" || hostname === "127.0.0.1";

// Final API Base URL
export const API_BASE_URL = isLocal ? LOCAL_API_URL : DEPLOYED_API_URL;

// Endpoints
export const RESTAURANT_LIST_API = `${API_BASE_URL}/api/restaurants`;
export const RESTAURANT_MENU_API = `${API_BASE_URL}/api/menu?restaurantId=`;

// Assets
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

