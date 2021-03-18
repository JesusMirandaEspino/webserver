const http = require('http');


http.createServer( ( req, res ) => {

    res.writeHead( 200, { 'Content-Type': 'application/json' } )


   // res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
   // res.writeHead( 200, { 'Content-Type': 'application/csv' } )

/*
    res.write( 'Id', 'Nombre' );
    res.write( '1', 'Yisus' );
    res.write( '2', 'Mutuelo' );
    res.write( '3', 'Json' );
    res.write( '4', 'Ramo' );

*/
    const persona = {
        id: 1,
        nombre: 'Jesus'
    }

    res.write( JSON.stringify( persona ) );
    res.end();
} ).listen( 8080 );


console.log( 'Escuchando el puerto ', 8080 );