//Importazione del file in data (post.js)

const arrayPosts = require(`../data/posts.js`)

//Index

function index (req,res){
    //res.send(`Lista dei post`)

    //Logica CRUD per l'index per la restituzione della lista dei post in formato JSON

    let filteredPost = arrayPosts

    //In caso che nella richiesta ci fosse un filtro, si filtrano i post con un if

    if (req.query.tags){
        filteredPost = arrayPosts.filter(
            post => post.tags.includes (req.query.tags)
        )
    }

    //restituzione in json

    res.json(filteredPost);
  };
  
  //Show
  
  function show(req,res){
    res.send(`Dettagli dei post` + req.params.id)

    //Recupero dell'id nel file di data (posts.js) e si trasforma in numero con il parseInt

    
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