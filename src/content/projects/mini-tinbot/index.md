---
title: "Mini-Tinbot"
title_en: "Mini-Tinbot Desktop Robot"
description: "Protótipo de robô de mesa desenvolvido como Trabalho de Conclusão de Curso em Engenharia Mecatrônica."
description_en: "Desktop companion robot prototype developed as an undergraduate capstone project in Mechatronics Engineering."
excerpt: "Robô compacto baseado em ESP32-C3 com animações faciais, servomotores, áudio, interface web e atualização OTA."
excerpt_en: "Compact ESP32-C3 robot featuring animated facial expressions, servos, audio playback, web interface and OTA firmware updates."
status: "concluido"
date: 2024-12-01
cover: "./cover.webp"
search: "mini tinbot robô esp32 c3 tcc engenharia mecatrônica servo st7789 dfplayer companion robot"
---

## Objetivo

Desenvolver um robô de mesa compacto capaz de interagir com o usuário através de expressões faciais animadas, movimentos mecânicos, reprodução de áudio e interface web, servindo como Trabalho de Conclusão de Curso em Engenharia Mecatrônica.
Alguns desafios propostos; manter as proporções, o maximo de caracteristicas e funções do robô original, enquanto mantem um orçamento pequeno.

## Especificações Técnicas

- **Microcontrolador:** Lolin C3 Mini (ESP32-C3)
- **Display:** TFT IPS ST7789 (172 × 320 px)
- **Movimentação:** 4 servomotores
- **Áudio:** DFPlayer Mini com cartão MicroSD
- **Interface:** Botão físico e controle via navegador
- **Conectividade:** Wi-Fi
- **Atualização:** OTA (Over-The-Air)
- **Estrutura:** Impressão 3D

## Arquitetura do Sistema

Todo o firmware foi desenvolvido em C++ utilizando PlatformIO. O robô possui arquitetura modular baseada em diferentes componentes responsáveis pelo controle dos servomotores, animações faciais, reprodução de áudio, gerenciamento de Wi-Fi, interface web, atualização OTA e armazenamento persistente das configurações.

Além da interação pelo botão físico, o sistema disponibiliza uma interface web para controle remoto, configuração de parâmetros, calibração dos servos e atualização do firmware sem necessidade de conexão USB.

A eletrônica e modelagem 3D foram feitas no Fusion 360, enquanto o codigo foi criado no Visual Studio Code, utilizando a extensão do PlatformIO, que possibilita a compilação do microcontrolador.

## Resultados

O projeto foi desenvolvido como Trabalho de Conclusão de Curso, resultando em um protótipo funcional com 15 de altura, capaz de realizar animações faciais, movimentos sincronizados, reprodução de sons, conexão Wi-Fi, controle remoto via navegador e atualização remota do firmware. O desenvolvimento envolveu eletrônica embarcada, modelagem 3D, impressão 3D e programação de sistemas embarcados, consolidando conhecimentos de Engenharia Mecatrônica em um único projeto.