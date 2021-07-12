
const express = require('express');
const app = express();
const port = 3000;
const {friendlist} = require(`./friendslist`) 

app.get('/', (req, res) => {
  res.json(friendlist)
});

app.post('/', function (req, res) {
    res.json(friendlist)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})