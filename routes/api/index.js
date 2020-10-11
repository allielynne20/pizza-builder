const router = require('express').Router();
const PizzaRoutes = require('./pizza-routes');

//add prefix of `/pizzas` to routes created in the `pizzaroutes.js`
router.use('/pizzas', PizzaRoutes);

module.exports = router; 