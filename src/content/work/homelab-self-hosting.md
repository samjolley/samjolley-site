---
title: Self-Hosted Infrastructure
summary: A local-first home infrastructure built on segmented networking, an Unraid server, private remote access over Tailscale, and a reverse proxy for internal services.
order: 5
---

I run a local-first home infrastructure rather than renting the same capabilities from cloud services. The point is control, privacy, and understanding the systems I depend on. This entry stays at a public-safe altitude and includes no addresses, topology, or service inventory.

## Why Self-Host

Owning the infrastructure means the data stays local, the systems are understandable end to end, and there is no third party in the middle of things I use every day. It is also the most honest way to build operational skill: when it breaks, I am the one who fixes it.

## Networking

The network is segmented so that different classes of device live in different zones, with traffic between them allowed only where it should be. Segmentation here does the same job it does in any security design: it limits how far a problem can spread.

## Storage And Services

An Unraid server provides bulk storage and runs the self-hosted services. Treating storage and services as one managed system keeps backups, capacity, and uptime in a single place I can reason about.

## Private Remote Access

Remote access runs over Tailscale, a private mesh network, rather than exposing services to the public internet. Services stay reachable to me from anywhere without opening the front door to everyone. A reverse proxy sits in front of internal services to give them clean, consistent names and TLS inside the network.

## What It Demonstrates

- networking, segmentation, and private remote access in practice
- server administration, storage management, and self-hosted services
- a local-first, privacy-preserving approach to infrastructure
- comfort operating and recovering the systems I rely on
