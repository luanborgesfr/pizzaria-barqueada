export const siteConfig = {
    name: 'Barqueada Pizzaria',
    slogan: 'O sabor do Pará em cada fatia',
    description: 'Pizzas artesanais com identidade paraense. Funcionamento: quarta a segunda, 17h às 23h. Peça pelo WhatsApp.',

    contacts: {
        whatsapp: {
            number: '5591993888280',
            formatted: '(91) 99388-8280',
            url: 'https://wa.me/5591993888280',
            message: 'Olá! Gostaria de fazer um pedido na Barqueada Pizzaria.',
        },
        instagram: {
            username: 'barqueadapizzaria',
            url: 'https://www.instagram.com/barqueadapizzaria/',
        },
        cardapio: {
            url: 'https://app.cardapioweb.com/barqueada_pizzaria',
        },
    },

    hours: {
        days: 'Quarta a segunda-feira',
        time: '17h às 23h',
        closed: 'Terça-feira',
        schedule: [
            {day: 'Quarta', open: '17:00', close: '23:00'},
            {day: 'Quinta', open: '17:00', close: '23:00' },
            {day: 'Sexta', open: '17:00', close: '23:00' },
            {day: 'Sábado', open: '17:00', close: '23:00' },
            {day: 'Domingo', open: '17:00', close: '23:00' },
            {day: 'Segunda', open: '17:00', close: '23:00' },
            {day: 'Terça', closed: true },
        ],
    },

    seo: {
        title: 'Barqueada Pizzaria - O sabor do Pará em cada fatia',
        description: 'Pizzas artesanais com identidade paraense. Funcionamento: quarta a segunda, 17h às 23h. Peça pelo WhatsApp.',
        ogImage: 'images/general/img-logoBarqueada.png',
        url: 'https://barqueadapizzaria.com.br',
        twitterHandle: '@barqueadapizzaria'
    },

    navigation: [
        {id: 'home', label: 'Início', href: '#home'},
        {id: 'about', label: 'Sobre', href: '#about'},
        {id: 'menu', label: 'Cardápio', href: '#menu'},
        {id: 'gallery', label: 'Galeria', href: '#gallery'},
        {id: 'contact', label: 'Contato', href: '#contact'},
    ],

    differentiators: [
        {
            id: 'Ingredients',
            title: 'Ingredientes Selecionados',
            description: 'Matérias-primas de qualidade, escolhidas com cuidado para cada receita.',
            icon: 'ingredientes',
        },
        {
            id: 'artisan',
            title: 'Produção Artesanal',
            description: 'Cada pizza é preparada individualmente, respeitando o tempo de fermentação e o forno a lenha.',
            icon: 'artisan',
        },
        {
            id: 'paraense',
            title: 'Identidade Paraense',
            description: 'Ambiente acolhedor, atendimento atencioso e o melhor da gastronomia regional.',
            icon: 'experience',
        },
    ],
}