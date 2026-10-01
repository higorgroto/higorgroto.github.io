# Digital Camera with an ESP32-S3

A pocket digital camera built from scratch: it takes photos, records video with audio and stores everything on an SD card, with a small screen for framing the shot and reviewing what was captured. The idea was to see how far a cheap microcontroller could go in the role of a complete camera.

## Hardware

The heart of the project is Seeed's **XIAO ESP32-S3 Sense**. This fingernail-sized board already includes the camera module, a digital microphone and a microSD card slot, which took care of the most laborious part of the electronics in one go. It also has a built-in battery charging circuit, so the **LiPo battery** is wired straight to the board with no separate BMS — just an on/off switch in between.

For the interface I used a **1.42" IPS display** with an ST7789 controller, which shows the live camera preview and the menus. Navigation is handled by a **KY-040 rotary encoder**, which turns to scroll through the options and clicks to confirm, plus a regular push button that works as the shutter.

## Features

Besides taking pictures, the camera records video with audio from the built-in microphone. Everything goes straight to the SD card, and the gallery lets you review photos and videos on the screen itself and choose which ones to keep or delete. There is also a settings menu with options such as exposure, image mirroring and a shutter delay timer.

## Enclosure

The enclosure was modeled in **Fusion 360** and 3D printed in **blue and white PLA**. The design is compact, with the screen on the front, the encoder on top and the USB-C connector within reach for charging the battery and transferring files.
