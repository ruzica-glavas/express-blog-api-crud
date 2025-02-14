const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js'); //l'import della cartella router

//Importazione dei middlewares
const errorsHandler = require ("./middlewares/errorsHandler.js")
const notFound = require ("./middlewares/notFound.js")

//Inserire la lettura dei middleware
app.use(errorsHandler);
app.use (notFound)

//Inserire la lettura della cartella public
app.use(express.static('public'));


//body-parser
app.use(express.json());


//Indica a express una nuova rotta, in questo caso il prefisso sarà "/posts" e il router postsRouter
app.use("/posts", postsRouter);





//Attiva il server http:localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});