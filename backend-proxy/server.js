const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Usando axios para consistência

const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Serve os arquivos estáticos do frontend.
const path = require('path'); // Certifique-se de que 'path' está importado
app.use(express.static(path.join(__dirname, '..')));

// Endpoint para enviar mensagens de texto simples
app.post('/send-simple-text', async (req, res) => {
    const { phone, message } = req.body;

    console.log("--- ROTA /send-simple-text ---");
    console.log("Payload recebido do frontend (Texto Simples):", JSON.stringify(req.body, null, 2));

    const ZAPI_TOKEN = process.env.ZAPI_TOKEN;
    const ZAPI_CLIENT_TOKEN = process.env.ZAPI_CLIENT_TOKEN;
    const ZAPI_INSTANCE_ID = process.env.ZAPI_INSTANCE_ID;

    if (!ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN || !ZAPI_INSTANCE_ID) {
        return res.status(500).json({ error: "Credenciais do Z-API não configuradas no servidor." });
    }

    const zapiTextPayload = {
        phone: phone,
        message: message
    };

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

// Endpoint para enviar mensagens carrossel
app.post('/send-carousel-message', async (req, res) => {
    const { phone, carousel, message, delayMessage } = req.body; // Incluindo 'message' e 'delayMessage'

    console.log("--- ROTA /send-carousel-message ---");
    console.log("Payload recebido do frontend (Carrossel):", JSON.stringify(req.body, null, 2));
    
    const ZAPI_TOKEN = process.env.ZAPI_TOKEN;
    const ZAPI_CLIENT_TOKEN = process.env.ZAPI_CLIENT_TOKEN;
    const ZAPI_INSTANCE_ID = process.env.ZAPI_INSTANCE_ID;

    if (!ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN || !ZAPI_INSTANCE_ID) {
        return res.status(500).json({ error: "Credenciais do Z-API não configuradas no servidor." });
    }

    // --- CORREÇÃO CRÍTICA AQUI: PAYLOAD PARA Z-API ---
    // Removida a lógica de remapeamento para 'elements'.
    // Agora envia o payload do carrossel EXATAMENTE como o painel que funciona envia.
    const zapiPayload = {
        phone: phone,
        message: message, // Adicionado de volta, conforme o painel que funciona
        carousel: carousel, // Usando o array 'carousel' diretamente, conforme o painel que funciona
        ...(delayMessage && { delayMessage: delayMessage }) // Adicionado de volta, se presente
    };
    // --- FIM DA CORREÇÃO CRÍTICA ---
    
    console.log("Payload enviado para a Z-API (Carrossel):", JSON.stringify(zapiPayload, null, 2));
    
    // A URL permanece a mesma (com token na URL)
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
