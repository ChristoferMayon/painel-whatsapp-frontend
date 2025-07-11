// ATENÇÃO: Esta URL precisa ser a URL REAL do seu proxy hospedado no Render.com.
// SUBSTITUA 'URL_DO_SEU_PROXY_HOSPEDADO_AQUI' pela URL que o Render te deu (ex: 'https://painel-whatsapp-proxy-api.onrender.com')
const proxyBaseUrl = 'https://painel-whatsapp-frontend.onrender.com'; 
const proxyCarouselUrl = `${proxyBaseUrl}/send-carousel-message`;

const countriesDDI = [
    { name: "Afeganistão", code: "93" }, { name: "Argélia", code: "213" },
    { name: "Angola", code: "244" }, { name: "Argentina", code: "54" },
    { name: "Armênia", code: "374" }, { name: "Austrália", code: "61" },
    { name: "Áustria", code: "43" }, { name: "Bangladesh", code: "880" },
    { name: "Bélgica", code: "32" }, { name: "Bolívia", code: "591" },
    { name: "Brasil", code: "55" }, { name: "Canadá", code: "1" },
    { name: "Chile", code: "56" }, { name: "China", code: "86" },
    { name: "Colômbia", code: "57" }, { name: "Coreia do Sul", code: "82" },
    { name: "Coreia do Norte", code: "850" }, { name: "Costa Rica", code: "506" },
    { name: "Cuba", code: "53" }, { name: "Dinamarca", code: "45" },
    { name: "Ecuador", code: "593" }, { name: "Egito", code: "20" }, 
    { name: "El Salvador", code: "503" }, { name: "Espanha", code: "34" },
    { name: "Estados Unidos", code: "1" }, { name: "Estônia", code: "372" },
    { name: "Filipinas", code: "63" }, { name: "Finlândia", code: "358" },
    { name: "França", code: "33" }, { name: "Gabão", code: "241" },
    { name: "Geórgia", code: "995" }, { name: "Alemanha", code: "49" },
    { name: "Grécia", code: "30" }, { name: "Guatemala", code: "502" },
    { name: "Haiti", code: "509" }, { name: "Holanda (Países Baixos)", code: "31" },
    { name: "Honduras", code: "504" }, { name: "Hungria", code: "36" },
    { name: "Índia", code: "91" }, { name: "Indonésia", code: "62" },
    { name: "Irã", code: "98" }, { name: "Iraque", code: "964" },
    { name: "Irlanda", code: "353" }, { name: "Israel", code: "972" },
    { name: "Itália", code: "39" }, { name: "Japão", code: "81" },
    { name: "Jordânia", code: "962" }, { name: "Quênia", "code": "254" },
    { name: "Kuwait", code: "965" }, { name: "Letônia", code: "371" },
    { name: "Líbano", code: "961" }, { name: "Líbia", code: "218" },
    { name: "Lituânia", code: "370" }, { name: "Luxemburgo", code: "352" },
    { name: "Macau", code: "853" }, { name: "Macedônia do Norte", code: "389" },
    { name: "Malásia", code: "60" }, { name: "Mali", code: "223" },
    { name: "Malta", code: "356" }, { name: "México", code: "52" },
    { name: "Moçambique", code: "258" }, { name: "Marrocos", code: "212" },
    { name: "Namíbia", code: "264" }, { name: "Nepal", code: "977" },
    { name: "Nicarágua", code: "505" }, { name: "Nigéria", code: "234" },
    { name: "Noruega", code: "47" }, { name: "Omã", code: "968" },
    { name: "Paquistão", code: "92" }, { name: "Panamá", code: "507" },
    { name: "Paraguai", code: "595" }, { name: "Peru", code: "51" },
    { name: "Polônia", code: "48" }, { name: "Portugal", code: "351" },
    { name: "Qatar", code: "974" }, { name: "Romênia", code: "40" },
    { name: "Rússia", code: "7" }, { name: "Arábia Saudita", code: "966" },
    { name: "Senegal", code: "221" }, { name: "Sérvia", code: "381" },
    { name: "Singapura", code: "65" }, { name: "Eslováquia", code: "421" },
    { name: "Eslovênia", code: "386" }, { name: "África do Sul", code: "27" },
    { name: "Somália", code: "252" }, { name: "Sudão", code: "249" },
    { name: "Suécia", code: "46" }, { name: "Suíça", code: "41" },
    { name: "Síria", code: "963" }, { name: "Taiwan", code: "886" },
    { name: "Tanzânia", code: "255" }, { name: "Tailândia", code: "66" },
    { name: "Tunísia", code: "216" }, { name: "Turquia", code: "90" },
    { name: "Ucrânia", code: "380" }, { name: "Emirados Árabes Unidos", code: "971" },
    { name: "Reino Unido", code: "44" }, { name: "Uruguai", code: "598" },
    { name: "Uzbequistão", code: "998" }, { name: "Venezuela", code: "58" },
    { name: "Vietnã", code: "84" }, { name: "Iêmen", code: "967" },
    { name: "Zâmbia", code: "260" }, { name: "Zimbábue", code: "263" }
];

// As listas globais de cores e capacidades não são mais usadas para preencher dinamicamente os selects.
// Elas são mantidas aqui caso precise delas para outras validações ou informações gerais.
const coresIphoneGlobal = [
    "Silver", "Space Gray", "Gold", "Rose Gold", "(PRODUCT)RED",
    "White", "Black", "Blue", "Green", "Yellow", "Coral", "Purple",
    "Starlight", "Midnight", "Pacific Blue", "Graphite", "Sierra Blue",
    "Alpine Green", "Deep Purple", "Space Black", "Natural Titanium",
    "Blue Titanium", "White Titanium", "Black Titanium", "Desert Titanium",
    "Jet Black", "Midnight Green", "Pink", "Rose Titanium", "Midnight Titanium"
];

const capacidadesIphoneGlobal = [
    "16 GB", "32 GB", "64 GB", "128 GB", "256 GB", "512 GB", "1 TB", "2 TB"
];

// ************************************************
// DEFINIÇÕES DE MENSAGENS COM ASTERISCOS CORRIGIDOS
// ************************************************

const generalCarouselMessageTemplate = "*🍏 Assistente Virtual Apple – Suporte ao Cliente*";

const defaultCardTemplateText = `*🔔 ALERTA DE LOCALIZAÇÃO: Dispositivo Encontrado*

Detectamos a localização do seu *[MODELO_COMPLETO]*, marcado como Perdido/Roubado.

➡️ Por segurança, uma *imagem* foi capturada no momento da localização. Para visualizar os dados e iniciar o processo de recuperação de forma segura, acesse sua conta Apple:

👇 Toque no *botão* abaixo para continuar com a verificação:
(Você será redirecionado ao portal oficial iCloud)`;

// ************************************************
// FIM DAS DEFINIÇÕES DE MENSAGENS
// ************************************************


// ATENÇÃO: carouselTemplates foi expandido para incluir capacidades e cores por sub-modelo.
// As capacidades são baseadas em informações comuns para cada série/modelo.
const carouselTemplates = [
    {
        id: "iphone_6_series_template",
        name: "Modelo: iPhone 6 / 6S Series",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 6", capacidades: ["16 GB", "64 GB", "128 GB"], cores: ["Silver", "Space Gray", "Gold"] },
            { name: "iPhone 6 Plus", capacidades: ["16 GB", "64 GB", "128 GB"], cores: ["Silver", "Space Gray", "Gold"] },
            { name: "iPhone 6S", capacidades: ["16 GB", "32 GB", "64 GB", "128 GB"], cores: ["Silver", "Space Gray", "Gold", "Rose Gold"] },
            { name: "iPhone 6S Plus", capacidades: ["16 GB", "32 GB", "64 GB", "128 GB"], cores: ["Silver", "Space Gray", "Gold", "Rose Gold"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_se_1gen_template",
        name: "Modelo: iPhone SE (1ª geração - 2016)",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone SE (1ª Geração)", capacidades: ["16 GB", "32 GB", "64 GB", "128 GB"], cores: ["Silver", "Space Gray", "Gold", "Rose Gold"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_7_series_template",
        name: "Modelo: iPhone 7 / 7 Plus",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 7", capacidades: ["32 GB", "128 GB", "256 GB"], cores: ["Jet Black", "Black", "Silver", "Gold", "Rose Gold", "(PRODUCT)RED"] },
            { name: "iPhone 7 Plus", capacidades: ["32 GB", "128 GB", "256 GB"], cores: ["Jet Black", "Black", "Silver", "Gold", "Rose Gold", "(PRODUCT)RED"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_8_x_series_template",
        name: "Modelo: iPhone 8 / 8 Plus / X",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 8", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["Silver", "Space Gray", "Gold", "(PRODUCT)RED"] },
            { name: "iPhone 8 Plus", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["Silver", "Space Gray", "Gold", "(PRODUCT)RED"] },
            { name: "iPhone X", capacidades: ["64 GB", "256 GB"], cores: ["Silver", "Space Gray"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_xr_xs_xs_max_series_template",
        name: "Modelo: iPhone XR / XS / XS Max",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone XR", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["White", "Black", "Blue", "Yellow", "Coral", "(PRODUCT)RED"] },
            { name: "iPhone XS", capacidades: ["64 GB", "256 GB", "512 GB"], cores: ["Silver", "Space Gray", "Gold"] },
            { name: "iPhone XS Max", capacidades: ["64 GB", "256 GB", "512 GB"], cores: ["Silver", "Space Gray", "Gold"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_11_series_template",
        name: "Modelo: iPhone 11 / 11 Pro / 11 Pro Max",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 11", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["Purple", "Yellow", "Green", "Black", "White", "(PRODUCT)RED"] },
            { name: "iPhone 11 Pro", capacidades: ["64 GB", "256 GB", "512 GB"], cores: ["Space Gray", "Silver", "Gold", "Midnight Green"] },
            { name: "iPhone 11 Pro Max", capacidades: ["64 GB", "256 GB", "512 GB"], cores: ["Space Gray", "Silver", "Gold", "Midnight Green"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_se_2gen_template",
        name: "Modelo: iPhone SE (2ª geração - 2020)",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone SE (2ª Geração)", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["Black", "White", "(PRODUCT)RED"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_12_series_template",
        name: "Modelo: iPhone 12 / 12 mini / 12 Pro / 12 Pro Max",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 12", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["White", "Black", "Blue", "Green", "Purple", "(PRODUCT)RED"] },
            { name: "iPhone 12 mini", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["White", "Black", "Blue", "Green", "Purple", "(PRODUCT)RED"] },
            { name: "iPhone 12 Pro", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Silver", "Graphite", "Gold", "Pacific Blue"] },
            { name: "iPhone 12 Pro Max", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Silver", "Graphite", "Gold", "Pacific Blue"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_13_series_template",
        name: "Modelo: iPhone 13 / 13 mini / 13 Pro / 13 Pro Max",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 13", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Starlight", "Midnight", "Blue", "Pink", "Green", "(PRODUCT)RED"] },
            { name: "iPhone 13 mini", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Starlight", "Midnight", "Blue", "Pink", "Green", "(PRODUCT)RED"] },
            { name: "iPhone 13 Pro", capacidades: ["128 GB", "256 GB", "512 GB", "1 TB"], cores: ["Silver", "Graphite", "Gold", "Sierra Blue", "Alpine Green"] },
            { name: "iPhone 13 Pro Max", capacidades: ["128 GB", "256 GB", "512 GB", "1 TB"], cores: ["Silver", "Graphite", "Gold", "Sierra Blue", "Alpine Green"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_se_3gen_template",
        name: "Modelo: iPhone SE (3ª geração - 2022)",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone SE (3ª Geração)", capacidades: ["64 GB", "128 GB", "256 GB"], cores: ["Midnight", "Starlight", "(PRODUCT)RED"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_14_series_template",
        name: "Modelo: iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 14", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"] },
            { name: "iPhone 14 Plus", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"] },
            { name: "iPhone 14 Pro", capacidades: ["128 GB", "256 GB", "512 GB", "1 TB"], cores: ["Space Black", "Silver", "Gold", "Deep Purple"] },
            { name: "iPhone 14 Pro Max", capacidades: ["128 GB", "256 GB", "512 GB", "1 TB"], cores: ["Space Black", "Silver", "Gold", "Deep Purple"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_15_series_template",
        name: "Modelo: iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 15", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Black", "Blue", "Green", "Yellow", "Pink"] },
            { name: "iPhone 15 Plus", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Black", "Blue", "Green", "Yellow", "Pink"] },
            { name: "iPhone 15 Pro", capacidades: ["128 GB", "256 GB", "512 GB", "1 TB"], cores: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"] },
            { name: "iPhone 15 Pro Max", capacidades: ["256 GB", "512 GB", "1 TB"], cores: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    },
    {
        id: "iphone_16_series_template",
        name: "Modelo: iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max (linha atual)",
        generalMessage: generalCarouselMessageTemplate,
        delay: 5,
        subModels: [
            { name: "iPhone 16", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Black", "White", "Blue", "Yellow", "Pink", "Green"] },
            { name: "iPhone 16 Plus", capacidades: ["128 GB", "256 GB", "512 GB"], cores: ["Black", "White", "Blue", "Yellow", "Pink", "Green"] },
            { name: "iPhone 16 Pro", capacidades: ["256 GB", "512 GB", "1 TB", "2 TB"], cores: ["Space Black Titanium", "Silver Titanium", "Rose Titanium", "Natural Titanium", "Midnight Titanium"] },
            { name: "iPhone 16 Pro Max", capacidades: ["256 GB", "512 GB", "1 TB", "2 TB"], cores: ["Space Black Titanium", "Silver Titanium", "Rose Titanium", "Natural Titanium", "Midnight Titanium"] }
        ],
        cards: [{ text: defaultCardTemplateText, image: "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg" }]
    }
];

let cardIndexCounter = 0; 

// --- Funções Auxiliares ---

function populateSelect(selectElement, optionsArray, isCountryDDI = false) {
    // Sempre limpa o select, mas mantém a opção padrão (se houver)
    while (selectElement.options.length > 1) { // Mantém a primeira opção (placeholder)
        selectElement.remove(1);
    }
    
    // Adiciona as novas opções
    if (isCountryDDI) {
        optionsArray.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.code;
            option.textContent = `${optionData.name} (+${optionData.code})`;
            selectElement.appendChild(option);
        });
    } else {
        optionsArray.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText;
            option.textContent = optionText;
            selectElement.appendChild(option);
        });
    }
}

// Preenche o select de sub-modelos de iPhone
function populateiPhoneModelSelect(selectElement, modelsArray) {
    selectElement.innerHTML = '<option value="">Selecione o Modelo</option>'; // Limpa e adiciona o placeholder
    modelsArray.forEach(modelData => {
        const option = document.createElement("option");
        option.value = modelData.name; // O valor da opção é o nome do modelo
        option.textContent = modelData.name;
        selectElement.appendChild(option);
    });
}

/**
 * Atualiza os dropdowns de capacidade e cor com base no modelo de iPhone selecionado
 * e então atualiza o texto do cartão.
 * @param {number} cardId - O ID do cartão atual.
 */
function updateCapacityAndColorSelects(cardId) {
    const mainModelSelect = document.getElementById("carouselTemplate");
    const selectedTemplateId = mainModelSelect.value;
    const selectedTemplate = carouselTemplates.find(t => t.id === selectedTemplateId);

    const subModelSelect = document.getElementById(`card-model-${cardId}`);
    const selectedSubModelName = subModelSelect.value;

    const capacitySelect = document.getElementById(`card-capacity-${cardId}`);
    const colorSelect = document.getElementById(`card-color-${cardId}`);

    // Limpa os selects de capacidade e cor antes de preencher
    populateSelect(capacitySelect, []); 
    populateSelect(colorSelect, []);

    if (selectedTemplate && selectedSubModelName) {
        // Encontra os dados do sub-modelo selecionado dentro do template
        const subModelData = selectedTemplate.subModels.find(sub => sub.name === selectedSubModelName);
        
        if (subModelData) {
            // Preenche capacidade e cor com base nos dados do sub-modelo
            populateSelect(capacitySelect, subModelData.capacidades);
            populateSelect(colorSelect, subModelData.cores);

            // Tenta pré-selecionar a primeira opção disponível para capacidade e cor
            // Se já houver um valor selecionado, mantém, senão seleciona o primeiro.
            if (capacitySelect.options.length > 1 && !capacitySelect.value) {
                capacitySelect.value = capacitySelect.options[1].value;
            }
            if (colorSelect.options.length > 1 && !colorSelect.value) {
                colorSelect.value = colorSelect.options[1].value;
            }
        }
    }
    // Chame updateCardText aqui para garantir que o texto seja atualizado após preencher os selects
    updateCardText(cardId);
}


function updateCardText(cardId) {
    const modelSelect = document.getElementById(`card-model-${cardId}`);
    const capacidadeSelect = document.getElementById(`card-capacity-${cardId}`);
    const colorSelect = document.getElementById(`card-color-${cardId}`);
    const textarea = document.getElementById(`card-text-${cardId}`);
    
    // O ponto de partida é SEMPRE o texto original do template armazenado no data-template-text
    // Isso garante que o placeholder original esteja disponível
    let baseText = textarea.getAttribute('data-template-text') || defaultCardTemplateText;

    const model = modelSelect ? modelSelect.value.trim() : '';
    const capacidade = capacidadeSelect ? capacidadeSelect.value.trim() : '';
    const cor = colorSelect ? colorSelect.value.trim() : '';

    let fullModelStringParts = [];
    if (model) {
        fullModelStringParts.push(model);
    }
    // GARANTIA: Inclui a capacidade se ela estiver selecionada
    if (capacidade) {
        fullModelStringParts.push(capacidade);
    }
    // GARANTIA: Inclui a cor se ela estiver selecionada
    if (cor) {
        fullModelStringParts.push(cor);
    }
    
    let fullModelContent = fullModelStringParts.join(' ').trim();
    
    // O texto que será usado para substituir o placeholder. Se vazio, o placeholder será removido.
    const replacementModelText = fullModelContent ? `*${fullModelContent}*` : '';

    // A REGEX para encontrar o placeholder *[MODELO_COMPLETO]* (com ou sem asteriscos).
    // Ela busca a parte "do seu <placeholder>", para garantir a substituição correta.
    const placeholderRegex = /(do seu\s*)(\*?\[MODELO_COMPLETO\]\*?)/;

    // Realiza a substituição no texto base.
    let newText = baseText.replace(placeholderRegex, (match, prefix, placeholderFound) => {
        // Se houver texto para o modelo, insere ele. Se não houver, insere uma string vazia.
        return `${prefix}${replacementModelText}`;
    });

    // Normaliza múltiplos espaços para um único espaço no texto final.
    newText = newText.replace(/ {2,}/g, ' '); 

    textarea.value = newText.trim(); 
}


// --- Funções para Gerenciar Modelos de Carrossel ---

function populateCarouselTemplatesDropdown() {
    const selectTemplate = document.getElementById("carouselTemplate");
    selectTemplate.innerHTML = '<option value="">-- Selecione a Série do iPhone --</option>'; // Texto do placeholder
    carouselTemplates.forEach(template => {
        const option = document.createElement("option");
        option.value = template.id;
        option.textContent = template.name;
        selectTemplate.appendChild(option);
    });
}

function loadCarouselTemplate() {
    const selectTemplate = document.getElementById("carouselTemplate");
    const selectedTemplateId = selectTemplate.value;
    const selectedTemplate = carouselTemplates.find(t => t.id === selectedTemplateId);

    // Limpa os campos antes de carregar o novo template
    document.getElementById("mensagemGeral").value = "";
    document.getElementById("delayMessage").value = "";
    document.getElementById("carousel-cards-container").innerHTML = "";
    cardIndexCounter = 0;

    if (!selectedTemplate) {
        // Se nenhum template for selecionado, adiciona um cartão vazio e a mensagem geral padrão.
        document.getElementById("mensagemGeral").value = generalCarouselMessageTemplate;
        document.getElementById("mensagemGeral").setAttribute('readonly', 'true'); 
        addCarouselCard();
        return;
    }

    // Define a mensagem geral do template
    document.getElementById("mensagemGeral").value = selectedTemplate.generalMessage;
    document.getElementById("mensagemGeral").setAttribute('readonly', 'true'); 

    document.getElementById("delayMessage").value = selectedTemplate.delay;

    // Ao carregar um template, adiciona os cartões padrão do template.
    // O addCarouselCard agora lida com o preenchimento inicial dos selects.
    selectedTemplate.cards.forEach(cardData => {
        addCarouselCard({ 
            ...cardData, 
            subModelsList: selectedTemplate.subModels // Passa a lista completa de subModelos para o cartão
        });
    });
}

function addCarouselCard(cardData = null) {
    cardIndexCounter++;
    const currentCardId = cardIndexCounter;
    const container = document.getElementById('carousel-cards-container');
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-editor bg-gray-900 p-5 rounded-lg shadow-md border border-lime-700 mb-6';
    cardDiv.setAttribute('data-card-id', currentCardId);

    cardDiv.innerHTML = `
        <h3 class="text-lg font-semibold text-lime-300 mb-4">Cartão #${currentCardId}</h3>
        <div class="space-y-3">
            <div>
                <label for="card-model-${currentCardId}" class="block text-sm font-medium text-lime-400 mb-1">Modelo de iPhone:</label>
                <select id="card-model-${currentCardId}" 
                       class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm">
                    <option value="">Selecione o Modelo</option>
                </select>
            </div>

            <div class="flex space-x-4">
                <div class="flex-1">
                    <label for="card-capacity-${currentCardId}" class="block text-sm font-medium text-lime-400 mb-1">Capacidade (GB):</label>
                    <select id="card-capacity-${currentCardId}" 
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm">
                        <option value="">Selecione</option>
                    </select>
                </div>
                <div class="flex-1">
                    <label for="card-color-${currentCardId}" class="block text-sm font-medium text-lime-400 mb-1">Cor:</label>
                    <select id="card-color-${currentCardId}" 
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm">
                        <option value="">Selecione</option>
                    </select>
                </div>
            </div>

            <div>
                <label for="card-text-${currentCardId}" class="block text-sm font-medium text-lime-400 mb-1">Texto do Cartão (Editável):</label>
                <textarea id="card-text-${currentCardId}" rows="10" placeholder="O texto final do seu cartão será gerado aqui. Você pode ajustar."
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm"></textarea>
            </div>

            <div>
                <label for="card-image-${currentCardId}" class="block text-sm font-medium text-lime-400 mb-1">URL da Imagem do Cartão:</label>
                <input type="url" id="card-image-${currentCardId}" placeholder="https://exemplo.com/imagem.jpg"
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm" />
            </div>
        </div>
        
        <h4 class="text-md font-semibold text-lime-300 mt-6 mb-3">Botões do Cartão #${currentCardId}</h4>
        <div id="card-buttons-container-${currentCardId}" class="space-y-3">
            </div>
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
            <button type="button" class="add-button-btn flex-grow py-2 bg-lime-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-75 transition duration-150 ease-in-out neon-glow-button"
                                 onclick="addCardButton(${currentCardId})">
                + Adicionar Botão
            </button>
            <button type="button" class="remove-card-btn flex-grow py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-150 ease-in-out neon-glow-button"
                                 onclick="removeCarouselCard(${currentCardId})">
                - Remover Cartão
            </button>
        </div>
    `;
    container.appendChild(cardDiv);

    const iPhoneModelSelect = document.getElementById(`card-model-${currentCardId}`);
    // Popula o select de modelo com os sub-modelos da SÉRIE
    if (cardData && cardData.subModelsList && cardData.subModelsList.length > 0) {
        populateiPhoneModelSelect(iPhoneModelSelect, cardData.subModelsList);
        // Tenta pré-selecionar o valor do modelo se estiver nos dados do cartão (útil ao carregar templates)
        if (cardData.cardModelValue) {
            iPhoneModelSelect.value = cardData.cardModelValue;
        }
    }

    const cardTextarea = document.getElementById(`card-text-${currentCardId}`);
    cardTextarea.value = (cardData && cardData.text) ? cardData.text : defaultCardTemplateText;
    cardTextarea.setAttribute('data-template-text', (cardData && cardData.text) ? cardData.text : defaultCardTemplateText);

    const cardImageInput = document.getElementById(`card-image-${currentCardId}`);
    if (cardImageInput) {
        cardImageInput.value = (cardData && cardData.image) ? cardData.image : "https://i.pcmag.com/imagery/articles/01a05tCWORxCw1D6nH0ChDZ-68.fit_lim.v1705428880.jpg";
    } else {
        console.error(`Erro: Input com ID card-image-${currentCardId} não encontrado após append!`);
    }

    if (cardData && cardData.buttons && cardData.buttons.length > 0) {
        cardData.buttons.forEach(button => {
            addCardButton(currentCardId, button);
        });
    } else {
        addCardButton(currentCardId, { type: "URL", label: "Obter localização", url: "" });
        addCardButton(currentCardId, { type: "REPLY", label: "Falar com Atendente", url: "" });
    }

    // AGORA OS EVENT LISTENERS SÃO ADICIONADOS APÓS O ELEMENTO SER INSERIDO NO DOM
    // E DELEGAM A ATUALIZAÇÃO DOS DROPDOWNS SECUNDÁRIOS E DO TEXTO.
    document.getElementById(`card-model-${currentCardId}`).addEventListener('change', () => updateCapacityAndColorSelects(currentCardId));
    document.getElementById(`card-capacity-${currentCardId}`).addEventListener('change', () => updateCardText(currentCardId)); // Capacidade só atualiza o texto
    document.getElementById(`card-color-${currentCardId}`).addEventListener('change', () => updateCardText(currentCardId));     // Cor só atualiza o texto
    
    // Chamada inicial para garantir que todos os selects secundários e o texto estejam corretos
    // mesmo que o modelo padrão já venha selecionado no template.
    updateCapacityAndColorSelects(currentCardId);

    return currentCardId;
}


function addCardButton(cardId, buttonData = null) {
    const buttonsContainer = document.getElementById(`card-buttons-container-${cardId}`);
    if (!buttonsContainer) {
        console.error(`Contêiner de botões para o cartão ${cardId} not found.`);
        return;
    }
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'button-editor bg-gray-700 p-4 rounded-lg border border-gray-600 shadow-sm mb-3';
    const buttonIndex = buttonsContainer.children.length;
    
    const buttonUniqueId = `btn_${cardId}_${buttonIndex}`;

    buttonDiv.innerHTML = `
        <div class="space-y-2">
            <div>
                <label for="button-type-${cardId}-${buttonIndex}" class="block text-sm font-medium text-lime-400 mb-1">Tipo de Botão:</label>
                <select id="button-type-${cardId}-${buttonIndex}" onchange="toggleButtonFields(${cardId}, ${buttonIndex})"
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm">
                    <option value="URL">URL</option>
                    <option value="REPLY">Resposta Rápida (Quick Reply)</option>
                    <option value="CALL">Ligar</option>
                </select>
            </div>

            <div>
                <label for="button-label-${cardId}-${buttonIndex}" class="block text-sm font-medium text-lime-400 mb-1">Texto do Botão:</label>
                <input type="text" id="button-label-${cardId}-${buttonIndex}" placeholder="Ex: Saiba Mais"
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm" />
            </div>
            
            <div id="button-url-field-${cardId}-${buttonIndex}" class="button-field">
                <label for="button-url-${cardId}-${buttonIndex}" class="block text-sm font-medium text-lime-400 mb-1">URL:</label>
                <input type="url" id="button-url-${cardId}-${buttonIndex}" placeholder="https://exemplo.com/link"
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm" />
            </div>
            <div id="button-phone-field-${cardId}-${buttonIndex}" class="button-field hidden">
                <label for="button-phone-${cardId}-${buttonIndex}" class="block text-sm font-medium text-lime-400 mb-1">Número de Telefone (com DDI, sem +):</label>
                <input type="text" id="button-phone-${cardId}-${buttonIndex}" placeholder="Ex: 5511999999999"
                                 class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-lime-400 focus:border-lime-400 transition duration-150 ease-in-out shadow-sm" />
            </div>
            <input type="hidden" id="button-id-${cardId}-${buttonIndex}" value="${buttonUniqueId}" />
        </div>
        <button type="button" class="remove-button-btn mt-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-150 ease-in-out">
            - Remover Botão
        </button>
    `;
    buttonsContainer.appendChild(buttonDiv);
    
    buttonDiv.querySelector('.remove-button-btn').onclick = () => removeCardButton(buttonDiv);

    if (buttonData) {
        document.getElementById(`button-type-${cardId}-${buttonIndex}`).value = buttonData.type || 'URL';
        document.getElementById(`button-label-${cardId}-${buttonIndex}`).value = buttonData.label || '';
        if (buttonData.type === 'URL') {
            document.getElementById(`button-url-${cardId}-${buttonIndex}`).value = buttonData.url || '';
        } else if (buttonData.type === 'CALL') {
            document.getElementById(`button-phone-${cardId}-${buttonIndex}`).value = buttonData.phone || '';
        }
    }
    toggleButtonFields(cardId, buttonIndex);
}

function toggleButtonFields(cardId, buttonIndex) {
    const buttonTypeSelect = document.getElementById(`button-type-${cardId}-${buttonIndex}`);
    if (!buttonTypeSelect) return;
    const buttonLabelInput = document.getElementById(`button-label-${cardId}-${buttonIndex}`);
    const buttonUrlField = document.getElementById(`button-url-field-${cardId}-${buttonIndex}`);
    const buttonPhoneField = document.getElementById(`button-phone-field-${cardId}-${buttonIndex}`);

    const buttonType = buttonTypeSelect.value;

    if (buttonUrlField) buttonUrlField.classList.add('hidden');
    if (buttonPhoneField) buttonPhoneField.classList.add('hidden');

    if (buttonType === 'URL') {
        if (buttonUrlField) buttonUrlField.classList.remove('hidden');
        if (buttonLabelInput && buttonLabelInput.value === "") {
            buttonLabelInput.value = "Obter localização";
        }
    } else if (buttonType === 'CALL') {
        if (buttonPhoneField) buttonPhoneField.classList.remove('hidden');
        if (buttonLabelInput && buttonLabelInput.value === "") {
            buttonLabelInput.value = "Ligar";
        }
    } else if (buttonType === 'REPLY') {
        if (buttonLabelInput && buttonLabelInput.value === "") {
            buttonLabelInput.value = "Falar com Atendente";
        }
    }
}

function removeCarouselCard(cardId) {
    const cardDiv = document.querySelector(`.card-editor[data-card-id="${cardId}"]`);
    if (cardDiv) {
        cardDiv.remove();
    }
}

function removeCardButton(buttonElementDiv) {
    buttonElementDiv.remove();
}

async function enviarCarrossel() {
    const log = document.getElementById('log');
    
    const selectedDDI = document.getElementById('countryDDI').value;
    const rawNumero = document.getElementById('numero').value.trim();
    const numeroCompleto = selectedDDI + rawNumero; 

    const mensagemGeral = document.getElementById('mensagemGeral').value.trim();
    const delayMessage = document.getElementById('delayMessage').value.trim();

    if (!rawNumero || !selectedDDI || !mensagemGeral) {
        log.innerText = '❌ Por favor, preencha o DDI do país, o número do cliente e a mensagem geral.';
        return;
    }

    const carouselCards = [];
    const cardEditors = document.querySelectorAll('.card-editor');

    if (cardEditors.length === 0) {
        log.innerText = '❌ Por favor, adicione pelo menos um cartão ao carrossel.';
        return;
    }

    for (const cardEditor of cardEditors) {
        const cardId = cardEditor.getAttribute('data-card-id');
        
        const cardText = document.getElementById(`card-text-${cardId}`).value;
        const cardImage = document.getElementById(`card-image-${cardId}`).value.trim();

        if (!cardText || !cardImage) {
            log.innerText = `❌ O cartão #${cardId} requer texto e URL da imagem.`;
            return;
        }

        const cardButtons = [];
        const buttonEditors = cardEditor.querySelectorAll(`.button-editor`);
        
        for (let i = 0; i < buttonEditors.length; i++) {
            const buttonType = document.getElementById(`button-type-${cardId}-${i}`).value;
            const buttonLabel = document.getElementById(`button-label-${cardId}-${i}`).value.trim();
            const buttonId = document.getElementById(`button-id-${cardId}-${i}`).value.trim();
            const buttonUrl = document.getElementById(`button-url-${cardId}-${i}`)?.value.trim();
            const buttonPhone = document.getElementById(`button-phone-${cardId}-${i}`)?.value.trim();

            if (!buttonLabel) {
                log.innerText = `❌ O botão #${i+1} do cartão #${cardId} requer um texto (label).`;
                return;
            }

            const button = {
                type: buttonType,
                label: buttonLabel,
                id: buttonId
            };

            if (buttonType === 'URL') {
                if (!buttonUrl) {
                    log.innerText = `❌ O botão URL #${i+1} do cartão #${cardId} requer uma URL.`;
                    return;
                }
                button.url = buttonUrl;
            } else if (buttonType === 'CALL') {
                if (!buttonPhone) {
                    log.innerText = `❌ O botão de Chamada #${i+1} do cartão #${cardId} requer um número de telefone.`;
                    return;
                }
                button.phone = buttonPhone;
            }

            cardButtons.push(button);
        }

        carouselCards.push({
            text: cardText, 
            image: cardImage,
            buttons: cardButtons
        });
    }

    const payload = {
        phone: numeroCompleto,
        message: mensagemGeral,
        carousel: carouselCards,
    };

    if (delayMessage) {
        payload.delayMessage = parseInt(delayMessage);
    }

    try {
        log.innerText = 'Enviando carrossel...';
        const response = await fetch(proxyCarouselUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {
            log.innerText = '✅ Carrossel enviado com sucesso:\n' + JSON.stringify(data, null, 2);
        } else {
            log.innerText = '❌ Erro ao enviar carrossel:\n' + JSON.stringify(data, null, 2);
            console.error('Erro na resposta do proxy:', data);
        }
    } catch (error) {
        log.innerText = '❌ Erro de conexão com o proxy:\n' + error.message;
        console.error('Erro de rede ou proxy:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateCarouselTemplatesDropdown();
    
    const mensagemGeralInput = document.getElementById("mensagemGeral");
    if (mensagemGeralInput) {
        mensagemGeralInput.value = generalCarouselMessageTemplate;
        mensagemGeralInput.setAttribute('readonly', 'true'); 
    }

    // Inicializa com um cartão vazio (ou padrão)
    addCarouselCard(); 
    
    const countryDDISelect = document.getElementById("countryDDI");
    populateSelect(countryDDISelect, countriesDDI, true);
    
    countryDDISelect.value = "55"; // Define DDI do Brasil como padrão
});
