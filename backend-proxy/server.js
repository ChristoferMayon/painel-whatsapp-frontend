const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS (permite que seu frontend se comunique com o backend)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Para parsear JSON no corpo das requisições

// Serve os arquivos estáticos do frontend.
// '__dirname' é o diretório onde server.js está (backend-proxy)
// '..' significa subir um nível para acessar a raiz do seu projeto
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
        const zapiUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/messages/send-carousel`;

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
// Qualquer rota que não seja tratada pelos endpoints acima, redireciona para o seu arquivo HTML principal.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'carousel_panel_stylish.html')); // <--- AQUI ESTÁ A MUDANÇA!
});


app.listen(port, () => {
    console.log(`Proxy e frontend rodando na porta ${port}`);
});
