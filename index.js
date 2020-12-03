const express = require("express");
const app = express();

app.get('/status', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});