---
title: Tempest Dux
summary: A custom wireless split keyboard combining PCB design, 3D-printed mechanical iteration, ZMK firmware, and an integrated trackball.
order: 2
---

Tempest Dux is a wireless split keyboard I built on the dux ergonomic lineage (Rae-Dux and Architeuthis Dux), adding a custom PCB and an integrated trackball. It exists because no off-the-shelf board matched the split ergonomics and a built-in pointing device I wanted in one unit. The project spans PCB layout, firmware, and a lot of physical iteration.

## Why I Built It

I wanted a single device that combined a split ergonomic layout with an integrated trackball, so my hands could stay in one place for both typing and pointing. That combination, in the exact form factor I wanted, was not something I could buy. Building it was also a way to work through a full hardware project: layout, PCB, enclosure, and firmware, rather than just one slice of it.

## PCB Design

The board is a custom PCB, laid out with Ergogen and finished in KiCad. The work here was the unglamorous part that decides whether everything else functions: switch matrix layout, controller and trackball placement, power and wireless considerations, and routing that stays sane on a hand-shaped outline. The design went through several revisions as I corrected footprints, spacing, and placement choices that only became obvious once parts were in hand.

## Mechanical Iteration

The case and plate are 3D printed, and this is where most of the learning happened. Early prints failed in instructive ways: tolerances that were too tight, mounting points that flexed, and clearances that did not account for the trackball assembly. Each revision fixed a specific problem the previous one revealed. Printing the parts myself made that loop fast and cheap.

## Firmware

The keyboard runs ZMK, the open-source wireless firmware. That covers the split-half communication, the wireless link, and the keymap. Integrating the trackball meant wiring the pointing device into the firmware so it behaves as a first-class input alongside the keys, not a bolt-on.

## What It Demonstrates

- end-to-end hardware design, from schematic to working device
- PCB layout discipline on a non-trivial board
- iterative mechanical design with rapid 3D-printed prototyping
- embedded firmware work and input-device integration

<!-- TODO: add GitHub repository URL and project photos once Sam selects them. -->
