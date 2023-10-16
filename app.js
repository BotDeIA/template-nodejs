const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('');
})

app.get('/hola', (req, res) => {
    res.send('Hola mundo');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
