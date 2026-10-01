# Mini-Tinbot

Mini-Tinbot started as my undergraduate capstone project in Mechatronics Engineering, with a goal that is simple to state and hard to pull off: shrink Tinbot, a much larger robot, into something that fits on a desk, keeping its proportions and as many of the original's features and functions as possible, all on a small budget. The result is a robot roughly 15 cm tall that blinks, looks around, tells jokes, dances, and can also be controlled from a phone.

## Electronics

The robot's brain is a **Lolin C3 Mini (ESP32-C3)**, chosen because it is small enough to fit inside the body and already has Wi-Fi built in. The face is a **1.47" ST7789 IPS TFT display (172 × 320 px)** connected over SPI and used in landscape, where the eyes are drawn in real time. Its voice comes from a **DFPlayer Mini MP3 module** driving a speaker, playing clips stored on a 4 GB SD card organized into themed folders. Movement comes from **4 servos**: one rotates the torso on the base, two move the arms, and the fourth turns the head from side to side. To interact with the robot without a phone, there is a **touch sensor on the base**.

Before going into the printed body, each part was validated on a breadboard: first the display with static eyes, then the touch sensor, the sound module and the Wi-Fi connection showing the IP on screen.

## Face and personality

The expressions are drawn directly on the display, with no pre-rendered images: round eyes that look left, right, up and down, blinks, heart eyes, angry, sad and bored eyes, and even a pair of "nerd" glasses. The eye color can be picked from ten options and is saved to memory.

What really brings the robot to life, though, is its set of recorded lines. There are over a hundred audio clips split into categories: introductions, fun facts, jokes, pickup lines, and six songs with their own choreography, where each dance's duration is matched to the audio so the servos stop right when the music does. When left alone for too long, Mini-Tinbot gets bored, reminds the user to drink water or fix their posture, and if it loses its internet connection, it complains about that too.

With the time synced over NTP, it also reacts to the calendar: it announces coffee time at 9 a.m., talks about lunch at noon, suggests turning it off at 8 p.m., and has specific lines for Christmas, New Year, Halloween, Festa Junina, and the beginning, middle and end of the month, each played at most once a day. (All of its lines are in Brazilian Portuguese.)

## Firmware

The firmware was written in C++ with PlatformIO and split into modules for the display, face, sound, servos, networking, OTA, remote control and calendar. Everything runs on a non-blocking cooperative loop of roughly 10 ms: animations, dances, timers and the web server are state machines driven by `millis()`, which keeps the robot responsive to touch and to the browser while it moves or talks.

The servos have their own interpolation engine, with smooth acceleration and deceleration and per-joint angle limits so the mechanics are never strained. They are only powered while moving and are released a little over a second after reaching their position, which removes the jitter and buzzing typical of idle servos and lowers power consumption.

The touch sensor navigates a two-level menu, where categories and options cycle on screen and the choice is confirmed automatically after three seconds; touching the robot while it is busy interrupts the action and sends it back to rest. The selected mode, volume, eye color and the intervals for automatic lines are stored in EEPROM and survive reboots.

## Wi-Fi and browser control

On first boot, or when it can't find a known network, the robot opens an access point called `TINBOT` and shows a QR code on screen for setting up Wi-Fi from a phone. Once connected, it serves a remote control web page that does everything the touch sensor does and more: trigger lines and dances, change the eye color, adjust the volume, and set how often each type of automatic line plays.

There is also a dedicated servo screen where each joint can be moved individually, and up to 30 poses can be recorded and played back in sequence, creating new choreographies without touching the code. Firmware updates can be sent over the network via OTA, with no need to open the robot or plug in a USB cable.

## Build

The body was modeled in Fusion 360 and 3D printed, with the outer shells in white and the face, neck, arm shafts and base in black, following the look of the original Tinbot. Blender was used to render the robot and try out color combinations. Each robot comes with a 3D printed case as well, shaped to fit its body with room for the USB cable and the name engraved on the lid.

After the capstone, Mini-Tinbot became more than an academic project: fewer than ten units were produced and sold to the company's internal staff.
