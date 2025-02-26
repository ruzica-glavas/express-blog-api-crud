const express = require("express");
const cors = require('cors') // per inserire il cors
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js'); //l'import della cartella router

//Importazione dei middlewares
const errorsHandler = require ("./middlewares/errorsHandler.js")
const notFound = require ("./middlewares/notFound.js");

//Importazione del cors

app.use(cors())


//Inserire la lettura della cartella public
app.use(express.static('public'));


//body-parser
app.use(express.json());

//Indica a express una nuova rotta, in questo caso il prefisso sarà "/posts" e il router postsRouter
app.use("/posts", postsRouter);

//Inserire la lettura dei middleware
app.use(errorsHandler);
app.use (notFound);


//Attivazione del cors nella porta che ci serve  
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

//Attiva il server http:localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

