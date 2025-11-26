const { getMenuData } = require('../mockData');

module.exports = async (req, res) => {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const restaurantId = req.query.restaurantId;
  
  if (!restaurantId) {
    return res.status(400).json({ error: "Restaurant ID required" });
  }
  
  try {
    const data = getMenuData(restaurantId);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching menu:', error.message);
    res.status(500).json({ error: "Failed to fetch menu", details: error.message });
  }
};
