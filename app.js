const express = require('express');
const app = express();

const rotaAnimesShounen = require('./src/routes/animesShounen');

app.use('/animesshounen', rotaAnimesShounen);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(5050, () => console.log('Servidor rodando na porta 5050!'));