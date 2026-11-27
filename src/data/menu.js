//cardapio barqueada pizzaria

//pizzas salgadas e doces (8 fatias)
export const pizzas35cm = {
    title: 'Pizzas Salgadas e Doces',
    description: 'Tamanho 35cm - oito fatias (Salgadas e Doces)',
    details: 'Escolha até dois sabores por pizza. O valor final será baseado na opção de maior valor. É obrigatório escolher pelo menos 1 sabor.',
    basePrice: 45.00,
    flavors: [
        {
            id: 'mussarela',
            name: 'Muçarela',
            description: 'A clássica base da Barqueada',
            price: 0,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'marguerita',
            name: 'Marguerita',
            description: 'Base + Tomate Cereja e Manjericão',
            price: 5.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'quatro-queijos',
            name: 'Quatro Queijos',
            description: 'Base + Parmesão, Provolone, Catupiry e Gorgonzola',
            price: 28.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'calabresa',
            name: 'Calabresa',
            description: 'Base + Calabresa',
            price: 9.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'calabresa-catupiry',
            name: 'Calabresa c/ Catupiry',
            description: 'Base + Calabresa e Catupiry',
            price: 14.00,
            category: 'salgada',
            popular: true,
            badge: 'MAIS PEDIDO',
        },
        {
            id: 'portuguesa',
            name: 'Portguesa',
            description: 'Base + Presunto, Ovo, Pimentão Verde e Milho',
            price: 17.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'bacon-catupiry',
            name: 'Base + Bacon com Catupiry',
            price: 14.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'tres-porquinhos',
            name: 'Três Porquinhos',
            description: 'Base + Presunto, Bacon e Calabresa',
            price: 18.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'lombo-canadense',
            name: 'Lombo canadense',
            description: 'Base + Lombinho Suíno e Abacaxi',
            price: 13.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'frango-catupiry',
            name: 'Frango com Catupiry',
            description: 'Base + Frango, Catupiry e Milho',
            price: 14.00,
            category: 'salgada',
            popular: true,
            badge: 'MAIS PEDIDO',
        },
        {
            id: 'carne-seca-banana',
            name: 'Carne Seca com Banana',
            description: 'Base + Carne Seca e Banana',
            price: 17.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'camarao-tucupi-jambu',
            name: 'Camarão com Tucupi e Jambu',
            description: 'Molho Artesanal de tomate, Muçarela, Camarão Rosa, Tucupi Reduzido e Jambu',
            price: 27.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'camarao-pesto-jambu',
            name: 'Camarão com Pesto de Jambu e Tomates confitados',
            description: 'Molho Artesanal de Tomate, Muçarela, Camarão Rosa, Pesto de Jambu, Cream Cheese e Tomate Cereja',
            price: 38.00,
            category: 'salgada',
            popular: false,
        },
        {
            id: 'file-pesto-jambu',
            name: 'Filé com Pesto de Jambu e Tomates confitados',
            description: 'Molho Artesanal de Tomate, Muçarela, Filé, Pesto de Jambu, Cream Cheese e Tomate Cereja',
            price: 29.00,
            category: 'salgada',
            popular: true,
            badge: 'MAIS PEDIDO',
        },
        {
            id: 'pepperoni-cream-cheese-alho',
            name: 'Pepperoni c/ Cream Cheese e Alho Frito',
            description: 'Molho Artesanal de Tomate, Muçarela, Pepperoni, Cream Cheese e Alho Frito',
            price: 22.00,
            category: 'salgada',
            popular: false,
        },

        //pizzas doces

        {
            id: 'cupuacu-queijo-cuia',
            name: 'Cupuaçu com Queijo Cuia',
            description: 'Creme de Leite, Muçarela, Doce de Cupuaçu e Queijo Cuia Maçaricado',
            price: 34.00,
            category: 'doce',
            popular: false,
        },
        {
            id: 'ganache-chocolate-mnm',
            name: 'Ganache de Chocolate e M&M',
            description: 'Creme de Leite, Ganache de Chocolate e M&M',
            price: 39.00,
            category: 'doce',
            popular: false,
        },
        {
            id: 'nutella-morango',
            name: 'Nuella com Morango',
            description: 'Creme de Leite, Nutella e Morango',
            price: 42.00,
            category: 'doce',
            popular: false
        },
        {
            id: 'banoffe',
            name: 'Banoffe',
            description: 'Creme de Leite, Banana, Doce de Leite e Canela',
            price: 4.00,
            originalPrice: 55.00,
            discount: 11,
            category: 'doce',
            popular: false,
        },
        {
            id: 'ovomaltine',
            name: 'Ovomaltine',
            description: '',
            price: 14.00,
            category: 'doce',
            popular: false,
        },
    ],
}

//pizzad doces pequenas (4 fatias)

export const pizzas20cm = {
    title: 'Pizzas Doces Pequenas',
    description: 'Tamanho 20cm - 4 fatias (somente doces)',
    details: 'Escolha um sabor por pizza',
    basePrice: 30.00,
    flavors: [
        {
            id: 'cupuacu-queijo-cuia-pequena',
            name: 'Cupuaçu com Queijo Cuia',
            description: 'Creme de Leite, Muçarela, Doce de Cupuaçu e Queijo Cuia Maçaricado',
            price: 10.00,
            category: 'doce',
            popular: false,
        },
        {
            id: 'ganache-chocolate-mnm-pequena',
            name: 'Ganache de Chocolate e M&M',
            description: 'Creme de Leite, Ganache de Chocolate e M&M',
            price: 14.00,
            category: 'doce',
            popular: false,
        },
        {
            id: 'nutella-morango-pequena',
            name: 'Nutella com Morago',
            description: 'Creme de Leite, Nutella e Morango',
            price: 15.00,
            category: 'doce',
            popular: false,
        },
        {
            id: 'banoffee-pequena',
            name: 'Banoffe',
            description: 'Creme de Leite, Banana, Doce de Leite e Canela',
            price: 0,
            category: 'doce',
            popular: false,
        },
        {
            id: 'ovomaltine-pequena',
            name: 'Ovomaltine',
            description: '',
            price: 3.00,
            category: 'doce',
            popular: false,
        },
    ],
}

//adicionais

export const adicionais = {
    salgados: {
        title: 'Adicionar salgados',
        description: 'Escolha até 1 opção',
        maxSelection: 1,
        options: [
            {id: 'oregano', name: 'Orégano', price: 0},
            { id: 'cebola', name: 'Cebola', price: 0 },
            { id: 'alho-frito', name: 'Alho Frito', price: 3.00 },
            { id: 'milho', name: 'Milho', price: 2.00 },
            { id: 'catupiry', name: 'Catupiry', price: 10.00 },
            { id: 'cream-cheese', name: 'Cream Cheese', price: 12.00 },
        ],
    },
    bordaRecheada: {
        title: 'Borda Recheada',
        description: 'Escolha até 1 opção',
        maxSelection: 1,
        options: [
            { id: 'borda-catupiry', name: 'Borda Recheada - Catupiry', price: 15.00 },
            { id: 'borda-ovomaltine', name: 'Borda Recheada - Ovomaltine', price: 15.00 },
            { id: 'borda-doce-leite', name: 'Borda Recheada - Doce de Leite', price: 15.00 },
            { id: 'borda-nutella', name: 'Borda Recheada - Nutella', price: 18.00 },
        ],
    },
    sache: {
        title: 'Sachê',
        description: 'Escolha até 1 opção',
        maxSelection: 1,
        required: true,
        options: [
            { id: 'sache-sim', name: 'Sim, vou querer o sachê de ketchup e maionese!', price: 0 },
            { id: 'sache-nao', name: 'Não, não vou querer sachês!', price: 0 },
        ],
    },
}

//stick - grissini

export const sticks = [
    {
        id: 'stick-grissini',
        name: 'Stick (Grissini)',
        description: 'Coberto com Leite e Canela, acompanha Ovomaltine e Cream Cheese',
        price: 27.00,
        category: 'entrada',
        popular: false,
    },
]

//img de referências das pizzas

export const pizzaImages = {
  'pizza-35cm': '/images/pizzas/imgPizzaDoceSalgado35cm.jpeg',
  'pizza-20cm': '/images/pizzas/imgPizzaDoce20cm.jpeg',
  'mussarela': '/images/pizzas/imgMussarela.jpeg',
  'marguerita': '/images/pizzas/imgMarguerita.jpeg',
  'quatro-queijos': '/images/pizzas/imgQuatroQueijos.jpeg',
  'calabresa': '/images/pizzas/imgCalabresa.jpeg',
  'calabresa-catupiry': '/images/pizzas/imgCalabresa-c-Catupiry.jpg',
  'portuguesa': '/images/pizzas/imgPortuguesa.jpeg',
  'bacon-catupiry': '/images/pizzas/imgBacon-c-Catupiry.jpeg',
  'tres-porquinhos': '/images/pizzas/imgTresPorquinhos.jpeg',
  'lombo-canadense': '/images/pizzas/imgLomboCanadense.jpeg',
  'frango-catupiry': '/images/pizzas/imgFrango-c-atupiry.jpeg',
  'carne-seca-banana': '/images/pizzas/imgCarneSeca-c-Banana.jpeg',
  'camarao-tucupi-jambu': '/images/pizzas/imgCamarãoc-TucupiJambu.jpeg',
  'camarao-pesto-jambu': '/images/pizzas/imgCamarão-c-PestoJambu.jpeg',
  'file-pesto-jambu': '/images/pizzas/imgFilé-c-PestoJambu.jpeg',
  'pepperoni-cream-cheese': '/images/pizzas/imgPepperoni-c-CreamCheese.jpeg',
  'pepperoni-cream-cheese-alho': '/images/pizzas/imgPepperoni-c-CreamCheeseAlhoFrito.jpeg',
  'cupuacu-queijo-cuia': '/images/pizzas/imgCupuaçu-c-QueijoCuia.jpeg',
  'ganache-chocolate-mnm': '/images/pizzas/imgGanacheChocolateMM.jpeg',
  'nutella-morango': '/images/pizzas/imgNutella-c-Morango.jpeg',
  'banoffee': '/images/pizzas/imgBanoffee.jpeg',
  'ovomaltine': '/images/pizzas/imgOvomaltine.jpg',
  'cupuacu-queijo-cuia-pequena': '/images/pizzas/imgPizzaDoce20cm.jpeg',
  'ganache-chocolate-mnm-pequena': '/images/pizzas/imgPizzaDoce20cm.jpeg',
  'nutella-morango-pequena': '/images/pizzas/imgPizzaDoce20cm.jpeg',
  'banoffee-pequena': '/images/pizzas/imgPizzaDoce20cm.jpeg',
  'ovomaltine-pequena': '/images/pizzas/imgPizzaDoce20cm.jpeg',
}

//calzones

export const calzones = [
    {
        id: 'calzone-calabresa',
        name: 'Calzone Calabresa - 1un',
        description: '',
        price: 23.00,
        category: 'calzone',
        popular: false,
        image: '/images/produtos/imgCalzone.jpeg',
    },
    {
        id: 'calzone-marguerita',
        name: 'Calzone Marguerita - 1un',
        description: '',
        price: 23.00,
        popular: false,
        image: '/images/produtos/imgCalzone.jpeg',
    },
    {
        id: 'calzone-file',
        name: 'Calzone Filé - 1un',
        description: '',
        price: 28.00,
        category: 'calzone',
        popular: false,
        image: '/images/produtos/imgCalzone.jpeg',
    },
]