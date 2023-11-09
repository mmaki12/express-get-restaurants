const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");
const { check, validationResult } = require("express-validator");
const router = express.Router();

//TODO: Create your GET Request Route Below: 
app.get("/restaurant", async (req, res) => {
    const restaurants = await restaurant.findAll();
    res.json(restaurants);
})




const seedRestaurant = [];

// Middleware to parse JSON data
router.use(express.json());

// Define a GET / route to return all restaurants
router.get('/', (req, res) => {
  res.json(seedRestaurant);
});

// Define a POST / route to add a restaurant
router.post('/restaurants', [
  check('name').not().isEmpty().trim().withMessage('Name is required'),
  check('location').not().isEmpty().trim().withMessage('Location is required'),
  check('cuisine').not().isEmpty().trim().withMessage('Cuisine is required'),
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const newRestaurant = req.body;
  seedRestaurant.push(newRestaurant);
  res.json(seedRestaurant);
});

module.exports = router;
module.exports = app;