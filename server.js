const express = require("express");
const app = express();
// CRUD - CREATE READ UPDATE DELETE
app.get( "/api/materia/:id", function( req, res){
    res.json({
        aula: "Desenvolvimento de Sistemas WEB",
        turma: "INF32B",
        professor: "Mayck Wazowski Cipriano"
    });
} );

//app.delete
/*
post
get
put
delete
*/

app.listen( 3000, function(){
    console.log('Server rodando');
} );