const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("F1 Roasters IMS (coming soon)");
  console.log("Did it work?")
});

app.listen(PORT, () => {
console.log(`App up at port ${PORT}`);
});

// Test database connection stuff
// const { Client } = require('pg')
// var fs = require('fs');
// const client = new Client({
//   user: 'pxtfnuiunqylqt',
//   host: 'ec2-35-169-9-79.compute-1.amazonaws.com',
//   database: 'denh9ihtjut7gi',
//   password: '120b612879679e1bcbe878a83d862531aee14015a25921276ad66a20ab45a0f7',
//   port: 5432,
//   ssl  : {
//     ca : fs.readFileSync('<path to CA cert file>')
//   }
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });