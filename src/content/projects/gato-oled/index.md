---
title: "Animação de Gato Interativa"
title_en: "Interactive Cat Animation"
description: "Um projeto rápido de protoboard: um ESP32-C3 Super Mini, um display OLED de 0,96\" e dois botões, cada um ligado a uma das patas de um gatinho desenhado na tela. Apertou o botão da esquerda, o gato levanta a pata esquerda; apertou o da direita, a direita; apertou os dois, ele levanta as duas."
description_en: "A quick breadboard project: an ESP32-C3 Super Mini, a 0.96\" OLED display and two buttons, each tied to one paw of a little cat drawn on the screen. Press the left button and the cat raises its left paw; press the right one and it raises the right; press both and it raises both."
excerpt: "Dois botões, um display OLED e um gatinho que levanta a pata correspondente a cada toque."
excerpt_en: "Two buttons, an OLED display and a little cat that raises the matching paw on every press."
date: 2024-04-27
cover: "./cover.webp"
search: "gato cat bongo cat animação animation oled 0,96 0.96 ssd1306 display esp32 esp32-c3 super mini protoboard breadboard botões buttons pull-up resistor resistores arduino i2c"
gallery:
  - "./1.webp"
  - "./2.webp"
  - "./3.webp"
videos:
  - type: "local"
    src: "/videos/gato-oled/gato.mp4"
    poster: "/videos/gato-oled/gato.webp"
    title: "O gato levantando cada pata conforme os botões"
    title_en: "The cat raising each paw as the buttons are pressed"
---

# Animação de Gato Interativa

Nem todo projeto precisa de case, PCB e meses de desenvolvimento. Esse aqui foi montado inteiro numa protoboard, em pouco tempo, só pela diversão de ver um gatinho reagir aos botões. A ideia veio do clássico "Bongo Cat": um gato desenhado em traços simples, debruçado sobre a borda da tela, que bate as patas no ritmo do que você aperta.

## Como funciona

O cérebro é um **ESP32-C3 Super Mini**, que conversa com um **display OLED de 0,96"** pelo barramento I²C, usando só dois fios além da alimentação. De cada lado da tela fica um botão, ligado a uma entrada do microcontrolador com um **resistor de pull-up**, de modo que a leitura fica em nível alto com o botão solto e cai para nível baixo quando ele é pressionado.

O firmware lê os dois botões continuamente e escolhe qual quadro do gato desenhar. Com nenhum botão apertado, o gato fica com as duas patas apoiadas; o botão da esquerda faz ele levantar a pata esquerda, o da direita levanta a direita, e apertando os dois ao mesmo tempo ele ergue as duas patas juntas. Como cada combinação tem seu próprio desenho, a resposta é imediata e dá a sensação de que o gato está realmente "tocando" junto com você, como dá para ver no vídeo.

## Montagem

Tudo ficou numa protoboard pequena: o display no centro, um botão de cada lado e o ESP32-C3 na ponta, alimentado e programado pelo próprio cabo USB-C. As primeiras fotos mostram o display ainda exibindo o logo de teste do Arduino, antes de o gato e os botões entrarem na montagem.
