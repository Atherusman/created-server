const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use("", require("./productRouter/productRoute.js"));
app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
