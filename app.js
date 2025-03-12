const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Définir EJS comme moteur de template
app.set('view engine', 'ejs');

// Middleware pour les fichiers statiques
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
    res.render('index', { title: 'Bienvenue sur Notre Application' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
