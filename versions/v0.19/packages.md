# Packages

uē-tôo is a modular library consisting of multiple packages. Each package can be used independently or combined to build rich canvas applications.

## Core Packages

### [@ue-too/board](/board/)

Transform HTML canvas into a near-infinite canvas with panning, zooming, and rotation capabilities. Provides utility functions that simplify the complex mathematics required for infinite canvas operations. Compatible with multiple canvas frameworks (vanilla, Pixi.js, Fabric.js, Konva).

**Key Features:**
- Pan, zoom, and rotate functionality
- Comprehensive input support (touch, trackpad, keyboard, mouse)
- Framework-agnostic design
- Modular components for custom implementations

[View Documentation →](/board/)

---

### [@ue-too/animate](/animate/)

A simple animation library for HTML canvas applications. Provides tools for creating smooth animations and transitions.

[View Documentation →](/animate/)

---

### [@ue-too/being](/being/)

A library for building finite state machines. Helps manage complex state transitions and event handling in your applications.

**Key Features:**
- Template-based state definitions
- Event reactions and guards
- Context management
- Type-safe state machines

[View Documentation →](/being/)

---

## Utility Packages

### [@ue-too/curve](/curve/)

A Bezier curve library for working with curves in canvas applications. Useful for creating smooth paths, rail systems, and complex shapes.

[View Documentation →](/curve/)

---

### [@ue-too/border](/border/)

Utilities for working with geographic coordinates and projections. Includes functions for great circle calculations, rhumb lines, and map projections.

[View Documentation →](/border/)

---

### [@ue-too/math](/math/)

Basic mathematical utilities for uē-tôo. Provides common math functions used across other packages.

[View Documentation →](/math/)

---

## Experimental Packages

### [@ue-too/dynamics](/dynamics/)

A 2D physics engine with collision detection, rigid bodies, and constraints.

> **⚠️ Warning:** This package is experimental. Please do not use in production.

[View Documentation →](/dynamics/)

---

### [@ue-too/ecs](/ecs/)

An experimental implementation of the Entity Component System (ECS) architecture.

> **⚠️ Warning:** This package is experimental. Please do not use in production.

[View Documentation →](/ecs/)

---

## Getting Started

To get started with uē-tôo, check out the [board package](/board/) for infinite canvas functionality, or explore other packages based on your needs. Each package is designed to work independently, so you can use only what you need.

