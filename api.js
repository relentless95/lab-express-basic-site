const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
//app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'views')))

app.get('/', async(req, res)=>{
    let characters = await axios.get('https://rickandmortyapi.com/api/character');
    console.log('here are the chars', characters.data);
    let charsArr = characters.data.results;
    res.render('index', {charsArr});
})

app.listen(3000, ()=>console.log(`run on port 3000`))