// src/utils/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Get cart from localStorage
const getCartFromStorage = () => {
  try {
    const cart = localStorage.getItem("swiggy_cart");
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCartFromStorage(),
    restaurantInfo: null,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      localStorage.setItem("swiggy_cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
      
      localStorage.setItem("swiggy_cart", JSON.stringify(state.items));
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("swiggy_cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.restaurantInfo = null;
      localStorage.removeItem("swiggy_cart");
    },
    setRestaurantInfo: (state, action) => {
      state.restaurantInfo = action.payload;
    },
  },
});

export const { addItem, removeItem, deleteItem, clearCart, setRestaurantInfo } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => 
  state.cart.items.reduce((total, item) => total + (item.price || item.defaultPrice) * item.quantity, 0);
export const selectCartItemsCount = (state) => 
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
