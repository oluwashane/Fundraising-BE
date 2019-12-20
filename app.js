const express = require('express');
require('./src/db/mongoose');
const bodyParser = require('body-parser');
const fund = require('./src/routes/funds.routes');

const PORT = 3000;
// init Express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/funds', fund);



app.listen(PORT, () => {
    console.log(`Server run on post ${PORT}`);
})