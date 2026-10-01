---
title: "Mini-Tinbot"
title_en: "Mini-Tinbot Desktop Robot"
description: "Robô de mesa desenvolvido como Trabalho de Conclusão de Curso em Engenharia Mecatrônica: uma versão em miniatura do Tinbot, com rosto animado em display TFT, 4 servomotores, falas e músicas, controle pelo navegador e atualização OTA, tudo rodando em um ESP32-C3."
description_en: "Desktop robot developed as an undergraduate capstone project in Mechatronics Engineering: a miniature version of Tinbot with an animated face on a TFT display, 4 servos, speech and music, browser control and OTA updates, all running on an ESP32-C3."
excerpt: "Miniatura do Tinbot com cerca de 15 cm, ESP32-C3, rosto animado, danças sincronizadas, personalidade própria e controle via Wi-Fi."
excerpt_en: "A roughly 15 cm Tinbot miniature with an ESP32-C3, animated face, synchronized dances, its own personality and Wi-Fi control."
date: 2024-12-01
cover: "./cover.webp"
search: "mini tinbot robô robot esp32 c3 lolin tcc engenharia mecatrônica servo st7789 tft dfplayer mp3 sensor touch companion desk robot wifi ota wifimanager ntp blender fusion 360 impressão 3d platformio"
gallery:
  - "./5.webp"
  - "./6.webp"
  - "./7.webp"
  - "./0.webp"
  - "./9.webp"
  - "./4.webp"
  - "./8.webp"
  - "./3.webp"
  - "./1.webp"
  - "./2.webp"
  - "./16.webp"
  - "./13.webp"
  - "./15.webp"
  - "./14.webp"
  - "./10.webp"
  - "./11.webp"
  - "./12.webp"
  - "./17.webp"
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

O corpo foi modelado no Fusion 360 e impresso em 3D, com as carcaças externas em branco e o rosto, o pescoço, os eixos dos braços e a base em preto, seguindo o visual do Tinbot original. O Blender foi usado para renderizar o robô e testar combinações de cores. Cada robô acompanha um estojo também impresso em 3D, com encaixe no formato do corpo e espaço para o cabo USB, com o nome gravado na tampa.

Depois do TCC, o Mini-Tinbot deixou de ser só um trabalho acadêmico: menos de dez unidades foram produzidas e vendidas para o pessoal interno da empresa.
