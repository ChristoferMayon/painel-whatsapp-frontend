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

// --- NOVO ENDPOINT: Enviar Mensagem de Texto Simples ---
app.post('/send-simple-text', async (req, res) => {
    const { phone, message } = req.body; // Supondo que o frontend envie 'phone' e 'message'

    console.log("Payload recebido do frontend (Texto Simples):", JSON.stringify(req.body, null, 2));

    const ZAPI_TOKEN = process.env.ZAPI_TOKEN;
    const ZAPI_CLIENT_TOKEN = process.env.ZAPI_CLIENT_TOKEN;
    const ZAPI_INSTANCE_ID = process.env.ZAPI_INSTANCE_ID;

    if (!ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN || !ZAPI_INSTANCE_ID) {
        return res.status(500).json({ error: "Credenciais do Z-API não configuradas no servidor." });
    }

    // Payload para o Z-API (Texto Simples)
    const zapiTextPayload = {
        phone: phone,
        message: message // A Z-API espera o campo 'message' para texto
    };

    // Endpoint para enviar texto simples (verificado na documentação Z-API)
    // Exemplo: https://developer.z-api.io/message/send-text
    const zapiTextUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_TOKEN}/send-text`;

    try {
        const response = await axios.post(zapiTextUrl, zapiTextPayload, {
            headers: {
                'Client-Token': ZAPI_CLIENT_TOKEN,
                'Content-Type': 'application/json'
            }
        });
        console.log("Payload enviado para a Z-API (Texto Simples):", JSON.stringify(zapiTextPayload, null, 2));
        console.log("Resposta recebida da Z-API (Texto Simples - sucesso):", JSON.stringify(response.data, null, 2));
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao enviar texto simples via Z-API:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({
            error: 'Erro ao enviar texto simples via Z-API',
            details: error.response ? error.response.data : error.message
        });
    }
});
// --- FIM DO NOVO ENDPOINT ---


// Endpoint para enviar mensagens de carrossel via Z-API
app.post('/send-carousel-message', async (req, res) => {
    const { phone, message, carousel, delayMessage } = req.body;
    console.log("Payload recebido do frontend (Carrossel):", JSON.stringify(req.body, null, 2));
    
    const ZAPI_TOKEN = process.env.ZAPI_TOKEN;
    const ZAPI_CLIENT_TOKEN = process.env.ZAPI_CLIENT_TOKEN;
    const ZAPI_INSTANCE_ID = process.env.ZAPI_INSTANCE_ID;

    if (!ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN || !ZAPI_INSTANCE_ID) {
        return res.status(500).json({ error: "Credenciais do Z-API não configuradas no servidor." });
    }

    const elements = carousel.map(card => {
        const buttons = card.buttons.map(btn => {
            let buttonZapiFormat = { text: btn.label };

            if (btn.type === 'URL') {
                buttonZapiFormat.type = 'url';
                buttonZapiFormat.url = btn.url;
            } else if (btn.type === 'REPLY') {
                buttonZapiFormat.type = 'reply';
            } else if (btn.type === 'CALL') {
                buttonZapiFormat.type = 'call';
                buttonZapiFormat.phone = btn.phone;
            }
            return buttonZapiFormat;
        });

        return {
            media: card.image,
            text: card.text,
            buttons: buttons
        };
    });

    const zapiPayload = {
        phone: phone,
        elements: elements
    };
    
    console.log("Payload enviado para a Z-API (Carrossel):", JSON.stringify(zapiPayload, null, 2));
    
    const zapiUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_TOKEN}/send-carousel`; 

    try {
        const response = await axios.post(zapiUrl, zapiPayload, {
            headers: {
                'Client-Token': ZAPI_CLIENT_TOKEN,
                'Content-Type': 'application/json'
            }
        });
        console.log("Resposta recebida da Z-API (Carrossel - sucesso):", JSON.stringify(response.data, null, 2));
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao enviar mensagem via Z-API (Carrossel):', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({
            error: 'Erro ao enviar mensagem via Z-API (Carrossel)',
            details: error.response ? error.response.data : error.message
        });
    }
});

// Para rotas não encontradas (SPA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'carousel_panel_stylish.html')); 
});

app.listen(port, () => {
    console.log(`Proxy e frontend rodando na porta ${port}`);
});
