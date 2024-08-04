const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const fileUpload = require("express-fileupload");
app.use(fileUpload({ defCharset: "utf8", defParamCharset: "utf8" }));

const cors = require("cors");
app.use(cors());

const pizzaRouter = require("./routes/pizzaRouter");
app.use("/pizza", pizzaRouter);

// const uploadRouter = require("./routes/uploadRouter");
// app.use("/upload", uploadRouter);

// const userRouter = require("./routes/userRouter");
// app.use("/user", userRouter);  

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
