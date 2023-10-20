var pg = require('pg');
const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("F1 Roasters IMS (coming soon)");
});

app.listen(PORT, () => {
console.log(`App up at port ${PORT}`);
});
