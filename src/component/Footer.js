// src/component/Footer.js
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 559 825" height="40" width="28" fill="#fff">
              <path d="M 542.92 788.67 C 536.42 797.75 528.04 805.98 517.19 813.17 C 503.11 822.53 487.68 828.97 463.95 827.36 C 434.07 825.37 412.29 808.86 402.68 791.69 C 392.95 774.73 394.07 756.78 396.08 745.16 C 398.73 729.78 405.31 719.38 410.18 712.55 C 431.68 683.82 501.46 609.54 509.56 600.68 C 516.35 593.19 523.66 585.11 526.77 575.87 C 530.46 564.67 528.74 553.93 522.33 544.58 C 518.5 538.83 512.26 533.91 504.83 531.35 C 493.58 527.5 480.33 528.81 469.97 534.2 C 456.35 541.36 442.92 555.96 433.26 579.12 C 419.03 613.51 409.56 673.89 408.92 719.66 C 396.52 730.82 379.29 740.33 359.22 746.18 C 339.71 751.86 318.41 753.4 296.32 749.98 C 261.47 744.5 227.64 728.96 199.42 704.15 C 174.32 681.98 154.31 652.63 141.48 617.26 C 128.27 580.91 122.55 539.24 125.13 494.78 C 127.65 451.57 137.76 406.98 156.45 363.5 C 175.07 320.19 201.6 279.09 236.25 244 C 259.05 221.33 281.98 201.55 303.56 183.66 C 325.14 165.77 345.37 149.76 362.76 133.61 C 378.84 118.67 392.28 103.43 401.09 85.26 C 407.57 71.8 411.39 56.2 410.04 37.7 C 409.3 27.15 406.6 16.14 401.54 4.89 C 400.31 2.18 399.07 0 399.07 0 L 397.43 0 C 397.43 0 397.75 2.76 398.16 7.56 C 399.32 21.25 400.41 50.04 389.77 79.79 C 378.03 112.44 355.06 140.58 332.03 163.72 C 306.04 189.83 277.86 213.11 251.99 238.57 C 216.94 272.98 187.31 311.01 163.68 351.91 C 140.22 392.54 122.67 436.13 111.82 481.32 C 101.25 525.42 97.44 571.13 101.12 616.9 C 104.78 662.4 115.86 707.95 135.06 750.08 C 151.84 786.9 175.54 820.17 206.72 847.43 C 229.87 867.64 257.04 884.24 287.78 895.56 C 320.8 907.72 357.54 914.04 396.67 912.55 C 423.67 911.52 452.18 906.39 480.87 895.72 C 509.45 885.09 538.21 868.92 565.53 845.41 C 584.51 828.98 564.66 803.14 542.92 788.67 Z M 406.59 711.66 L 406.59 711.66 Z"></path>
            </svg>
            <span>Swiggy</span>
          </div>
          <p>© 2024 Swiggy Clone. Built with React</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.43-.01-.64.96-.69 1.79-1.56 2.45-2.55z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Swiggy Corporate</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Swiggy One</a></li>
              <li><a href="#">Swiggy Instamart</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Ride with us</a></li>
            </ul>

            <h4 className="mt-4">Legal</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>We deliver to:</h4>
            <ul className="cities-list">
              <li><a href="#">Bangalore</a></li>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Delhi</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Pune</a></li>
              <li><a href="#">Kolkata</a></li>
              <li><a href="#">+ 500 more cities</a></li>
            </ul>
          </div>
        </div>

        {/* App Download */}
        <div className="footer-app">
          <h4>Download App</h4>
          <div className="app-badges">
            <a href="#" className="app-badge">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Play Store" />
            </a>
            <a href="#" className="app-badge">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="App Store" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made by <strong>Aqib Naqvi</strong> | Inspired by Swiggy</p>
      </div>
    </footer>
  );
};

export default Footer;

