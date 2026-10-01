# Door Actuator for Facial Recognition

This project came from a very practical need: access to a door started being handled by a facial recognition system, and the missing piece was something that turned the software's "face recognized" into a door actually opening. The answer was a small device that stays connected to the local network, waits for the application server to say someone was granted access, and triggers the lock. A simple project, but one that had to be reliable, since it is on all the time and any failure means someone stuck outside.

## How it works

The microcontroller runs a web server on the network and waits. When facial recognition identifies an authorized person, the application server sends an HTTP request to the `/set` endpoint with the channel, the state and how long the relay should stay on. The ESP32 then closes the **5 V relay** wired to the lock, keeps the door released for the requested time (5 seconds by default) and switches off on its own afterwards. The firmware was written to handle up to four independent relays, so the same device could control more than one door if needed.

The switch-off is timed inside the `loop` without blocking the processor with `delay`, so the server keeps responding normally while the door is open.

## From the first version to the final one

The **first version**, in the white enclosure, used a regular ESP32 DevKit over Wi-Fi, with the relay module and the board sitting side by side and power coming through the USB cable itself. It worked, but the installation spot sits among electrical panels and metal pipes, and the Wi-Fi signal fluctuated a lot, to the point of needing an external antenna stuck to the lid.

The **final version**, in the black enclosure, fixed that at the root by switching to a **WT32-ETH01**, an ESP32 with a built-in **Ethernet** port. With a network cable, the connection no longer depended on wireless signal. I took the chance to add an **SD card module** to store logs and a barrel jack for the 5 V supply, and redesigned the enclosure so the RJ45 connector and the relay terminals are reachable from the outside, without opening anything once installed.

## Logs and maintenance

Since the device is tucked away next to the electrical installation, servicing it had to be easy without taking it down. So it has a small configuration web page that shows the MAC address, lets you trigger the relay manually for testing and gives access to two tools:

- **Real-time logs**: a terminal-style screen that refreshes every two seconds with the latest lines of the log. Every activation, every automatic switch-off and the memory usage are recorded with date and time, synced over **NTP** as soon as the device joins the network. The files live on the SD card, split into 30 KB chunks that get reused when space runs out, and can be downloaded straight from the browser.
- **OTA updates**: new firmware is uploaded as a `.bin` file through the page itself, without taking the device down or plugging in a USB cable.

To survive months of uptime without intervention, the firmware also logs the reason for the last restart (power loss, watchdog, crash) and reboots itself if free memory gets dangerously low, so it never hangs silently.

## Enclosure

Both enclosures were modeled by me and 3D printed. Beyond protecting the electronics, the goal was to make the device look like a finished product, with a screwed-on lid, mounting holes and openings in the right place for each connector, instead of a loose board taped to the wall.

The firmware was written in C++ with **PlatformIO**, using the `WebServer_WT32_ETH01` library for the HTTP server over Ethernet.
