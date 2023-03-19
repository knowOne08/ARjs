const express = require('express');
const app = express();
const path = require('path');

app.set('/', "html");
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    req.render('index');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080')
});