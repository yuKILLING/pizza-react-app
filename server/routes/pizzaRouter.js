const Router = require("express");
const router = new Router();
const PizzaController = require("../controller/pizza.controller");


// Pizza's table routes
router.get("/getallpizzas", PizzaController.getAllPizzas);
router.post("/addpizza", PizzaController.addPizza);
router.post("/addorder", PizzaController.updatePizzaOrders);


module.exports = router;
