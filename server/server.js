const express = require('express');
const path = require('path');

app = express();


app.use(express.static(path.join(__dirname, '../public')));



app.listen(8080, () => {
  console.log('LiStEnInG oN pOrT 8080!!!!');
});
