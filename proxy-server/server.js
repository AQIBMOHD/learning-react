const express = require('express');
const axios = require('axios');
const cors = require('cors');   // ✅ import cors

const app = express();

app.use(cors());  // ✅ allow all origins

app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244807", {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching restaurants:', error.message);
    res.status(500).json({ error: "Failed to fetch restaurants", details: error.message });
  }
});

app.get('/api/menu', async (req, res) => {
  const restaurantId = req.query.restaurantId;
  if (!restaurantId) return res.status(400).json({ error: "Restaurant ID required" });
  try {
    const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.6244807&restaurantId=${restaurantId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching menu:', error.message);
    res.status(500).json({ error: "Failed to fetch menu", details: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
