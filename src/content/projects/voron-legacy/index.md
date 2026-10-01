---
title: "Impressora 3D Voron Legacy"
title_en: "Voron Legacy 3D Printer"
description: "Montagem de uma impressora 3D Voron Legacy, projeto open source CoreXY da Voron Design, construída do zero: estrutura em perfis de alumínio, movimento sobre guias lineares cilíndricas, peças plásticas impressas em vermelho e preto, cabeçote montado e ajustado a partir do CAD e eletrônica BIGTREETECH com drivers TMC2209 e tela touch."
description_en: "Build of a Voron Legacy 3D printer, Voron Design's open-source CoreXY project, assembled from scratch: an aluminum extrusion frame, motion on round linear rods, plastic parts printed in red and black, a toolhead assembled and tuned against the CAD model, and BIGTREETECH electronics with TMC2209 drivers and a touchscreen."
excerpt: "Impressora CoreXY open source montada peça por peça, do frame de alumínio à eletrônica, com as peças impressas em casa."
excerpt_en: "An open-source CoreXY printer built piece by piece, from the aluminum frame to the electronics, with parts printed at home."
date: 2025-03-17
cover: "./cover.webp"
search: "voron legacy impressora 3d 3d printer corexy open source voron design perfil alumínio aluminum extrusion guia linear linear rods cabeçote toolhead afterburner extrusora extruder hotend mesa aquecida heated bed motor de passo stepper nema 17 bigtreetech btt skr lpc1768 tmc2209 tft touchscreen fusion 360 montagem build"
gallery:
  - "./1.webp"
  - "./3.webp"
phases:
  - title: "Frame e movimento (mai–dez 2024)"
    title_en: "Frame and motion (May–Dec 2024)"
    text: "A montagem começou pelo cubo de perfis de alumínio, que precisa ficar no esquadro para todo o resto funcionar, e pelas guias lineares cilíndricas que chegaram ainda embaladas. Depois vieram as peças impressas em vermelho, que prendem as guias e formam o pórtico do CoreXY no topo da estrutura."
    text_en: "The build started with the aluminum extrusion cube, which has to be square for everything else to work, and with the round linear rods that arrived still wrapped. Next came the parts printed in red, which hold the rods and form the CoreXY gantry at the top of the frame."
    gallery:
      - "./4.webp"
      - "./5.webp"
      - "./6.webp"
  - title: "Cabeçote de impressão (jan 2025)"
    title_en: "Toolhead (Jan 2025)"
    text: "O cabeçote foi montado aos poucos, com o hotend, as ventoinhas de resfriamento e a extrusora, sempre conferindo cada peça com o modelo aberto no Fusion 360 para entender como tudo se encaixava antes de apertar os parafusos."
    text_en: "The toolhead came together bit by bit, with the hotend, the cooling fans and the extruder, always checking each part against the model open in Fusion 360 to understand how everything fit before tightening the screws."
    gallery:
      - "./7.webp"
      - "./8.webp"
    videos:
      - type: "local"
        src: "/videos/voron-legacy/cabecote-afterburner.mp4"
        poster: "/videos/voron-legacy/cabecote-afterburner.webp"
        title: "Hotend e carenagem do cabeçote com o logo da Voron"
        title_en: "Hotend and toolhead shroud with the Voron logo"
      - type: "local"
        src: "/videos/voron-legacy/extrusora-cad.mp4"
        poster: "/videos/voron-legacy/extrusora-cad.webp"
        title: "Peças da extrusora comparadas com o modelo no Fusion 360"
        title_en: "Extruder parts compared with the model in Fusion 360"
      - type: "local"
        src: "/videos/voron-legacy/cabecote-montado.mp4"
        poster: "/videos/voron-legacy/cabecote-montado.webp"
        title: "O cabeçote completo, já com a fiação"
        title_en: "The complete toolhead, already wired"
  - title: "Mesa, motores e extrusora (jan–mar 2025)"
    title_en: "Bed, motors and extruder (Jan–Mar 2025)"
    text: "Com o pórtico pronto, a mesa aquecida foi instalada dentro do frame e os motores de passo chegaram. O motor do eixo Z ganhou seu suporte impresso e o acoplamento flexível, e a extrusora foi fixada na lateral da estrutura."
    text_en: "With the gantry done, the heated bed went inside the frame and the stepper motors arrived. The Z motor got its printed mount and flexible coupler, and the extruder was fixed to the side of the frame."
    gallery:
      - "./9.webp"
      - "./10.webp"
      - "./11.webp"
      - "./12.webp"
  - title: "Eletrônica (mar 2025)"
    title_en: "Electronics (Mar 2025)"
    text: "A última etapa foi a eletrônica: uma placa BIGTREETECH com microcontrolador LPC1768 e cinco drivers TMC2209, testada na bancada junto com a tela touch antes de ir para dentro da impressora."
    text_en: "The last stage was the electronics: a BIGTREETECH board with an LPC1768 microcontroller and five TMC2209 drivers, tested on the bench together with the touchscreen before going into the printer."
    gallery:
      - "./13.webp"
      - "./14.webp"
---

# Impressora 3D Voron Legacy

A Voron Legacy é um dos projetos open source da Voron Design, uma comunidade conhecida por impressoras 3D que a própria pessoa monta do zero, a partir de uma lista de peças e de arquivos para imprimir. A Legacy segue a cinemática **CoreXY**, em que dois motores fixos movem o cabeçote nos eixos X e Y por correias, e usa **guias lineares cilíndricas** em vez de trilhos, o que deixa a montagem mais acessível sem abrir mão da precisão.

## Estrutura e peças impressas

O frame é um cubo de **perfis de alumínio** que serve de base para todo o resto. As peças plásticas, impressas em **vermelho e preto**, fazem a ligação entre os perfis, as guias, as polias e os motores. Como a impressora depende dessas peças para funcionar, imprimir tudo com boa precisão dimensional foi uma parte importante do trabalho, antes mesmo de começar a montagem.

## Cabeçote

O cabeçote reúne o hotend, a extrusora e as ventoinhas que resfriam o dissipador e a peça impressa. Durante a montagem deixei o modelo aberto no **Fusion 360** ao lado da bancada, o que ajudou bastante a entender a ordem das peças e a passagem dos fios em um conjunto tão compacto.

## Eletrônica

O controle fica a cargo de uma placa **BIGTREETECH** com microcontrolador **LPC1768** e drivers **TMC2209**, silenciosos e com ajuste de corrente por software, acompanhada de uma **tela touch** para operar a impressora sem precisar de um computador ligado.

E sim, a estrutura ganhou aprovação felina antes mesmo de a impressora ficar pronta.
