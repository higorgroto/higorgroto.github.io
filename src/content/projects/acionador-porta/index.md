---
title: "Acionador de Porta para Reconhecimento Facial"
title_en: "Door Actuator for Facial Recognition"
description: "Módulo que abre a porta quando um sistema de controle de acesso por reconhecimento facial libera a entrada. Fica na rede local esperando a requisição HTTP do servidor da aplicação e aciona um relé de 5 V ligado à fechadura. A versão final usa uma WT32-ETH01 (ESP32 com Ethernet), registra cada acionamento em um cartão SD e tem uma página web com logs em tempo real e atualização de firmware por OTA, tudo dentro de uma case impressa em 3D."
description_en: "A module that opens the door when a facial recognition access control system grants entry. It sits on the local network waiting for an HTTP request from the application server and drives a 5 V relay wired to the lock. The final version uses a WT32-ETH01 (ESP32 with Ethernet), logs every activation to an SD card, and has a web page with real-time logs and OTA firmware updates, all inside a 3D-printed enclosure."
excerpt: "Um ESP32 na rede local que recebe o aviso do reconhecimento facial e abre a porta, com logs em cartão SD e case impressa em 3D."
excerpt_en: "An ESP32 on the local network that gets the signal from facial recognition and opens the door, with SD card logging and a 3D-printed enclosure."
date: 2025-09-30
cover: "./cover.webp"
search: "acionador porta door actuator opener controle de acesso access control reconhecimento facial facial recognition esp32 wt32-eth01 ethernet rede local lan relé relay 5v cartão sd sd card log logger servidor web web server http ota ntp platformio case impressão 3d 3d printed enclosure fechadura lock"
gallery:
  - "./1.webp"
  - "./2.webp"
  - "./3.webp"
  - "./4.webp"
  - "./5.webp"
  - "./6.webp"
  - "./7.webp"
  - "./8.webp"
videos:
  - type: "local"
    src: "/videos/acionador-porta/case-preta.mp4"
    poster: "/videos/acionador-porta/case-preta.webp"
    title: "A versão final fechada na case preta"
    title_en: "The final version closed in the black enclosure"
---

# Acionador de Porta para Reconhecimento Facial

Esse projeto nasceu de uma necessidade bem prática: o controle de acesso de uma porta passou a ser feito por um sistema de reconhecimento facial, e faltava a peça que transformasse o "rosto reconhecido" do software em uma porta efetivamente abrindo. A solução foi um pequeno aparelho que fica conectado à rede local, espera o servidor da aplicação avisar que alguém foi liberado e aciona a fechadura. Um projeto simples, mas que precisava ser confiável, já que fica ligado o tempo todo e qualquer falha significa alguém parado do lado de fora.

## Como funciona

O microcontrolador sobe um servidor web na rede e fica esperando. Quando o reconhecimento facial identifica uma pessoa autorizada, o servidor da aplicação faz uma requisição HTTP para o endereço `/set`, informando o canal, o estado e por quanto tempo o relé deve ficar acionado. O ESP32 então fecha o **relé de 5 V** ligado à fechadura, deixa a porta liberada pelo tempo pedido (5 segundos por padrão) e desliga sozinho em seguida. O firmware já foi pensado para até quatro relés independentes, então o mesmo aparelho poderia controlar mais de uma porta se fosse preciso.

O desligamento é controlado por tempo dentro do `loop`, sem travar o processador com `delay`, de modo que o servidor continua respondendo normalmente enquanto a porta está aberta.

## Da primeira versão à final

A **primeira versão**, na case branca, usava um ESP32 DevKit comum conectado por Wi-Fi, com o módulo relé e a placa encaixados lado a lado e alimentação pelo próprio cabo USB. Funcionou, mas o local de instalação fica no meio de quadros e tubulações metálicas, e o sinal do Wi-Fi oscilava bastante, o que chegou a pedir uma antena externa colada na tampa.

A **versão final**, na case preta, resolveu isso na raiz trocando a placa por uma **WT32-ETH01**, um ESP32 com porta **Ethernet** integrada. Com cabo de rede, a conexão deixou de depender do sinal sem fio. Aproveitei a mudança para adicionar um **módulo de cartão SD** para guardar os logs e um conector P4 para a alimentação de 5 V, e redesenhei a case para que o conector RJ45 e os bornes do relé ficassem acessíveis por fora, sem precisar abrir nada na instalação.

## Logs e manutenção

Como o aparelho fica escondido junto da instalação elétrica, dar manutenção nele precisava ser fácil sem tirá-lo do lugar. Por isso ele tem uma pequena página web de configuração que mostra o endereço MAC, permite acionar o relé manualmente para teste e dá acesso a duas ferramentas:

- **Logs em tempo real**: uma tela no estilo terminal que atualiza a cada dois segundos com as últimas linhas do registro. Cada acionamento, cada desligamento automático e o uso de memória ficam anotados com data e hora, sincronizadas por **NTP** assim que o aparelho entra na rede. Os arquivos ficam no cartão SD, divididos em blocos de 30 KB que vão sendo reaproveitados quando o espaço acaba, e podem ser baixados direto pelo navegador.
- **Atualização OTA**: o firmware novo é enviado como um arquivo `.bin` pela própria página, sem precisar tirar o aparelho do lugar nem ligar um cabo USB.

Para aguentar meses ligado sem intervenção, o firmware também registra o motivo do último reinício (queda de energia, watchdog, erro) e se reinicia sozinho caso a memória livre fique perigosamente baixa, evitando que ele trave em silêncio.

## Case

As duas cases foram modeladas por mim e impressas em 3D. Mais do que proteger a eletrônica, a ideia era deixar o aparelho com cara de produto pronto, com tampa parafusada, furos de fixação e aberturas no lugar certo para cada conector, em vez de uma placa solta presa com fita na parede.

O firmware foi escrito em C++ com **PlatformIO**, usando a biblioteca `WebServer_WT32_ETH01` para o servidor HTTP sobre Ethernet.
