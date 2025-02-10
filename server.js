const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Benvinguda
app.get('/', (req, res) => {
    res.send('Benvingut al servidor!');
});

// Usuaris
app.get('/usuaris', (req, res) => {
    res.send("Llistat d'usuaris");
});

app.post('/usuaris', (req, res) => {
    res.send('Nou usuari creat');
});

app.put('/usuaris/:id', (req, res) => {
    res.send('Usuari actualitzat');
});

app.patch('/usuaris/:id', (req, res) => {
    res.send('Usuari parcialment editat');
});

app.delete('/usuaris/:id', (req, res) => {
    res.send('Usuari eliminat');
});

// Productes
app.get('/productes', (req, res) => {
    res.send('Llistat de productes disponibles');
});

app.post('/producte', (req, res) => {
    res.send('Nou producte afegit');
});

app.put('/producte/:id', (req, res) => {
    res.send('Producte actualitzat');
});

app.delete('/producte/:id', (req, res) => {
    res.send('Producte eliminat');
});

// Comandes
app.get('/comandes', (req, res) => {
    res.send('Llistat de comandes realitzades');
});

app.post('/comandes', (req, res) => {
    res.send('Nova comanda creada');
});

app.patch('/comandes/:id', (req, res) => {
    res.send('Estat de la comanda actualitzat');
});

// Serveis
app.get('/serveis', (req, res) => {
    res.send('Llistat de serveis oferts');
});

app.post('/serveis', (req, res) => {
    res.send('Nou servei afegit');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})