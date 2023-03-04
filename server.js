const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
// console.log("start")

app.get('/*', function (req, res) {
    // console.log("start")
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);   