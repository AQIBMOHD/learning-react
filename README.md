# Swiggy Clone - Food Delivery App

A fully functional food delivery application inspired by Swiggy, built with React.js. This project demonstrates modern frontend development practices including state management, routing, API integration, and responsive design.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.6.1-764ABC?style=flat&logo=redux)
![React Router](https://img.shields.io/badge/React_Router-6.22.3-CA4245?style=flat&logo=react-router)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Live Demo

[View Live Demo](#) 

## Features

### Core Functionality
- **Restaurant Listing** - Browse through a curated list of restaurants with ratings, cuisines, and delivery time
- **Search & Filter** - Search restaurants by name and filter by top-rated
- **Restaurant Menu** - View detailed menu with categories, prices, and item descriptions
- **Cart Management** - Add/remove items with quantity controls and persistent cart state
- **User Authentication** - Login/Signup functionality with session persistence

### User Experience
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Shimmer Loading** - Elegant loading states while fetching data
- **Error Handling** - Graceful error states with retry functionality
- **Smooth Animations** - Subtle transitions and hover effects throughout the app

### Technical Highlights
- **Redux State Management** - Centralized store for cart and authentication state
- **Custom Hooks** - Reusable logic for data fetching and debounced search
- **Code Splitting** - Optimized bundle size with lazy loading
- **LocalStorage Persistence** - Cart and user session preserved across browser sessions

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, JavaScript (ES6+), HTML5, CSS3 |
| **State Management** | Redux Toolkit, React-Redux |
| **Routing** | React Router DOM v6 |
| **Build Tool** | Parcel Bundler |
| **Backend** | Node.js, Express.js |
| **Styling** | Custom CSS with CSS Variables |

## Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Page
![Home Page](screenshots/home.png)

### Restaurant Menu
![Menu Page](screenshots/menu.png)

### Cart
![Cart Page](screenshots/cart.png)

### Login Modal
![Login](screenshots/login.png)

</details>

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AQIBMOHD/ReactLearning.git
   cd ReactLearning
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd proxy-server
   npm install
   cd ..
   ```

4. **Start the API server**
   ```bash
   cd proxy-server
   node server.js
   ```

5. **Start the React application** (in a new terminal)
   ```bash
   npm start
   ```

6. **Open in browser**
   ```
   http://localhost:1234
   ```

## Project Structure

```
swiggy-clone/
├── src/
│   ├── component/
│   │   ├── Header.js          # Navigation with search, cart, user menu
│   │   ├── Body.js            # Restaurant listing with filters
│   │   ├── RestaurantCard.js  # Individual restaurant card
│   │   ├── Restaurantmenu.js  # Menu page with categories
│   │   ├── Cart.js            # Shopping cart with bill details
│   │   ├── LoginModal.js      # Authentication modal
│   │   ├── Footer.js          # Site footer
│   │   ├── Shimmer.js         # Loading skeleton
│   │   └── Error.js           # Error boundary
│   │
│   ├── utils/
│   │   ├── store.js           # Redux store configuration
│   │   ├── cartSlice.js       # Cart state management
│   │   ├── authSlice.js       # Authentication state
│   │   ├── constant.js        # API endpoints & constants
│   │   └── UserContext.js     # React context for user
│   │
│   └── App.js                 # Root component with routing
│
├── proxy-server/
│   ├── server.js              # Express API server
│   ├── mockData.js            # Restaurant & menu data
│   └── api/                   # Vercel serverless functions
│
├── index.html                 # HTML entry point
├── index.css                  # Global styles
└── package.json               # Dependencies & scripts
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/restaurants` | Fetch all restaurants |
| GET | `/api/menu?restaurantId={id}` | Fetch menu for a restaurant |

## Key Concepts Implemented

### React Concepts
- Functional Components with Hooks
- useState, useEffect, useContext, useCallback
- Custom Hooks for reusable logic
- Conditional Rendering
- Props & State Management
- Event Handling

### Redux Implementation
- Store Configuration with Redux Toolkit
- Slice Pattern for state management
- Selectors for derived state
- Async actions with middleware

### Performance Optimizations
- Debounced search input
- Image lazy loading with fallbacks
- Memoization where applicable
- Efficient re-renders with proper keys

## What I Learned

- Building scalable React applications with proper folder structure
- State management patterns with Redux Toolkit
- Client-side routing with React Router v6
- Creating responsive layouts with CSS Grid and Flexbox
- API integration and error handling
- User authentication flow implementation
- Performance optimization techniques

## Future Enhancements

- [ ] Implement actual payment gateway integration
- [ ] Add order history and tracking
- [ ] Implement real-time order status updates
- [ ] Add restaurant reviews and ratings
- [ ] Implement address management with maps
- [ ] Add dark mode toggle
- [ ] PWA support for offline functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Swiggy](https://www.swiggy.com/) - For the design inspiration
- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

---

## Author

**Md Aqib (Aqib Naqvi)**

[![GitHub](https://img.shields.io/badge/GitHub-AQIBMOHD-181717?style=flat&logo=github)](https://github.com/AQIBMOHD)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Md_Aqib-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/md-aqib-b6b429187)

---

<p align="center">
  <b>If you found this project helpful, please give it a star!</b>
</p>
