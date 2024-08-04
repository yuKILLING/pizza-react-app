const db = require("../db");
class PizzaController {
  async getAllPizzas(req, res) {
    try {
      const pizzasList = await db.query("SELECT * FROM pizzas");
      res.status(201).json(pizzasList.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addPizza(req, res) {
    try {
      const {
        pizza_name,
        pizza_description,
        pizza_price = 0,
        pizza_status = 'none',
        pizza_img,
      } = req.body;
      const query =
        "INSERT INTO pizzas (pizza_name, pizza_description, pizza_price, pizza_status, pizza_img) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [
        pizza_name,
        pizza_description,
        pizza_price,
        pizza_status,
        pizza_img,
      ];
      const newPizza = await db.query(query, values);
      res.status(201).json(newPizza.rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new PizzaController();
