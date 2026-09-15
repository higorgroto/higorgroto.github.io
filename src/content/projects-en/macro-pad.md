# Mechanical 20-Key Macro Pad

This project consists of developing a **custom mechanical macro pad**, designed to boost productivity by running personalized shortcuts, commands, and programmable macros.

The device was built around an **Arduino Leonardo USB-C**, recognized by the computer as an HID keyboard, which allows full compatibility with Windows, Linux, and macOS without any additional drivers.

The keypad has **20 mechanical keys**, arranged in a matrix of **4 columns by 5 rows**, which significantly reduces the number of pins required on the microcontroller. Every switch has a **1N4007 diode**, eliminating ghosting issues and allowing multiple keys to be pressed simultaneously.

The entire enclosure was designed in CAD and manufactured by 3D printing in **black and white ABS**, providing high mechanical strength, a custom finish, and ease of maintenance.

The firmware was developed using **QMK Firmware**, configured through the **QMK MSYS** environment, allowing the creation of different key layers, shortcuts, macros, key combinations, and many behavior customizations.

## Key Features

- 20 mechanical keys
- 4x5 matrix (4 columns × 5 rows)
- Arduino Leonardo USB-C
- USB HID communication
- QMK-based firmware
- Configuration through QMK MSYS
- 1N4007 diodes on every switch
- 3D-printed ABS enclosure
- Compact and modular design
- Fully programmable

## Hardware

- Arduino Leonardo USB-C
- 20 mechanical switches
- 20 keycaps
- 20 1N4007 diodes
- Wiring for the key matrix
- 3D-printed ABS enclosure
- Mounting screws

## Software

- QMK Firmware
- QMK MSYS
- Visual Studio Code

## Development

The project started with the key-matrix circuit, aiming to reduce the number of connections between the keypad and the microcontroller. Once the 4x5 matrix was defined, diodes were added to every key to ensure simultaneous key combinations work correctly.

Next came the mechanical design of the enclosure in CAD, which accommodates the switches, the Arduino Leonardo, and all internal wiring in an organized way. The parts were manufactured in ABS by 3D printing, offering good strength and finish.

In the software stage, the firmware was developed using the QMK ecosystem. Rows, columns, keymap, and layers were configured through QMK MSYS, making it possible to fully customize the keypad's behavior for different applications.

## Results

The result is a compact, robust, and fully programmable macro pad, capable of running shortcuts, macros, and custom commands with low latency and high reliability.

Using QMK allows future firmware expansions, including new layers, shortcuts tailored to specific software, and advanced customizations without any hardware changes.

One improvement for the future would be developing a Printed Circuit Board (PCB); since the project was designed with cost and simplicity in mind, it was not done at the time.
