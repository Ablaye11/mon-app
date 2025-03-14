const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Bienvenue sur Notre Application' });
});

app.listen(PORT, () => {
    console.log(` Serveur démarré sur http://localhost:${PORT}`);
});
