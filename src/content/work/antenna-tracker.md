---
title: Automatic Antenna Tracker
summary: A config-driven antenna tracker that keeps a directional antenna pointed at an aircraft using live telemetry, for long-range RC and drone FPV.
order: 4
---

The automatic antenna tracker keeps a high-gain directional antenna pointed at an aircraft as it flies. A directional antenna reaches much farther than an omnidirectional one, but only while it is aimed at the target. The tracker closes that gap by steering the antenna in real time from the aircraft's telemetry.

## The Problem

Directional antennas trade coverage for range. Point one at the aircraft and the usable link distance goes up significantly. Point it slightly wrong and the signal drops. Doing that by hand while flying is not practical, so the antenna has to aim itself.

## How It Works

The tracker reads the aircraft's position from its telemetry stream, compares it to the ground station's known location, and computes the bearing and elevation to the aircraft. A servo gimbal then drives the antenna to that heading and keeps updating as the aircraft moves.

## Tuning Is The Real Work

A model on paper is not enough. Servos, the physical gimbal, and the home reference all introduce error, so the build carries calibration: home position and heading reference, servo travel and centering, and smoothing so the antenna tracks steadily instead of jittering on every telemetry update. The configuration went through several revisions as I tightened pointing precision.

## What It Demonstrates

- turning live telemetry into real-time physical control
- servo and gimbal integration with calibration for real-world error
- iterative, config-driven tuning toward a measurable goal (pointing accuracy)
- practical RF understanding applied to a range problem
