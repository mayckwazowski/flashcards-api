const express = require("express");
const app = express();
const banco = require("./dados.mock.json");

app.use(express.json());

// CRUD - CREATE READ UPDATE DELETE
app.get( "/api/colecoes", function( req, res){
    res.json( banco.colecoes );
} );

app.get( "/api/colecoes/:id", function( req, res){
    const { id } = req.params;
    const colecao = banco.colecoes.find( col => col.colecaoId == id );

    if( !colecao ) res.status(204).json();

    res.json( colecao );
} );

app.post( "/api/colecoes", function( req, res){
    const { descricao, publico } = req.body;
    const colecaoId = banco.seqColecaoId++;

    // salvar

    res.json( colecao );
} );


app.listen( 3000, function(){
    console.log('Server rodando');
} );
