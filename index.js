const { application } = require('express');
const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static('public'));

app.listen(3030, () => {
    console.log('App listening on port 3030');
});

app.get('/', (req, res) => {
    res.render('index');
});