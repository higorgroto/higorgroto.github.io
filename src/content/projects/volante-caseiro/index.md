---
title: "Volante Caseiro"
title_en: "Homemade Steering Wheel"
description: "Volante caseiro para simuladores, com 12 botões frontais e 4 borboletas magnéticas traseiras, todos programáveis. Estrutura impressa em 3D (PETG e PLA) e adesivada com vinil fibra de carbono. Eletrônica baseada no ESP32-S2 Lolin Mini, usando o USB nativo do chip (USB.h e USBHID.h) para se apresentar ao Windows como um controle HID de 16 botões, sem placas controladoras externas. Conexão USB-C traseira e quick release automotivo para engate rápido."
description_en: "Homemade steering wheel for sim racing, with 12 front buttons and 4 magnetic paddle shifters, all programmable. The frame is 3D printed in PETG and PLA and wrapped in carbon-fiber-style vinyl. The electronics run on an ESP32-S2 Lolin Mini, using the chip's native USB (USB.h and USBHID.h) to present itself to Windows as a 16-button HID controller, with no external controller boards. Rear USB-C connector and an automotive quick release for fast mounting."
excerpt: "Volante caseiro com 16 entradas digitais programáveis, eletrônica ESP32-S2 e USB HID nativo — sem placas controladoras externas."
excerpt_en: "Homemade steering wheel with 16 programmable digital inputs, ESP32-S2 electronics, and native USB HID — no external controller boards."
date: 2026-08-28
cover: "./cover.webp"
search: "volante caseiro homemade steering wheel esp32 s2 usb hid botões switches paddle shift quick release impressão 3d petg pla fibra de carbono"
gallery:
  - "./0.webp"
  - "./1.webp"
  - "./2.webp"
  - "./3.webp"
  - "./4.webp"
  - "./5.webp"
  - "./6.webp"
  - "./7.webp"
  - "./8.webp"
  - "./9.webp"
  - "./10.webp"
  - "./11.webp"
---

# Volante Caseiro com 12 Botões e 4 Switches

Um volante feito do zero para simuladores e jogos de corrida, com 12 botões na frente e 4 borboletas (paddles) magnéticas na parte de trás — todos programáveis. A estrutura foi inteiramente impressa em 3D e a frente recebeu um adesivo vinil estilo fibra de carbono, dando um acabamento esportivo ao projeto.

## Eletrônica e firmware

O cérebro do volante é um **ESP32-S2 Lolin Mini**. A escolha não foi por acaso: esse chip tem USB nativo, o que permite usar diretamente as bibliotecas `USB.h` e `USBHID.h` do core Arduino-ESP32 — sem depender de bibliotecas externas de joystick ou de uma placa controladora dedicada.

O funcionamento é direto: os 12 botões e as 4 borboletas ficam ligados entre GPIOs e GND, configurados como `INPUT_PULLUP`. O firmware lê continuamente esses 16 pinos e compacta o estado de todos eles em um relatório HID de apenas 2 bytes, onde cada bit representa um botão. Para que o Windows reconheça o dispositivo corretamente, foi criado um descriptor HID personalizado informando que se trata de um controle com exatamente 16 botões — o que garante compatibilidade imediata, sem instalação de drivers.

## Estrutura e acabamento

Toda a peça foi modelada em CAD e impressa em 3D: **PETG** nas partes que precisam de mais resistência mecânica e **PLA** nos detalhes não estruturais. A frente foi coberta com vinil preto em padrão fibra de carbono. As 4 borboletas traseiras são magnéticas e têm retorno por mola, o que dá um clique tátil ao acionar. Os botões frontais foram comprados no Aliexpress.

Na base, um **quick release automotivo** permite encaixar e remover o volante rapidamente — útil tanto para trocar de aro quanto para guardar o equipamento.

## Uso

A conexão é feita por **USB-C** na parte traseira. Ao plugar em um PC com Windows, o volante é reconhecido automaticamente como um dispositivo de jogo com 16 botões, prontos para mapear em qualquer jogo ou simulador com suporte a controles genéricos — sem instalação de software adicional.

Esse projeto mostra como o USB nativo do ESP32-S2 permite criar periféricos HID personalizados, com baixo custo e alto grau de customização, sem depender de bibliotecas ou placas controladoras de terceiros.