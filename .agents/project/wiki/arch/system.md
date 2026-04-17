# System Architecture

## Component Layering
1. **Base Classes**: `CamelotBaseInput`, `CamelotBaseSelect` (Reactive logic).
2. **Mixins/Controllers**: State handling (Focus, Hover, Validation).
3. **Styles**: Material, Scifi, Cupertino, Soft (Visual wrappers).

## Interaction Model
- Components use `host` listeners for event delegation.
- Focus states are managed via standard `:focus-within` and custom state properties.
- Sci-Fi HUD integration via dedicated CSS classes and SVG filters.

## Theme System
- Dynamic theme injection into the document head.
- CSS variables mapping for all semantic tokens.
