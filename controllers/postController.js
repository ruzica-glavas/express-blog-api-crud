//Importazione del file in data (post.js)

const arrayPosts = require(`../data/posts.js`)

//Index

function index (req,res){
    //res.send(`Lista dei post`) --> Cancello perché se no, non mi legge il codice

    //Logica CRUD per l'index per la restituzione della lista dei post in formato JSON

    let filteredPost = arrayPosts

    //In caso che nella richiesta ci fosse un filtro, si filtrano i post con un if. Il filtro in questo caso é il tag

    if (req.query.tags){
        filteredPost = arrayPosts.filter(
            post => post.tags.includes (req.query.tags)
        )
    }

    //restituzione in json perché sono oggetti

    res.json(filteredPost);
  };
  
  //Show
  
  function show(req,res){
    //res.send(`Dettagli dei post` + req.params.id) --> Cancello perché se no, non mi legge il codice

    //Recupero dell'id nel file di data (posts.js) e si trasforma in numero con il parseInt
    
    const id = parseInt (req.params.id)

    //Ricerca del post tramite il proprio id con il find

    const post = arrayPosts.find (post=>post.id ===id)

    // Controllo in caso l'oggetto non fosse presente

    if(!post){
        res.status(404);
        return res.json({
            status: 404,
            error: "Not found",
            message: "Il post cercato non esiste"

        })
    }

    //Restituzione in json perché sono oggetti
    res.json(post)
    
  };
  
  //Create (Store) --> post su Postman
  
  function store(req,res){
    console.log(req.body);
    res.send(`Creazione di nuovi post`);

    
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
    //res.send(`Eliminazione dei post` + req.params.id) --> Cancello perché se no, non mi legge il codice

    //Recupero dell'id e conversione in numero
    const id = parseInt (req.params.id)

    //Ricerca del post tramite l'id (con find)

    const post = arrayPosts.find (post=>post.id ===id)

    //Controllo per verificare se l'id del post si trova negli array

    if(!post){
        res.status(404);
        return res.json({
            status: 404,
            error: "Not found",
            message: "Il post cercato non esiste"

        })
    }


    //Rimozione del post

    arrayPosts.splice (arrayPosts.indexOf(post), 1)

    
    
    //Restituzione dello status corretto

        res.sendStatus(204)

      //console.log per vedere da terminale il risultato  
      console.log(arrayPosts)
  };
  

 
    
  
  
  //Esportazione dei dati
  module.exports = { index, show, store, update, patch, destroy }