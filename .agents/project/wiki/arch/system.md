# Architecture & Systems

System design and core architectures.

## Theme System
- Location: `src/styles/themes.ts`, `src/components/theme/`.
- Multi-mode: Material 3, Cupertino, Soft UI, Sci-fi HUD.
- **Light/Dark Support**: Global switchable.
- **Config-driven**: Uses `BASE_CONFIG` for precise restoration of fonts/spacing/radii.

## Sci-fi HUD Engine
- Dynamic background mixing.
- Auto-contrast adjustment.
- Glow intensity control.

## Base Classes
- `CamelotBaseElement`: Unified base for all components.
- Path: `src/components/base/`.
