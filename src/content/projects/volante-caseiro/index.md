---
title: "Volante Caseiro"
title_en: "Homemade Steering Wheel"
description: "Volante caseiro com 12 botões e 4 switches programáveis, com 12 botões na frente e 4 borboletas atrás, feito em impressão 3D PETG e PLA, adesivado com vinil estilo fibra de carbono, borboletas magnéticas com clique tátil. Botões comprados no Aliexpress, conexão USB-C traseira, eletrônica baseada em ESP32 S2 Lolin Mini, usando USB nativo do ESP32-S2 com bibliotecas USB.h e USBHID.h do Arduino-ESP32. Os 16 GPIOs configurados como INPUT_PULLUP, lidos continuamente para montar um relatório HID de 2 bytes. Descriptor HID personalizado para 16 botões no Windows. Inclui quick release automotivo para engate rápido."
description_en: "Homemade steering wheel with 12 buttons and 4 programmable switches, featuring 12 buttons on the front and 4 paddles at the back, made with 3D printed PETG and PLA, front covered with carbon fiber vinyl, magnetic paddles with tactile click. Buttons purchased from Aliexpress, rear USB-C connection, electronics based on ESP32 S2 Lolin Mini, using native ESP32-S2 USB with USB.h and USBHID.h libraries from Arduino-ESP32. 16 GPIOs configured as INPUT_PULLUP, continuously read to build a 2-byte HID report. Custom HID descriptor for 16 buttons on Windows. Includes automotive quick release for quick mounting."
excerpt: "Volante caseiro personalizado com 16 entradas digitais (12 botões + 4 switches) usando ESP32-S2 e USB nativo para controle de jogos e simulação."
excerpt_en: "Custom homemade steering wheel with 16 digital inputs (12 buttons + 4 switches) using ESP32-S2 and native USB for gaming and simulation control."
status: "concluido"
date: 2026-08-28
cover: "./cover.webp"
search: "volante caseiro homemade steering wheel esp32 s2 usb hid botões switches paddle shift quick release 3d impressão petg pla fibra de carbono"
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

Este projeto consiste em um volante caseiro desenvolvido para uso em simuladores e jogos, contendo **12 botões na frente** e **4 borboletas (paddles) na parte traseira**, todos programáveis. O volante foi totalmente fabricado em **impressão 3D** utilizando **PETG e PLA**, com a frente adesivada com um **vinil estilo fibra de carbono** para melhor aparência e aderência.

As borboletas são **magnéticas** e proporcionam um **clique tátil** satisfatório ao serem acionadas. Todos os botões foram adquiridos no **Aliexpress** e o volante possui uma conexão **USB-C** na parte traseira para comunicação com o computador.

## Eletrônica e Firmware

A eletrônica do volante é baseada no **ESP32 S2 Lolin Mini**, que possui USB nativo. O código utiliza as bibliotecas `USB.h` e `USBHID.h` do próprio core **Arduino-ESP32**, eliminando a necessidade de bibliotecas externas de joystick.

- **Configuração dos pinos:** Os 12 botões e 4 switches são conectados diretamente entre os GPIOs e o GND, configurados como `INPUT_PULLUP` no código.
- **Leitura dos inputs:** O programa lê continuamente os 16 GPIOs (12 botões + 4 switches) e compacta seus estados em um relatório de **apenas 2 bytes** (16 bits), onde cada bit representa o estado de um botão/switch.
- **Descriptor HID personalizado:** Foi criado um descriptor HID específico que informa ao sistema operacional (Windows) que o dispositivo é um controle com exatamente **16 botões**, garantindo compatibilidade imediata sem necessidade de drivers adicionais.

## Montagem e Acabamento

- **Estrutura:** Toda a estrutura do volante foi modelada em CAD e impressa em 3D usando **PETG** para maior resistência e **PLA** para detalhes não estruturais.
- **Visual:** A frente do volante foi coberta com **adesivo vinil preto com padrão de fibra de carbono**, dando um aspecto esportivo e profissional.
- **Borboletas:** As 4 borboletas traseiras são magnéticas, com molas que proporcionam retorno tátil (clique) ao serem pressionadas ou puxadas.
- **Quick Release:** Foi adicionado um **quick release automotivo** na base do volante, facilitando o engate e disengate rápido para trocas ou armazenamento.

## Uso

O volante é plug-and-play em sistemas Windows: ao conectar via USB-C, o sistema o reconhece automaticamente como um dispositivo de jogo com 16 botões disponíveis para mapeamento em qualquer jogo ou simulator que suporte controles de entrada genérica.

Este projeto demonstra como aproveitar o USB nativo do ESP32-S2 para criar periféricos HID personalizados de baixo custo e alta customização, ideal para entusiastas de simulação e jogos que desejam um controle dedicado sem依赖硬件外设库。