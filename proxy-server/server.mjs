import express from 'express';
import fetch from 'node-fetch';
const app = express();

const API_BASE_URL = 'https://travel-dummy-api.netlify.app/';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const response = await fetch(API_BASE_URL + slug);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar dados da API.' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor proxy rodando na porta ${PORT}`);
});
