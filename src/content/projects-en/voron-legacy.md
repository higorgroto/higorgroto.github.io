# Voron Legacy 3D Printer

The Voron Legacy is one of Voron Design's open-source projects, a community known for 3D printers you build yourself from scratch, starting from a bill of materials and a set of files to print. The Legacy uses **CoreXY** kinematics, where two stationary motors move the toolhead along X and Y through belts, and it runs on **round linear rods** instead of rails, which makes the build more accessible without giving up precision.

## Frame and printed parts

The frame is a cube of **aluminum extrusions** that everything else is built on. The plastic parts, printed in **red and black**, tie together the extrusions, rods, pulleys and motors. Since the printer depends on these parts to work, printing all of them with good dimensional accuracy was an important part of the job, even before the assembly started.

## Toolhead

The toolhead brings together the hotend, the extruder and the fans that cool the heat sink and the printed part. During the build I kept the model open in **Fusion 360** next to the bench, which helped a lot in understanding the order of the parts and the wire routing in such a compact assembly.

## Electronics

Control is handled by a **BIGTREETECH** board with an **LPC1768** microcontroller and **TMC2209** drivers, which are quiet and have their current set in software, paired with a **touchscreen** to run the printer without needing a computer attached.

And yes, the frame got feline approval before the printer was even finished.
