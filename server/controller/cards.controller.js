const db = require("../db");

class CardsController {
  async getAllUserCards(req, res) {
    try {
      const { user_id } = req.query;
      const cardList = await db.query(
        `SELECT * FROM credit_cards WHERE card_user = $1`,
        [user_id]
      );
      res.status(200).json(cardList.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async addCard(req, res) {
    try {
      const { card_number, card_owner, mm_yy, cvv, user_id } = req.body;
      const query =
        "INSERT INTO credit_cards (card_number, card_owner, mm_yy, cvv, card_user) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [card_number, card_owner, mm_yy, cvv, user_id];
      const newCard = await db.query(query, values);
      res.status(200).json(newCard.rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUserCard(req, res) {
    try {
      const { card_id } = req.query;
      const deletedCard = await db.query(
        `DELETE FROM credit_cards WHERE card_id = $1`,
        [card_id]
      );
      res.status(200).json(deletedCard.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CardsController();
