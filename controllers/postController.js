//Importazione del file in data (post.js)

const arrayPosts = require(`../data/posts.js`)

//Index

function index (req,res){
    res.send(`Lista dei post`)
  };
  
  //Show
  
  function show(req,res){
    res.send(`Dettagli dei post` + req.params.id)
  };
  
  //Create (Store) --> post su Postman
  
  function store(req,res){
    res.send(`Creazione di nuovi post`)
  };
  
  //Update --> put
  
  function update(req,res){
    res.send(`Modifica integrale dei post` + req.params.id)
  };
  
  //Modify --> patch
  
  function patch(req,res){
    res.send(`Modifica parziale dei post` + req.params.id)
  };
  
  //Delete (Destroy)
  
  function destroy (req,res){
    res.send(`Eliminazione dei post` + req.params.id)
  };
  
  //Esportazione dei dati
  module.exports = { index, show, store, update, patch, destroy }