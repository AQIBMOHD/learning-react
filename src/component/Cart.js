// src/component/Cart.js
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum + (item?.info?.price || item?.info?.defaultPrice || 0) / 100,
    0
  );

  const handleCheckout = () => {
    // Simulate checkout (replace with real payment gateway in production)
    alert(`Proceeding to checkout. Total: ₹${totalAmount.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (  
          <div className="text-center">
            <h2 className="text-xl text-gray-600 mb-4">
              Your cart is empty.
            </h2>
            <a
              href="/"
              className="inline-block p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Browse Restaurants
            </a>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-6">
              <button
                onClick={handleClearCart}
                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              >
                Checkout (₹{totalAmount.toFixed(2)})
              </button>
            </div>
            <ItemList items={cartItems} onRemove={handleRemoveItem} />
            <div className="mt-6 text-right">
              <p className="text-xl font-semibold text-gray-800">
                Total: ₹{totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;  