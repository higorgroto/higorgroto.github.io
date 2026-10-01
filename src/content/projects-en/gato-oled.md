# Interactive Cat Animation

Not every project needs an enclosure, a PCB and months of development. This one was built entirely on a breadboard, in very little time, just for the fun of watching a little cat react to buttons. The idea came from the classic "Bongo Cat": a cat drawn in simple lines, leaning over the edge of the screen, tapping its paws to whatever you press.

## How it works

The brain is an **ESP32-C3 Super Mini**, which talks to a **0.96" OLED display** over the I²C bus, using only two wires besides power. On each side of the screen there is a button, wired to a microcontroller input with a **pull-up resistor**, so the reading stays high while the button is released and drops low when it is pressed.

The firmware reads both buttons continuously and picks which frame of the cat to draw. With no button pressed, the cat rests both paws; the left button makes it raise its left paw, the right one raises the right, and pressing both at once lifts both paws together. Since each combination has its own drawing, the response is instant and it really feels like the cat is "playing" along with you, as you can see in the video.

## Build

Everything sits on a small breadboard: the display in the middle, one button on each side and the ESP32-C3 at the end, powered and programmed through its own USB-C cable. The first photos show the display still running the Arduino test logo, before the cat and the buttons joined the build.
