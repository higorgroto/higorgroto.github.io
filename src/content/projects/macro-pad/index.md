---
title: "Macro Pad Mecânico"
title_en: "Mechanical Macro Pad"

description: "Macro Pad customizado com 20 teclas mecânicas, firmware QMK e estrutura impressa em 3D."
description_en: "Custom mechanical macro pad featuring 20 keys, QMK firmware, and a 3D-printed enclosure."

excerpt: "Macro Pad mecânico com Arduino Leonardo USB-C, firmware QMK e estrutura impressa em ABS."
excerpt_en: "Mechanical macro pad built with an Arduino Leonardo USB-C, QMK firmware, and an ABS 3D-printed enclosure."

date: 2024-07-12

cover: "./cover.webp"

gallery:
  - "./01.webp"
  - "./02.webp"
  - "./03.webp"
---

# Macro Pad Mecânico 20 Teclas

Este projeto consiste no desenvolvimento de um **Macro Pad mecânico customizado**, projetado para aumentar a produtividade através da execução de atalhos personalizados, comandos e macros programáveis.

O dispositivo foi desenvolvido utilizando um **Arduino Leonardo USB-C**, reconhecido pelo computador como um teclado HID, permitindo total compatibilidade com Windows, Linux e macOS sem necessidade de drivers adicionais.

O teclado possui **20 teclas mecânicas**, organizadas em uma matriz de **4 colunas por 5 linhas**, reduzindo significativamente a quantidade de pinos necessários no microcontrolador. Cada switch possui um **diodo 1N4007**, eliminando problemas de ghosting e permitindo o pressionamento simultâneo de múltiplas teclas.

Toda a estrutura foi projetada em CAD e fabricada por impressão 3D utilizando **ABS preto e branco**, proporcionando elevada resistência mecânica, acabamento personalizado e facilidade de manutenção.

O firmware foi desenvolvido utilizando o **QMK Firmware**, configurado através do ambiente **QMK MSYS**, permitindo a criação de diferentes camadas de teclas, atalhos, macros, combinações de teclas e diversas personalizações de comportamento.

## Principais características

- 20 teclas mecânicas
- Matriz 4x5 (4 colunas × 5 linhas)
- Arduino Leonardo USB-C
- Comunicação USB HID
- Firmware baseado em QMK
- Configuração através do QMK MSYS
- Diodos 1N4007 em cada switch
- Estrutura impressa em 3D em ABS
- Design compacto e modular
- Totalmente programável

## Hardware

- Arduino Leonardo USB-C
- 20 Switches mecânicos
- 20 Keycaps
- 20 Diodos 1N4007
- Cabos para matriz do teclado
- Estrutura impressa em ABS
- Parafusos de montagem

## Software

- QMK Firmware
- QMK MSYS
- Visual Studio Code

## Desenvolvimento

O projeto iniciou-se pelo desenvolvimento do circuito da matriz de teclas, buscando reduzir a quantidade de conexões entre o teclado e o microcontrolador. Após a definição da matriz 4x5, foram adicionados diodos em todas as teclas para garantir o funcionamento correto das combinações simultâneas.

Em seguida foi realizado o projeto mecânico da estrutura em CAD, permitindo acomodar os switches, o Arduino Leonardo e toda a fiação interna de forma organizada. As peças foram fabricadas em ABS por impressão 3D, oferecendo boa resistência e acabamento.

Na etapa de software, o firmware foi desenvolvido utilizando o ecossistema QMK. A configuração das linhas, colunas, keymap e camadas foi realizada através do QMK MSYS, permitindo personalizar completamente o funcionamento do teclado para diferentes aplicações.

## Resultados

O resultado foi um Macro Pad compacto, robusto e totalmente programável, capaz de executar atalhos, macros e comandos personalizados com baixa latência e alta confiabilidade.

A utilização do QMK permite futuras expansões do firmware, incluindo novas camadas, atalhos específicos para diferentes softwares e personalizações avançadas sem necessidade de alterações no hardware.

Uma melhorias para o futuro seria o desenvolvimento de uma Placa de circuito Impresso (PCB), como o projeto foi realizado pensando em custo e simplicidade não foi realizado na epoca. 