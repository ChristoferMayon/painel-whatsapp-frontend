const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Carrega variáveis do .env

const app = express();
const port = process.env.PORT || 3000;

// CORS liberado para todas as origens (ajuste se quiser restringir)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ====== VARIÁVEIS DO Z-API ======
const ZAPI_INSTANCE_ID = process.env.ZAPI_INSTANCE_ID;
const ZAPI_ACCOUNT_SECURITY_TOKEN = process.env.ZAPI_ACCOUNT_SECURITY_TOKEN;
const ZAPI_INSTANCE_PATH_TOKEN = process.env.ZAPI_INSTANCE_PATH_TOKEN;

if (!ZAPI_INSTANCE_ID || !ZAPI_ACCOUNT_SECURITY_TOKEN || !ZAPI_INSTANCE_PATH_TOKEN) {
    console.error("❌ Variáveis da Z-API não estão definidas corretamente. Verifique seu .env");
}

// ========== ROTA: MENSAGEM COM BOTÃO ==========
app.post('/send-whatsapp-message', async (req, res) => {
    try {
        const { numero, mensagem, tituloBotao, linkBotao } = req.body;

        if (!numero || !mensagem || !tituloBotao || !linkBotao) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const payload = {
            phone: numero,
            message: mensagem,
            footer: "Unlock Apple",
            buttonActions: [
                {
                    id: "1",
                    type: "URL",
                    url: linkBotao,
                    label: tituloBotao
                }
            ]
        };

        const response = await fetch(`https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/send-multi-carousel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Client-Token": ZAPI_ACCOUNT_SECURITY_TOKEN
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error("Erro ao enviar botão:", error);
        res.status(500).json({ error: 'Erro interno', message: error.message });
    }
});

// ========== ROTA: MENSAGEM CARROSSEL ==========
app.post('/send-carousel-message', async (req, res) => {
    try {
        const { phone, message, carousel, delayMessage } = req.body;

        if (!phone || !message || !carousel || !Array.isArray(carousel) || carousel.length === 0) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
        }

        const payload = {
            phone,
            message,
            carousel,
            ...(delayMessage && { delayMessage })
        };

        const response = await fetch(`https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_INSTANCE_PATH_TOKEN}/send-carousel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Client-Token": ZAPI_ACCOUNT_SECURITY_TOKEN
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error("Erro ao enviar carrossel:", error);
        res.status(500).json({ error: 'Erro interno', message: error.message });
    }
});

// ========== ROTA: MENSAGEM TEXTO SIMPLES ==========
app.post('/send-simple-text', async (req, res) => {
    try {
        const { phone, message } = req.body;

        if (!phone || !message) {
            return res.status(400).json({ error: 'Campos "phone" e "message" são obrigatórios.' });
        }

        const payload = { phone, message };

        const response = await fetch(`https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_INSTANCE_PATH_TOKEN}/send-text`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Client-Token": ZAPI_ACCOUNT_SECURITY_TOKEN
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error("Erro ao enviar texto simples:", error);
        res.status(500).json({ error: 'Erro interno', message: error.message });
    }
});

// ========== INICIAR SERVIDOR ==========
app.listen(port, () => {
    console.log(`✅ Servidor iniciado na porta ${port}`);
});
