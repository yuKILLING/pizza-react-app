const Router = require("express");
const router = new Router();
const CardsController = require("../controller/cards.controller");


// Pizza's table routes
router.get("/getallusercards", CardsController.getAllUserCards);
router.post("/addcard", CardsController.addCard);
router.delete("/deletecard", CardsController.deleteUserCard);



module.exports = router;
