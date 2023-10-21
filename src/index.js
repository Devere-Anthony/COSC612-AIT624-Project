const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.get("/", (req, res) => {
  res.send("F1 Roasters IMS (coming soon)");
});

app.listen(PORT, () => {
console.log(`App up at port ${PORT}`);
});
