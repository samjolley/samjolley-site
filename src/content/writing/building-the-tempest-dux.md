---
title: "Building the Tempest Dux: a split keyboard with an integrated trackball"
description: A build log for a wireless split keyboard on the dux ergonomic lineage, with a custom KiCad PCB, an integrated PMW3610 trackball, 3D-printed plates, and ZMK firmware bring-up.
pubDate: 2026-07-11
draft: false
keywords:
  - custom split keyboard build
  - zmk trackball
  - diy keyboard pcb
  - zmk firmware
---

I wanted one device that did two things at once: a split ergonomic layout for typing, and a pointing device built into the same unit so my hands never leave home position to reach a mouse. Boards that pair the two exist, but none in the split low-profile layout I wanted, so I built my own.

I did not start from a blank page, and I want to be clear about that. The ergonomics come from the dux family, Rae-Dux and Architeuthis Dux, with visual and naming cues from [thrly's Tempest](https://github.com/thrly/tempest). The firmware base is [Manna Harbour's Miryoku](https://github.com/manna-harbour/miryoku) for ZMK, and the trackball driver is [badjeff's PMW3610 module](https://github.com/badjeff/zmk-pmw3610-driver). What I designed on top of that lineage is the part this log is about: a custom PCB, the trackball integration, the plates and case, and the ZMK firmware that makes it one keyboard.

## The PCB

The board starts in Ergogen and finishes in KiCad. Ergogen turns a declarative layout config into a footprint-populated board, which is the right tool when the whole point is a hand-shaped outline with column stagger and splay that you will revise many times. KiCad then handles the routing and the physical checks.

Two decisions shaped the early boards. The first was making the design reversible, one board file that serves both hands by flipping. That is elegant on paper and it was a mistake in practice, which I will come back to. The second was where the trackball goes. The PMW3610 sensor sits on the right half, and its socket, the bearings, and the printed housing all have to share space with the switches and the nice!nano v2 controller without colliding. Placing that cluster and routing around it was most of the interesting work on the board.

The matrix itself was the least glamorous and most necessary part: a diode per switch, each wired to the correct row and column and checked pad by pad. There is no schematic in this flow. The Ergogen config is the source of truth, so the real check is that config and then the board's design-rule check, which I ran until it passed with no errors and no unconnected items.

## Mechanical iteration

The plates and case are 3D printed, and this is where most of the learning happened, because the physical world does not care what the model says.

The trackball housing was the hardest fit. The sensor, the bearings, and the ball have real clearances, and the case screws thread directly into printed plastic, so a tolerance that looks fine on screen binds or rattles in the hand. Each print revealed one specific problem, and each revision fixed that one thing. One later board version even carried a stray full-circle arc in the bottom-plate outline, left over from re-filleting the trackball cutout, which I fixed by not re-filleting that outline again. The mounting holes taught the same lesson in miniature: I had specified them at exactly 2.0 mm, which is zero clearance for a 2 mm screw, so they bind. The next spin gives them room.

## Firmware and bring-up

The keyboard runs ZMK. That covers the split-half link, the keymap, and the display, and it is also where integrating the trackball got interesting.

When the fabricated boards arrived, the matrix worked, the nice!view display was blank, and the trackball was dead. None of those were the failure they first looked like. The display was blank even though the SPI bus was sending data every cycle, because the signals were not reaching the glass through the reversible-footprint solder jumpers. The trackball produced no driver output at all, which made it a build and device-tree problem before it was a hardware one: the module had to be in the firmware build, the sensor's pins mapped to the real board netlist rather than a stale table I had written earlier, and one specific gotcha handled. The sensor's chip-select landed on a pin that defaults to NFC duty, so the firmware has to be told to use it as a plain GPIO. The interrupt line also needed a pull-up in firmware, because the resistor for it is unpopulated on the breakout.

Writing the pin map down wrong once, and then trusting the copper instead of my own notes, was the moment the project stopped being a drawing and started being a real thing I had to debug.

## What I would do differently

The reversible board was the big one. Serving both hands from one flipping design meant every through-hole pin carried a stub net that connected only through an SMD jumper you had to bridge by hand, twenty-eight of them per board, before anything worked. It is clever and it is not worth it. Version 0.7 drops the reversible architecture entirely and simply has a left file and a right file.

The rest of the next-spin list is small and concrete, which is the sign of a design converging: give the mounting holes real clearance, add labeled test points on the handful of signals you actually end up probing, put a ground pour on both copper faces, and add an optional footprint for the pull-up the trackball wants so it does not have to live in firmware.

Most of the learning was in the parts that did not work the first time. That is the honest case for building something end to end instead of buying it. You find out which of your decisions were right only when the board is in your hand and the display is still blank.

The board and Ergogen source are on GitHub: [samjolley/tempest_dux](https://github.com/samjolley/tempest_dux).
