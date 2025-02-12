const express = require('express')
const router = express.Router();

//Index

router.get(`/`, function(req,res){
  res.send(`Lista dei post`)
});

//Show

router.get(`/:id`, function(req,res){
  res.send(`Dettagli dei post`)
});

//Create (Store)

router.post(`/`, function(req,res){
  res.send(`Creazione di nuovi post`)
});

//Update

router.put(`/:id`, function(req,res){
  res.send(`Modifica integrale dei post` + req.params.id)
});

//Modify

router.patch(`/:id`, function(req,res){
  res.send(`Modifica parziale dei post` + req.params.id)
});

//Delete (Destroy)

router.delete(`/:id`, function(req,res){
  res.send(`Eliminazione dei post` + req.params.id)
});

module.exports = router;