## Objective

Develop a compact desktop robot capable of interacting with the user through animated facial expressions, mechanical movements, audio playback, and a web interface, serving as an undergraduate capstone project in Mechatronics Engineering.
Some challenges were set: keeping the proportions and as many features and functions of the original robot as possible, while staying within a small budget.

## Technical Specifications

- **Microcontroller:** Lolin C3 Mini (ESP32-C3)
- **Display:** TFT IPS ST7789 (172 × 320 px)
- **Movement:** 4 servomotors
- **Audio:** DFPlayer Mini with MicroSD card
- **Interface:** Physical button and browser-based control
- **Connectivity:** Wi-Fi
- **Updates:** OTA (Over-The-Air)
- **Enclosure:** 3D printing

## System Architecture

The entire firmware was developed in C++ using PlatformIO. The robot has a modular architecture based on separate components responsible for servo control, facial animations, audio playback, Wi-Fi management, the web interface, OTA updates, and persistent storage of settings.

Beyond interaction through the physical button, the system provides a web interface for remote control, parameter configuration, servo calibration, and firmware updates without needing a USB connection.

The electronics and 3D modeling were done in Fusion 360, while the code was written in Visual Studio Code using the PlatformIO extension, which makes it possible to compile for the microcontroller.

## Results

The project was developed as a capstone project, resulting in a working prototype, 15 tall, capable of facial animations, synchronized movements, sound playback, Wi-Fi connection, remote control through the browser, and remote firmware updates. The development involved embedded electronics, 3D modeling, 3D printing, and embedded systems programming, consolidating Mechatronics Engineering knowledge into a single project.
