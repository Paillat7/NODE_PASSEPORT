const express = require ('express');
const router = express.Router();
// Pour la page welcome on doit modifier le fichier index.js à la place de res.send('Welcome') on mettra plutôt res.render
//router.get('/', (req,res) => {  res.send('Welcome')});
router.get('/', (req,res) => {  res.render('welcome.ejs')});
module.exports= router;
