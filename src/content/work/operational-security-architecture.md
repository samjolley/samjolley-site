---
title: Operational Security Architecture
summary: How I approach monitoring, network separation, incident response, and automation when setting up a system.
order: 3
---

When I'm setting up a system, I want to know what can talk to what, how I'll notice a problem, and what happens if something gets compromised. Those decisions affect how much trouble one failure can cause.

A few things I focus on:

- Monitoring that helps me figure out what needs attention, with logs available when I need to dig further.
- Network separation that limits what a compromised device can reach.
- A response plan I can follow when I'm tired and something's broken.
- Automation with clear limits, a way to undo changes, and enough logging to figure out what happened.

If a change could cause a lot of trouble or be hard to undo, I want someone to review it before it runs.

[Read more about my approach](/writing/operational-security-as-architecture/).

<!-- No public artifacts. Do not add private infrastructure diagrams, addresses, or environment details. -->
