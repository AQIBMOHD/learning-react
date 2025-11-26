// src/component/LoginModal.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure, clearError } from "../utils/authSlice";

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginStart());

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.password) {
        // Simulate successful login/signup
        const user = {
          id: Date.now(),
          name: formData.name || formData.email.split("@")[0],
          email: formData.email,
          phone: formData.phone || "",
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || formData.email)}&background=ff5200&color=fff`,
        };
        dispatch(loginSuccess(user));
        onClose();
        setFormData({ name: "", email: "", password: "", phone: "" });
      } else {
        dispatch(loginFailure("Please fill in all required fields"));
      }
    }, 800);
  };

  const handleClose = () => {
    dispatch(clearError());
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        <div className="modal-header">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <p>
            or{" "}
            <span 
              className="modal-switch" 
              onClick={() => {
                setIsLogin(!isLogin);
                dispatch(clearError());
              }}
            >
              {isLogin ? "create an account" : "login to your account"}
            </span>
          </p>
        </div>

        <div className="modal-decoration"></div>

        {error && <div className="modal-error">{error}</div>}

        <form onSubmit={handleSubmit} className="modal-form">
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="modal-submit" disabled={isLoading}>
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              isLogin ? "LOGIN" : "SIGN UP"
            )}
          </button>
        </form>

        <p className="modal-terms">
          By clicking on Login, I accept the <span>Terms & Conditions</span> & <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;

