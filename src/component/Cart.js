// src/component/Cart.js
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, removeItem, deleteItem, clearCart, selectCartTotal, selectCartItemsCount } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector(selectCartTotal);
  const itemsCount = useSelector(selectCartItemsCount);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deliveryFee = cartItems.length > 0 ? 4000 : 0; // ₹40
  const platformFee = cartItems.length > 0 ? 500 : 0; // ₹5
  const gstCharges = Math.round(cartTotal * 0.05); // 5% GST
  const grandTotal = cartTotal + deliveryFee + platformFee + gstCharges;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert("Please login to proceed with checkout!");
      return;
    }
    alert(`Order placed successfully! Total: ₹${(grandTotal / 100).toFixed(2)}`);
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-cart-content">
          <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" 
            alt="Empty Cart"
            className="empty-cart-img"
          />
          <h2>Your cart is empty</h2>
          <p>You can go to home page to view more restaurants</p>
          <Link to="/" className="browse-btn">
            SEE RESTAURANTS NEAR YOU
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Cart Items Section */}
        <div className="cart-items-section">
          <div className="cart-header">
            <h1>Cart</h1>
            <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>

          <div className="cart-items-list">
            {cartItems.map((item) => {
              const price = item.price || item.defaultPrice || 0;
              return (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}></span>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">₹{((price * item.quantity) / 100).toFixed(0)}</p>
                    </div>
                  </div>
                  
                  <div className="quantity-controls">
                    <button 
                      className="qty-btn minus"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      className="qty-btn plus"
                      onClick={() => dispatch(addItem(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Suggestions */}
          <div className="cart-suggestions">
            <input 
              type="text" 
              placeholder="Any suggestions? We will pass it on..."
              className="suggestions-input"
            />
          </div>

          {/* No-contact Delivery */}
          <div className="no-contact">
            <label className="checkbox-container">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              <div>
                <strong>Opt in for No-contact Delivery</strong>
                <p>Unستbox delivery at door with no handshake</p>
              </div>
            </label>
          </div>
        </div>

        {/* Bill Section */}
        <div className="cart-bill-section">
          <div className="bill-details">
            <h3>Bill Details</h3>
            
            <div className="bill-row">
              <span>Item Total</span>
              <span>₹{(cartTotal / 100).toFixed(2)}</span>
            </div>
            
            <div className="bill-row">
              <span>Delivery Fee | 2.5 kms</span>
              <span>₹{(deliveryFee / 100).toFixed(2)}</span>
            </div>

            <div className="bill-divider"></div>
            
            <div className="bill-row">
              <span>Platform fee</span>
              <span>₹{(platformFee / 100).toFixed(2)}</span>
            </div>
            
            <div className="bill-row">
              <span>GST and Restaurant Charges</span>
              <span>₹{(gstCharges / 100).toFixed(2)}</span>
            </div>

            <div className="bill-divider thick"></div>
            
            <div className="bill-row total">
              <span>TO PAY</span>
              <span>₹{(grandTotal / 100).toFixed(2)}</span>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="cancellation-policy">
            <h4>Cancellation Policy</h4>
            <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
          </div>
        </div>
      </div>

      {/* Fixed Checkout Bar */}
      <div className="checkout-bar">
        <div className="checkout-info">
          <span className="checkout-total">₹{(grandTotal / 100).toFixed(2)}</span>
          <span className="checkout-items">{itemsCount} ITEMS</span>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>
          PROCEED TO CHECKOUT
          <svg viewBox="0 0 20 20" height="16" width="16" fill="currentColor">
            <path d="M10 3l-1.4 1.4 5.1 5.1H3v2h10.7l-5.1 5.1L10 18l8-8-8-8z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cart;
