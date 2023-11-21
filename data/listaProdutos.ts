import Produto from "../model/produto";

let image = "https://upload.wikimedia.org/wikipedia/commons/5/52/WLA_icon_image_gallery.svg"
export default [
    new Produto(1, "Smartphone Samsung Galaxy S23 5G", image, 899.99,
        "Um smartphone avançado com tecnologia 5G, oferecendo uma experiência única para os usuários.",
        "Tela Infinita de 6.1 polegadas, Processador Qualcomm Snapdragon 8 Gen 2 for Galaxy, Câmera Tripla Traseira de 50MP +12MP + 10MP, Selfie de 12MP, 512GB de memória interna, Dual Chip, eSIM, 4 gerações de atualizações Android, 5 anos de atualizações de segurança, Cadeado Galaxy para proteção."
    ),

    new Produto(2, "Fone de Ouvido Wireless Premium", image, 69.99,
        "Desfrute de áudio de alta qualidade com este fone de ouvido sem fio, projetado para proporcionar conforto e conveniência.",
        "Conectividade Bluetooth 5.0, autonomia de bateria de até 20 horas, controles de toque intuitivos e design compacto para fácil transporte."
    ),

    new Produto(3, "Notebook Ultrabook Pro X", image, 1299.99,
        "Um ultrabook potente para profissionais que buscam desempenho e portabilidade.",
        "Processador Intel Core i7, Tela Full HD de 14 polegadas, 16GB de RAM, SSD de 512GB, placa gráfica dedicada, design elegante e leve."
    ),

    new Produto(4, "Câmera Mirrorless 4K ProCapture", image, 1499.99,
        "Capture momentos incríveis com esta câmera mirrorless de última geração, ideal para fotógrafos e cinegrafistas.",
        "Gravação em 4K a 60fps, sensor CMOS de alta resolução, sistema de foco automático avançado, visor eletrônico de alta definição."
    ),

    new Produto(5, "Smart TV QLED 65 polegadas", image, 2199.99,
        "Transforme sua experiência de entretenimento com esta Smart TV QLED de 65 polegadas, oferecendo imagens vibrantes e recursos inteligentes.",
        "Resolução 4K, tecnologia de pontos quânticos, sistema operacional SmartHub, integração com assistentes de voz, e design ultrafino."
    )
];