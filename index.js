const express = require('express');
const app = express();
const connection = require('./database/connection');

connection
    .authenticate()
    .then(() => {
        console.log('Database connected');
    }).catch((error) => {
        console.log(error);
    })

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(8080, () => {
    console.log('🚀 Server started at http://localhost:8080');
});