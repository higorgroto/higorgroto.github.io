---
title: "Câmera Digital ESP32-S3"
title_en: "ESP32-S3 Digital Camera"
description: "Câmera fotográfica digital portátil construída com o XIAO ESP32-S3 Sense da Seeed, que reúne câmera, microfone e slot de cartão SD em uma placa minúscula. Tira fotos, grava vídeos com áudio e tem galeria e menu de configurações navegados por um encoder rotativo e uma tela IPS. Alimentada por bateria LiPo, com case modelado no Fusion 360 e impresso em PLA azul e branco."
description_en: "Portable digital camera built around Seeed's XIAO ESP32-S3 Sense, which packs a camera, microphone and SD card slot into a tiny board. It takes photos, records video with audio, and has a gallery and settings menu navigated with a rotary encoder and an IPS screen. Powered by a LiPo battery, with an enclosure modeled in Fusion 360 and printed in blue and white PLA."
excerpt: "Câmera de bolso com ESP32-S3: fotos, vídeo com áudio, galeria e configurações, tudo salvo direto no cartão SD."
excerpt_en: "Pocket camera with an ESP32-S3: photos, video with audio, a gallery and settings, all saved straight to the SD card."
date: 2026-05-25
cover: "./cover.webp"
search: "câmera digital digital camera esp32 s3 sense xiao seeed foto vídeo video áudio microfone sd card galeria gallery display ips st7789 encoder ky-040 lipo bateria battery fusion 360 impressão 3d pla"
gallery:
  - "./1.webp"
  - "./0.webp"
  - "./4.webp"
  - "./2.webp"
  - "./3.webp"
videos:
  - type: "local"
    src: "/videos/esp_camera/funcionando.mp4"
    title: "A câmera montada: menu, captura e galeria"
    title_en: "The assembled camera: menu, capture and gallery"
  - type: "local"
    src: "/videos/esp_camera/teste.mp4"
    title: "Primeiro teste na bancada, com a imagem da câmera no display"
    title_en: "First bench test, with the camera feed on the display"
---

# Câmera Digital com ESP32-S3

Uma câmera digital de bolso feita do zero: ela tira fotos, grava vídeos com áudio e guarda tudo em um cartão SD, com uma pequena tela para enquadrar a cena e rever o que foi capturado. A ideia era ver até onde dava para chegar com um microcontrolador barato fazendo o papel de uma câmera completa.

## Hardware

O coração do projeto é o **XIAO ESP32-S3 Sense**, da Seeed. Essa placa, do tamanho de uma unha, já traz o módulo de câmera, um microfone digital e o slot de cartão microSD, o que resolveu de uma vez a parte mais trabalhosa da eletrônica. Ela também tem o circuito de carga de bateria embutido, então a **bateria LiPo** foi ligada direto na placa, sem precisar de um BMS separado — só com uma chave liga/desliga no caminho.

Para a interface, usei um **display IPS de 1,42"** com controlador ST7789, que mostra o preview da câmera em tempo real e os menus. A navegação é feita por um **encoder rotativo KY-040**, que gira para percorrer as opções e clica para confirmar, e por um botão comum que funciona como obturador.

## Funcionalidades

Além de fotografar, a câmera grava vídeo com o áudio do microfone integrado. Tudo vai direto para o cartão SD, e a galeria permite rever as fotos e vídeos na própria tela e escolher quais manter ou excluir. Há também um menu de configurações com ajustes como exposição, espelhamento da imagem e temporizador para o disparo.

## Case

A case foi modelada no **Fusion 360** e impressa em 3D com **PLA azul e branco**. O desenho é compacto, com a tela na frente, o encoder no topo e o conector USB-C acessível para carregar a bateria e transferir arquivos.
