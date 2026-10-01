---
title: "Mini-Tinbot"
title_en: "Mini-Tinbot Desktop Robot"
description: "Robô de mesa desenvolvido como Trabalho de Conclusão de Curso em Engenharia Mecatrônica: uma versão em miniatura do Tinbot, com rosto animado em display TFT, 4 servomotores, falas e músicas, controle pelo navegador e atualização OTA, tudo rodando em um ESP32-C3."
description_en: "Desktop robot developed as an undergraduate capstone project in Mechatronics Engineering: a miniature version of Tinbot with an animated face on a TFT display, 4 servos, speech and music, browser control and OTA updates, all running on an ESP32-C3."
excerpt: "Miniatura do Tinbot com cerca de 15 cm, ESP32-C3, rosto animado, danças sincronizadas, personalidade própria e controle via Wi-Fi."
excerpt_en: "A roughly 15 cm Tinbot miniature with an ESP32-C3, animated face, synchronized dances, its own personality and Wi-Fi control."
date: 2024-12-01
cover: "./cover.webp"
search: "mini tinbot robô robot esp32 c3 lolin super mini devkit tcc engenharia mecatrônica servo st7789 tft dfplayer mp3 sensor touch companion desk robot wifi ota wifimanager ntp blender fusion 360 impressão 3d platformio protótipo prototype pcb ws2812 led rgb estojo case"
gallery:
  - "./5.webp"
  - "./75.webp"
  - "./6.webp"
  - "./7.webp"
  - "./74.webp"
  - "./0.webp"
  - "./8.webp"
  - "./4.webp"
  - "./3.webp"
  - "./1.webp"
  - "./2.webp"
  - "./77.webp"
videos:
  - type: "local"
    src: "/videos/mini-tinbot/danca-tinbot-azul.mp4"
    poster: "/videos/mini-tinbot/danca-tinbot-azul.webp"
    title: "Uma das danças, na versão com o painel azul do Tinbot original"
    title_en: "One of the dances, on the version with the original Tinbot's blue panel"
  - type: "local"
    src: "/videos/mini-tinbot/controle-web.mp4"
    poster: "/videos/mini-tinbot/controle-web.webp"
    title: "Controle pelo navegador: movendo os servos e reproduzindo poses gravadas"
    title_en: "Browser control: moving the servos and playing back recorded poses"
phases:
  - title: "Primeiros protótipos: mecânica e rosto (jun–ago 2024)"
    title_en: "First prototypes: mechanics and face (Jun–Aug 2024)"
    text: "Tudo começou com um punhado de micro servos e a cabeça modelada no Fusion 360, já com o servo que gira o rosto embutido no pescoço. As primeiras peças saíram da impressora em branco, o display ganhou uma moldura preta e os testes iniciais rodaram em um ESP32 DevKit na bancada: primeiro um \"Hello, World!\", depois os olhos. Ao lado do Tinbot de verdade dava para conferir se as proporções estavam no caminho certo."
    text_en: "It all started with a handful of micro servos and a head modeled in Fusion 360, with the servo that turns the face already built into the neck. The first parts came off the printer in white, the display got a black frame, and the early tests ran on an ESP32 DevKit on the bench: first a \"Hello, World!\", then the eyes. Standing next to the real Tinbot made it easy to check whether the proportions were on track."
    gallery:
      - "./18.webp"
      - "./19.webp"
      - "./20.webp"
      - "./21.webp"
      - "./22.webp"
      - "./15.webp"
      - "./23.webp"
      - "./24.webp"
      - "./14.webp"
      - "./25.webp"
      - "./13.webp"
      - "./27.webp"
    videos:
      - type: "local"
        src: "/videos/mini-tinbot/cad-cabeca.mp4"
        poster: "/videos/mini-tinbot/cad-cabeca.webp"
        title: "Mecanismo da cabeça no Fusion 360"
        title_en: "Head mechanism in Fusion 360"
      - type: "local"
        src: "/videos/mini-tinbot/cabeca-impressa.mp4"
        poster: "/videos/mini-tinbot/cabeca-impressa.webp"
        title: "A mesma cabeça já impressa, com o servo por dentro"
        title_en: "The same head after printing, with the servo inside"
      - type: "local"
        src: "/videos/mini-tinbot/primeiros-olhos.mp4"
        poster: "/videos/mini-tinbot/primeiros-olhos.webp"
        title: "Primeiros olhos animados no display"
        title_en: "First animated eyes on the display"
  - title: "Primeira versão montada (set–out 2024)"
    title_en: "First assembled version (Sep–Oct 2024)"
    text: "Com servos e fiação acomodados dentro do corpo, as primeiras unidades ficaram de pé, incluindo uma com o painel azul do Tinbot original. Em paralelo, o eletrônico começou a migrar do DevKit para um ESP32-C3 bem menor, testado em protoboard junto com as primeiras expressões, como os olhos de coração."
    text_en: "With the servos and wiring tucked inside the body, the first units stood on their own, including one with the original Tinbot's blue panel. Meanwhile, the electronics started moving from the DevKit to a much smaller ESP32-C3, tested on a breadboard along with the first expressions, such as the heart eyes."
    gallery:
      - "./28.webp"
      - "./29.webp"
      - "./30.webp"
      - "./31.webp"
      - "./32.webp"
      - "./33.webp"
      - "./10.webp"
      - "./34.webp"
    videos:
      - type: "local"
        src: "/videos/mini-tinbot/olhos-coracao.mp4"
        poster: "/videos/mini-tinbot/olhos-coracao.webp"
        title: "Troca de expressões na primeira versão"
        title_en: "Switching expressions on the first version"
      - type: "local"
        src: "/videos/mini-tinbot/teste-braco.mp4"
        poster: "/videos/mini-tinbot/teste-braco.webp"
        title: "Teste do braço com o rosto ainda na protoboard"
        title_en: "Arm test with the face still on the breadboard"
  - title: "Versão do TCC (nov 2024)"
    title_en: "Capstone version (Nov 2024)"
    text: "Para a apresentação, o corpo foi redesenhado e reimpresso, o ESP32-C3 Super Mini passou a comandar tudo, a base ganhou um conector USB-C e LEDs RGB endereçáveis foram para as laterais da cabeça. O rosto ficou bem mais expressivo: tela de inicialização, olhos bravos, tristes, de coração e até de cifrão perguntando \"É o PIX???\"."
    text_en: "For the presentation, the body was redesigned and reprinted, an ESP32-C3 Super Mini took charge of everything, the base got a USB-C connector and addressable RGB LEDs went into the sides of the head. The face became far more expressive: a boot screen, angry, sad and heart eyes, and even dollar-sign eyes asking \"É o PIX???\" (\"Is that a Pix payment???\")."
    gallery:
      - "./36.webp"
      - "./37.webp"
      - "./38.webp"
      - "./39.webp"
      - "./11.webp"
      - "./41.webp"
      - "./42.webp"
      - "./43.webp"
      - "./44.webp"
      - "./45.webp"
      - "./46.webp"
      - "./47.webp"
      - "./48.webp"
      - "./49.webp"
      - "./50.webp"
      - "./51.webp"
      - "./52.webp"
      - "./53.webp"
      - "./54.webp"
      - "./55.webp"
    videos:
      - type: "local"
        src: "/videos/mini-tinbot/inicializacao.mp4"
        poster: "/videos/mini-tinbot/inicializacao.webp"
        title: "Tela de inicialização"
        title_en: "Boot screen"
      - type: "local"
        src: "/videos/mini-tinbot/expressao-brava.mp4"
        poster: "/videos/mini-tinbot/expressao-brava.webp"
        title: "Olhos bravos e movimento do braço"
        title_en: "Angry eyes and arm movement"
      - type: "local"
        src: "/videos/mini-tinbot/leds-rgb.mp4"
        poster: "/videos/mini-tinbot/leds-rgb.webp"
        title: "LEDs RGB nas laterais da cabeça"
        title_en: "RGB LEDs on the sides of the head"
      - type: "local"
        src: "/videos/mini-tinbot/mini-e-tinbot.mp4"
        poster: "/videos/mini-tinbot/mini-e-tinbot.webp"
        title: "O Mini-Tinbot ao lado do Tinbot original"
        title_en: "Mini-Tinbot next to the original Tinbot"
  - title: "Segunda versão: redesenho e produção (2025)"
    title_en: "Second version: redesign and production (2025)"
    text: "Depois do TCC veio a versão que virou produto. Desenhei uma placa de circuito própria para organizar as ligações, reorganizei o código em módulos e redesenhei as carcaças com um painel frontal preto texturizado. O Blender ajudou a escolher as cores antes de imprimir, e as peças passaram a sair em lote, várias por mesa de impressão. A régua confirma os cerca de 15 cm de altura."
    text_en: "After the capstone came the version that became a product. I designed a custom circuit board to tidy up the wiring, split the code into modules and redesigned the shells with a textured black front panel. Blender helped pick the colors before printing, and parts started coming out in batches, several per print bed. The ruler confirms the roughly 15 cm height."
    gallery:
      - "./9.webp"
      - "./56.webp"
      - "./57.webp"
      - "./58.webp"
      - "./12.webp"
      - "./59.webp"
      - "./16.webp"
      - "./60.webp"
      - "./61.webp"
      - "./62.webp"
      - "./63.webp"
      - "./64.webp"
      - "./17.webp"
      - "./65.webp"
      - "./66.webp"
      - "./67.webp"
    videos:
      - type: "local"
        src: "/videos/mini-tinbot/blender-cores.mp4"
        poster: "/videos/mini-tinbot/blender-cores.webp"
        title: "Testando cores de olhos no Blender"
        title_en: "Trying eye colors in Blender"
      - type: "local"
        src: "/videos/mini-tinbot/festa-junina.mp4"
        poster: "/videos/mini-tinbot/festa-junina.webp"
        title: "Dança de Festa Junina, com chapéu de palha"
        title_en: "Festa Junina dance, straw hat included"
      - type: "local"
        src: "/videos/mini-tinbot/danca.mp4"
        poster: "/videos/mini-tinbot/danca.webp"
        title: "Primeiras danças na nova carcaça"
        title_en: "First dances in the new shell"
      - type: "local"
        src: "/videos/mini-tinbot/danca-2.mp4"
        poster: "/videos/mini-tinbot/danca-2.webp"
        title: "Braços e tronco em movimento"
        title_en: "Arms and torso in motion"
      - type: "local"
        src: "/videos/mini-tinbot/energetico.mp4"
        poster: "/videos/mini-tinbot/energetico.webp"
        title: "Depois de tomar um energético"
        title_en: "After an energy drink"
  - title: "Acabamento, estojo e controle remoto (ago 2025–2026)"
    title_en: "Finishing touches, case and remote control (Aug 2025–2026)"
    text: "Com o robô pronto, faltava a experiência de uso: o estojo impresso com o nome gravado na tampa, o menu de volume e a contagem de confirmação no sensor touch, a tela de configuração do Wi-Fi e, por último, a página web para mover os servos e gravar poses pelo navegador."
    text_en: "With the robot done, what was left was the user experience: the printed case with the name engraved on the lid, the volume menu and confirmation countdown on the touch sensor, the Wi-Fi setup screen and, last of all, the web page for moving the servos and recording poses from the browser."
    gallery:
      - "./68.webp"
      - "./69.webp"
      - "./70.webp"
      - "./72.webp"
      - "./71.webp"
      - "./73.webp"
      - "./76.webp"
      - "./78.webp"
    videos:
      - type: "local"
        src: "/videos/mini-tinbot/impressao-estojo.mp4"
        poster: "/videos/mini-tinbot/impressao-estojo.webp"
        title: "Tampa do estojo saindo da impressora"
        title_en: "The case lid coming off the printer"
      - type: "local"
        src: "/videos/mini-tinbot/cores-olhos.mp4"
        poster: "/videos/mini-tinbot/cores-olhos.webp"
        title: "Trocando a cor dos olhos"
        title_en: "Changing the eye color"
---

# Mini-Tinbot

O Mini-Tinbot nasceu como meu Trabalho de Conclusão de Curso em Engenharia Mecatrônica, com uma proposta simples de enunciar e difícil de cumprir: encolher o Tinbot, um robô de porte bem maior, para algo que coubesse em cima da mesa, mantendo as proporções e o máximo possível das características e funções do original, sem estourar um orçamento pequeno. O resultado é um robô de aproximadamente 15 cm de altura que pisca, olha em volta, conta piadas, dança e ainda pode ser controlado pelo celular.

## Eletrônica

O cérebro do robô é um **Lolin C3 Mini (ESP32-C3)**, escolhido por ser pequeno o bastante para caber no corpo e por já trazer Wi-Fi integrado. O rosto é um **display TFT IPS ST7789 de 1,47" (172 × 320 px)** ligado por SPI e usado na horizontal, onde os olhos são desenhados em tempo real. A voz sai de um **módulo MP3 DFPlayer Mini** ligado a um alto-falante, que toca os áudios gravados em um cartão SD de 4 GB organizado em pastas temáticas. Os movimentos vêm de **4 servomotores**: um gira o tronco sobre a base, dois movem os braços e o quarto vira a cabeça para os lados. Para interagir com o robô sem precisar de celular, há um **sensor touch na base**.

Antes de ir para o corpo impresso, cada parte foi validada em protoboard: primeiro o display com os olhos estáticos, depois o sensor touch, o módulo de som e a conexão Wi-Fi exibindo o IP na tela.

## Rosto e personalidade

As expressões são desenhadas diretamente no display, sem imagens pré-gravadas: olhos redondos que olham para os lados, para cima e para baixo, piscadas, olhos de coração, zangados, tristes, entediados e até um par de óculos "nerd". A cor dos olhos pode ser escolhida entre dez opções e fica salva na memória.

O que dá vida ao robô, porém, é o conjunto de falas gravadas. São mais de cem áudios divididos em categorias: frases de apresentação, curiosidades, piadas, cantadas e seis músicas com coreografia própria, em que a duração de cada dança é sincronizada com o áudio para os servos pararem junto com a música. Quando fica parado por muito tempo, o Mini-Tinbot fica entediado, lembra o usuário de beber água ou de arrumar a postura e, se perder a conexão com a internet, reclama disso também.

Com o horário sincronizado via NTP, ele também reage ao calendário: avisa que é hora do café às 9h, fala de almoço ao meio-dia, sugere desligá-lo às 20h e tem falas específicas para Natal, Ano Novo, Halloween, Festa Junina e para o começo, meio e fim do mês, cada uma tocada no máximo uma vez por dia.

## Firmware

O firmware foi escrito em C++ com PlatformIO, separado em módulos para display, rosto, som, servos, rede, OTA, controle remoto e calendário. Todo o funcionamento roda em um laço cooperativo não bloqueante de cerca de 10 ms: animações, danças, timers e o servidor web são máquinas de estados guiadas por `millis()`, o que permite que o robô continue respondendo ao toque e ao navegador enquanto se move ou fala.

Os servos têm um motor de interpolação próprio, com aceleração e desaceleração suaves e limites de ângulo por articulação para não forçar a mecânica. Eles só ficam energizados enquanto se movem e são desligados pouco mais de um segundo depois de chegar na posição, o que elimina a tremedeira e o ruído típicos de servos parados e reduz o consumo.

Pelo sensor touch, o usuário navega por um menu de dois níveis, em que categorias e opções vão passando na tela e a escolha é confirmada automaticamente após três segundos; tocar no robô enquanto ele faz alguma coisa interrompe a ação e o devolve ao repouso. O modo escolhido, o volume, a cor dos olhos e os intervalos das falas automáticas ficam salvos na EEPROM e sobrevivem a reinicializações.

## Wi-Fi e controle pelo navegador

Na primeira vez que liga, ou quando não encontra uma rede conhecida, o robô abre um ponto de acesso chamado `TINBOT` e mostra na tela um QR Code para configurar o Wi-Fi pelo celular. Depois de conectado, ele serve uma página web de controle remoto que faz tudo o que o sensor touch faz e mais um pouco: disparar falas e danças, trocar a cor dos olhos, ajustar o volume e configurar de quanto em quanto tempo cada tipo de fala automática acontece.

Há também uma tela dedicada aos servos, onde é possível mover cada articulação individualmente, gravar até 30 poses e reproduzi-las em sequência, criando coreografias novas sem tocar no código. Atualizações de firmware podem ser enviadas pela rede via OTA, sem precisar abrir o robô ou conectar o cabo USB.

## Estrutura

O corpo foi modelado no Fusion 360 e impresso em 3D, com as carcaças externas em branco e o rosto, o pescoço, os eixos dos braços, o painel do peito e a base em preto, seguindo o visual do Tinbot original. O Blender foi usado para renderizar o robô e testar combinações de cores. Cada robô acompanha um estojo também impresso em 3D, com encaixe no formato do corpo e espaço para o cabo USB, com o nome gravado na tampa.

## Do protótipo ao produto

O robô que aparece nas fotos acima é o resultado de mais de um ano de iterações. A primeira versão rodava em um ESP32 DevKit grande demais para caber no corpo, então o trabalho foi encolhendo a eletrônica e refinando a mecânica até chegar à versão apresentada no TCC, em novembro de 2024. Em 2025 o projeto foi praticamente refeito, com carcaças novas, o desenho de uma placa de circuito própria e o firmware reorganizado em módulos, até virar algo que dava para entregar na mão de alguém. O processo completo, fase por fase, está mais abaixo, depois da galeria.

Depois do TCC, o Mini-Tinbot deixou de ser só um trabalho acadêmico: menos de dez unidades foram produzidas e vendidas para o pessoal interno da empresa.
