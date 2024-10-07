const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const users = [
  { username: 'user', password: 'password' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Connexion réussie !' });
  } else {
    res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});