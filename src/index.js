const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('src/public'));

app.get('/', (req, res) => {
  res.sendFile("./public", 'index.html')
});

app.listen(PORT, () => {
console.log(`App up at port ${PORT}`);
});