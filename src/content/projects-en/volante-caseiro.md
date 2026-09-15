# Homemade Steering Wheel with 12 Buttons and 4 Switches

A steering wheel built from scratch for simulators and racing games, with 12 buttons on the front and 4 magnetic paddle shifters on the back — all programmable. The frame was entirely 3D printed and the front received a carbon-fiber-style vinyl wrap, giving the project a sporty finish.

## Electronics and Firmware

The brain of the wheel is an **ESP32-S2 Lolin Mini**. The choice was no accident: this chip has native USB, which makes it possible to use the `USB.h` and `USBHID.h` libraries from the Arduino-ESP32 core directly — without relying on external joystick libraries or a dedicated controller board.

Operation is straightforward: the 12 buttons and the 4 paddles are wired between GPIOs and GND, configured as `INPUT_PULLUP`. The firmware continuously reads these 16 pins and packs the state of all of them into a HID report of just 2 bytes, where each bit represents a button. For Windows to recognize the device correctly, a custom HID descriptor was created, announcing that it is a controller with exactly 16 buttons — which guarantees immediate compatibility, with no driver installation.

## Frame and Finish

The whole piece was modeled in CAD and 3D printed: **PETG** on the parts that need more mechanical strength and **PLA** on the non-structural details. The front was covered with black carbon-fiber-pattern vinyl. The 4 rear paddles are magnetic and spring-returned, which gives a tactile click when actuated. The front buttons were bought on AliExpress.

At the base, an **automotive quick release** allows the wheel to be attached and removed quickly — useful both for swapping rims and for storing the equipment.

## Usage

The connection is made via **USB-C** at the rear. When plugged into a Windows PC, the wheel is automatically recognized as a game device with 16 buttons, ready to be mapped in any game or simulator with support for generic controllers — with no additional software installation.

This project shows how the ESP32-S2's native USB makes it possible to create custom HID peripherals, at low cost and with a high degree of customization, without depending on third-party libraries or controller boards.
