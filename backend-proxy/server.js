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

    const ZAPI_TOKEN = process.env.ZAPI_TOKEN; // O token da instância
    const ZAPI_CLIENT_TOKEN = process.env.ZAPI_CLIENT_TOKEN; // O Client-Token da conta
    const ZAPI_INSTANCE_ID = process.env.ZAPI_INSTANCE_ID;

    if (!ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN || !ZAPI_INSTANCE_ID) {
        return res.status(500).json({ error: "Credenciais do Z-API não configuradas no servidor." });
    }

    // ADIÇÃO CRÍTICA: Remapear o array 'carousel' para o formato 'elements' que o Z-API espera
    const elements = carousel.map(card => {
        const buttons = card.buttons.map(btn => {
            let buttonZapiFormat = { text: btn.label }; // 'text' para o label do botão

            if (btn.type === 'URL') {
                buttonZapiFormat.type = 'url';
                buttonZapiFormat.url = btn.url;
            } else if (btn.type === 'REPLY') {
                buttonZapiFormat.type = 'reply';
                // Para reply, o Z-API usa apenas 'text'. O 'id' do botão é tratado internamente pelo Z-API.
                // Se o Z-API precisar do 'id' no payload, você teria que adicionar aqui.
                // Ex: buttonZapiFormat.id = btn.id; (verifique a documentação de reply button se precisar de ID)
            } else if (btn.type === 'CALL') {
                buttonZapiFormat.type = 'call';
                buttonZapiFormat.phone = btn.phone;
            }
            return buttonZapiFormat;
        });

        return {
            media: card.image, // URL da imagem do carrossel
            text: card.text,   // Texto do cartão do carrossel
            buttons: buttons
        };
    });

    // ADIÇÃO CRÍTICA: Ajustar o payload para o formato esperado pelo Z-API
    const zapiPayload = {
        phone: phone,
        elements: elements // Agora é 'elements', não 'carousel'
        // A documentação do Z-API não menciona 'message' como mensagem geral do carrossel,
        // nem 'delayMessage' para este endpoint. Se precisar de mensagem geral ou delay,
        // verifique outros endpoints ou formas de fazer isso com a Z-API.
        // Por enquanto, removemos message e delayMessage do payload para este endpoint específico.
    };
    
    // ATENÇÃO: Ajustar a URL para incluir o token da instância diretamente na URL,
    // conforme a documentação da Z-API.
    const zapiUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_TOKEN}/send-carousel`; 

    try {
        const response = await axios.post(zapiUrl, zapiPayload, {
            headers: {
                'Client-Token': ZAPI_CLIENT_TOKEN, // O Client-Token continua indo no header
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

// Para rotas não encontradas (SPA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'carousel_panel_stylish.html')); 
});


app.listen(port, () => {
    console.log(`Proxy e frontend rodando na porta ${port}`);
});
