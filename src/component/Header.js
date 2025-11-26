// src/component/Header.js
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemsCount } from "../utils/cartSlice";
import { logout } from "../utils/authSlice";
import LoginModal from "./LoginModal";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const cartItemsCount = useSelector(selectCartItemsCount);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setShowUserMenu(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <svg viewBox="0 0 559 825" height="49" width="34" fill="#ff5200">
              <path d="M 542.92 788.67 C 536.42 797.75 528.04 805.98 517.19 813.17 C 503.11 822.53 487.68 828.97 463.95 827.36 C 434.07 825.37 412.29 808.86 402.68 791.69 C 392.95 774.73 394.07 756.78 396.08 745.16 C 398.73 729.78 405.31 719.38 410.18 712.55 C 431.68 683.82 501.46 609.54 509.56 600.68 C 516.35 593.19 523.66 585.11 526.77 575.87 C 530.46 564.67 528.74 553.93 522.33 544.58 C 518.5 538.83 512.26 533.91 504.83 531.35 C 493.58 527.5 480.33 528.81 469.97 534.2 C 456.35 541.36 442.92 555.96 433.26 579.12 C 419.03 613.51 409.56 673.89 408.92 719.66 C 396.52 730.82 379.29 740.33 359.22 746.18 C 339.71 751.86 318.41 753.4 296.32 749.98 C 261.47 744.5 227.64 728.96 199.42 704.15 C 174.32 681.98 154.31 652.63 141.48 617.26 C 128.27 580.91 122.55 539.24 125.13 494.78 C 127.65 451.57 137.76 406.98 156.45 363.5 C 175.07 320.19 201.6 279.09 236.25 244 C 259.05 221.33 281.98 201.55 303.56 183.66 C 325.14 165.77 345.37 149.76 362.76 133.61 C 378.84 118.67 392.28 103.43 401.09 85.26 C 407.57 71.8 411.39 56.2 410.04 37.7 C 409.3 27.15 406.6 16.14 401.54 4.89 C 400.31 2.18 399.07 0 399.07 0 L 397.43 0 C 397.43 0 397.75 2.76 398.16 7.56 C 399.32 21.25 400.41 50.04 389.77 79.79 C 378.03 112.44 355.06 140.58 332.03 163.72 C 306.04 189.83 277.86 213.11 251.99 238.57 C 216.94 272.98 187.31 311.01 163.68 351.91 C 140.22 392.54 122.67 436.13 111.82 481.32 C 101.25 525.42 97.44 571.13 101.12 616.9 C 104.78 662.4 115.86 707.95 135.06 750.08 C 151.84 786.9 175.54 820.17 206.72 847.43 C 229.87 867.64 257.04 884.24 287.78 895.56 C 320.8 907.72 357.54 914.04 396.67 912.55 C 423.67 911.52 452.18 906.39 480.87 895.72 C 509.45 885.09 538.21 868.92 565.53 845.41 C 584.51 828.98 564.66 803.14 542.92 788.67 Z M 406.59 711.66 L 406.59 711.66 Z"></path>
            </svg>
            <span>Swiggy</span>
          </Link>

          {/* Location */}
          <div className="header-location">
            <svg className="location-icon" viewBox="0 0 20 20" height="20" width="20" fill="#3d4152">
              <path d="M10 0C6.134 0 3 3.134 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <div className="location-text">
              <span className="location-label">Bangalore</span>
              <span className="location-detail">Koramangala, 5th Block</span>
            </div>
            <svg className="dropdown-icon" viewBox="0 0 20 20" height="14" width="14" fill="#ff5200">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#ff5200" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Search */}
          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for restaurants and food"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <svg viewBox="0 0 20 20" height="18" width="18" fill="#686b78">
                <path d="M8 16a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
              </svg>
            </button>
          </form>

          {/* Navigation */}
          <nav className="header-nav">
            <Link to="/" className="nav-item">
              <svg viewBox="0 0 20 20" height="19" width="19" fill="currentColor">
                <path d="M4 4h6v6H4V4zm10 0h2v2h-2V4zm0 4h2v2h-2V8zm0 4h2v2h-2v-2zm-4-4h2v6h-2V8zm-2 0H6v2h2V8z"/>
              </svg>
              <span>Home</span>
            </Link>

            <Link to="/about" className="nav-item">
              <svg viewBox="0 0 20 20" height="19" width="19" fill="currentColor">
                <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"/>
              </svg>
              <span>About</span>
            </Link>

            <Link to="/contact" className="nav-item">
              <svg viewBox="0 0 20 20" height="19" width="19" fill="currentColor">
                <path d="M18 2H2a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-1 3.8L10 10 3 5.8V4l7 4.2L17 4v1.8z"/>
              </svg>
              <span>Contact</span>
            </Link>

            <Link to="/cart" className="nav-item cart-nav">
              <div className="cart-icon-wrapper">
                <svg viewBox="0 0 20 20" height="19" width="19" fill="currentColor">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                {cartItemsCount > 0 && (
                  <span className="cart-badge">{cartItemsCount}</span>
                )}
              </div>
              <span>Cart</span>
            </Link>

            {/* User Section */}
            {isAuthenticated ? (
              <div className="nav-item user-section" onClick={() => setShowUserMenu(!showUserMenu)}>
                <img 
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=ff5200&color=fff`} 
                  alt={user?.name}
                  className="user-avatar"
                />
                <span>{user?.name?.split(" ")[0]}</span>
                
                {showUserMenu && (
                  <div className="user-dropdown">
                    <div className="dropdown-header">
                      <img src={user?.avatar} alt={user?.name} />
                      <div>
                        <strong>{user?.name}</strong>
                        <p>{user?.email}</p>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item">
                      <svg viewBox="0 0 20 20" height="16" width="16" fill="currentColor">
                        <path d="M10 10a5 5 0 100-10 5 5 0 000 10zm0 2c-5.52 0-10 2.24-10 5v3h20v-3c0-2.76-4.48-5-10-5z"/>
                      </svg>
                      My Profile
                    </button>
                    <button className="dropdown-item">
                      <svg viewBox="0 0 20 20" height="16" width="16" fill="currentColor">
                        <path d="M3 3h14v14H3V3zm2 2v10h10V5H5z"/>
                      </svg>
                      Orders
                    </button>
                    <button className="dropdown-item">
                      <svg viewBox="0 0 20 20" height="16" width="16" fill="currentColor">
                        <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
                      </svg>
                      Favorites
                    </button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout" onClick={handleLogout}>
                      <svg viewBox="0 0 20 20" height="16" width="16" fill="currentColor">
                        <path d="M14 3v2h3v10h-3v2h5V3h-5zM9 5l-1.4 1.4L10.2 9H1v2h9.2l-2.6 2.6L9 15l5-5-5-5z"/>
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="nav-item login-btn" onClick={() => setShowLoginModal(true)}>
                <svg viewBox="0 0 20 20" height="19" width="19" fill="currentColor">
                  <path d="M10 10a5 5 0 100-10 5 5 0 000 10zm0 2c-5.52 0-10 2.24-10 5v3h20v-3c0-2.76-4.48-5-10-5z"/>
                </svg>
                <span>Sign In</span>
              </button>
            )}
          </nav>
        </div>
      </header>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};
