const express = require('express');
const app = express();
const port = 1338;

// app.set('view engine', 'ejs')
// app.use(express.static('files'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/app.js', (req, res) => {
    res.sendFile(__dirname + '/app.js');
})

app.listen(port, () => console.log(`Listening on port ${port}`));