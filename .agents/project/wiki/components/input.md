# Component: Input

## Logic
- Extends `CamelotBaseInput`.
- Uses `InputController` for validation and state.

## Styles
- **Material**: Follows Material Design 3 guidelines.
- **Scifi**: HUD-style transparent background with neon borders.
- **Cupertino**: iOS-style rounded inputs.
- **Soft**: Neumorphic/Glassmorphic look.

## Props
- `value`: string
- `placeholder`: string
- `disabled`: boolean
- `error`: string | boolean

## Events
- `camelot-change`: Dispatched on value change.
- `camelot-input`: Dispatched on key stroke.
