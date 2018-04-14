// import express from 'express';
const express = require('express');
// import path from 'path';
const path = require('path');

const app = express();

/*
FOLDER STRUCTURE:

root
  app
  server
     server.js
	package.json
  index.html
  package.json
*/

app.get("/notes", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send([
    {text: "First note"},
    {text: "Second note"},
    {text: "Third note"},
    {text: "Fin note"},
  ]);
});

app.use(express.static(path.join(__dirname, '..')));

app.listen(8080);
