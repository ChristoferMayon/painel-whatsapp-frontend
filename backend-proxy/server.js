const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path'); // Adicione esta linha para manipulação de caminhos

const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS (permite que seu frontend se comunique com o backend)
// O '*' é para desenvolvimento. Para produção, se o seu frontend estiver em uma URL diferente,
// considere especificar a URL exata do seu frontend aqui.
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Para parsear JSON no corpo das requisições

// ADIÇÃO CRÍTICA: Servir os arquivos estáticos do frontend
// '__dirname' é o diretório onde server.js está (backend-proxy)
// '..' significa subir um nível para acessar a raiz do seu projeto (onde está index.html)
app.use(express.static(path.join(__dirname, '..')));

// Endpoint para enviar mensagens de carrossel via Z-API
app.post('/send-carousel-message', async (req, res) => {
    const { phone, message, carousel, delayMessage } = req.body;

    const ZAPI_TOKEN = process.env.ZAPI_TOKEN;
    const ZAPI_CLIENT_TOKEN = process.env.ZAPI_CLIENT_TOKEN;
    const ZAPI_INSTANCE_ID = process.env.ZAPI_INSTANCE_ID;

    if (!ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN || !ZAPI_INSTANCE_ID) {
        return res.status(500).json({ error: "Credenciais do Z-API não configuradas no servidor." });
    }

    const zapiPayload = {
        phone: phone,
        message: message,
        carousel: carousel,
        delayMessage: delayMessage
    };

    try {
        const zapiUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/send-carousel`; // Adapte se o endpoint do Z-API for diferente

        const response = await axios.post(zapiUrl, zapiPayload, {
            headers: {
                'Client-Token': ZAPI_CLIENT_TOKEN,
                'Token': ZAPI_TOKEN,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao enviar mensagem via Z-API:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({
            error: 'Erro ao enviar mensagem via Z-API',
            details: error.response ? error.response.data : error.message
        });
    }
});

// ADIÇÃO CRÍTICA: Para rotas não encontradas (SPA fallback)
// Qualquer rota que não seja tratada pelos endpoints acima, redireciona para index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});


app.listen(port, () => {
    console.log(`Proxy e frontend rodando na porta ${port}`);
});
