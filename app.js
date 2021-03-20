const express = require('express');
const hbs = require('hbs');


const app = express();
const port = 8080;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/includes', function (err) {});



//TODO Servir contenido estatico

app.use( express.static( 'public' ) );


app.get('/',  (req, res) => {
    res.render( 'home', {
        nombre: 'Jesus Miranda',
        titulo: 'Practica curso de Nodejs'
    } );
});


app.get('/generic',  (req, res) => {
    res.render( 'generic', {
        nombre: 'Jesus Miranda',
        titulo: 'Practica curso de Nodejs'
    } );
});

app.get('/elements',  (req, res) => {
    res.render( 'elements', {
        nombre: 'Jesus Miranda',
        titulo: 'Practica curso de Nodejs'
    } );
});

app.get('/generic',  (req, res) => {
    res.sendFile( __dirname + '/views/generic.html');
});

app.get('/elements',  (req, res) => {
    res.sendFile( __dirname + '/public/elements.html');
});



app.get('*', (req, res) =>  {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})