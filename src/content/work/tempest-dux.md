---
title: Tempest Dux
summary: A wireless split keyboard with a trackball on each half, a modified PCB, 3D-printed parts, and ZMK firmware.
order: 2
---

I wanted a low-profile split keyboard with trackballs built in, so I could type and move the pointer without reaching for a separate mouse. Tempest Dux is what I've been building to make that happen.

## What went into it

The ergonomics come from the dux family, Rae-Dux and Architeuthis Dux, and the PCB started from [thrly's Tempest](https://github.com/thrly/tempest). I used Ergogen to define the key positions and generate the starting board, then moved into KiCad for routing and checks.

The current build uses 3D-printed plates in a layered stack with a TPU gasket. The keyboard runs ZMK, with [Manna Harbour's Miryoku](https://github.com/manna-harbour/miryoku) providing the keymap structure and Hands Down Gold as the alpha layer. The trackball driver is [badjeff's PMW3610 module](https://github.com/badjeff/zmk-pmw3610-driver).

## Where it's at

Both halves are typing and both trackballs are working. I still need to add the left display.

It wasn't as seamless and plug 'n play as I was hoping, but I learned a ton! I'm working on the next iteration, including dedicated socket headers for the trackball and display, clearer silkscreen labels, and better clearance around the trackballs. I'll probably panelize the boards so each side is more or less mirrored but intentionally designed.

[Read the build story](/writing/building-the-tempest-dux/) for the assembly, troubleshooting, and lessons behind those changes.

Earlier project history is on GitHub at [samjolley/tempest_dux](https://github.com/samjolley/tempest_dux).
