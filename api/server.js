const express = require('express');

const heros = require('../heros/herosModel.js');

const server = express();

server.use(express.json());

server.get('/heros', async (req, res) => {
    try {
      const rows = await heros.fetch();
      res.status(200).json(rows);
    } catch(err) {
      res.status(500).json({error: "trouble getting heros"})
    }
  
  });
  
  server.post('/heros', async (req, res) => {
    try {
      const newHero = req.body;
      if (newHero.name && typeof newHero.name === "string" && newHero.name !== "" && newHero.name.length <= 255) {
        const posted = await heros.insert(newHero);
  
        res.status(201).json(posted);
      }
      else {
        res.status(400).json({error: "hero requires name that is a string less than 255 characters"})
      }
    } catch(err) {
      res.status(500).json({error: "trouble adding hero"})
    }
  })
  
  server.delete('/heros/:id', async (req, res) => {
    try {
      const {id} = req.params;
        const count = await heros.remove(id);
  
        if(!count || count < 1){
            res.status(404).json({message: "hero does not exist"})
        } else{
            res.status(200).json(count);
        }
      }
      catch (err) {
        res.status(500).json({message: "trouble deleting hero"});
        }
  })
  
  module.exports = server; 