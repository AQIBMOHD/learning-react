const express = require('express');
const cors = require('cors');
const { getRestaurantList, getMenuData } = require('./mockData');

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Swiggy Clone API Server',
    endpoints: [
      'GET /api/restaurants - Get list of restaurants',
      'GET /api/menu?restaurantId=<id> - Get menu for a restaurant'
    ]
  });
});

// Get restaurant list
app.get('/api/restaurants', (req, res) => {
  try {
    console.log('Fetching restaurant list...');
    const data = getRestaurantList();
    console.log(`Returning ${data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length || 0} restaurants`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching restaurants:', error.message);
    res.status(500).json({ error: "Failed to fetch restaurants", details: error.message });
  }
});

// Get menu for a specific restaurant
app.get('/api/menu', (req, res) => {
  const restaurantId = req.query.restaurantId;
  
  if (!restaurantId) {
    return res.status(400).json({ error: "Restaurant ID required" });
  }
  
  try {
    console.log(`Fetching menu for restaurant: ${restaurantId}`);
    const data = getMenuData(restaurantId);
    const restaurantName = data?.data?.cards?.[0]?.card?.card?.info?.name || 'Unknown';
    console.log(`Returning menu for: ${restaurantName}`);
    res.json(data);
  } catch (error) {
    console.error('Error fetching menu:', error.message);
    res.status(500).json({ error: "Failed to fetch menu", details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
============================================
    Swiggy Clone API Server Running!
============================================
  Local:   http://localhost:${PORT}

  Endpoints:
  - GET /api/restaurants
  - GET /api/menu?restaurantId=<id>
============================================
  `);
});
