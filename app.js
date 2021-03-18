const express = require('express');
const app = express();

const port = 8080;

app.get('/',  (req, res) => {
    res.send('Hello World');
});

app.get('/hola',  (req, res) => {
    res.send('Estas entrando a la pagina hola');
});

app.get('*', (req, res) =>  {
    res.send('404 | Page Not Found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})