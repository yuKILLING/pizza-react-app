const db = require("../db");
class PizzaController {
  async getAllPizzas(req, res) {
    try {
      const pizzasList = await db.query("SELECT * FROM pizzas");
      res.status(201).json(pizzasList.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async addPizza(req, res) {
    try {
      const {
        pizza_name,
        pizza_description,
        pizza_price = 0,
        pizza_status = "none",
        pizza_img,
        pizza_grams,
      } = req.body;
      const query =
        "INSERT INTO pizzas (pizza_name, pizza_description, pizza_price, pizza_status, pizza_img, pizza_grams) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
      const values = [
        pizza_name,
        pizza_description,
        pizza_price,
        pizza_status,
        pizza_img,
        pizza_grams,
      ];
      const newPizza = await db.query(query, values);
      res.status(201).json(newPizza.rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async updatePizzaOrders(req, res) {
    try {
      const cart = req.body;
      console.log(cart)
      for (const pizza of cart) {
        const { pizza_name } = pizza;
        const query =
          "UPDATE pizzas SET pizza_orders = pizza_orders + 1 WHERE pizza_name = $1 RETURNING *";
        const values = [pizza_name];
        await db.query(query, values);
      }

      res.status(200).json({ message: "Pizza orders updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PizzaController();
