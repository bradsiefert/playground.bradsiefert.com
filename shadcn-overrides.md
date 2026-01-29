# shadcn Component Overrides

This file documents all modifications made to shadcn-nuxt components. These changes are necessary for compatibility or custom requirements and should be considered when upgrading components or onboarding new developers.

## Purpose

When using shadcn-nuxt components, sometimes modifications are needed to:
- Fix compatibility issues with Vue/Nuxt versions
- Resolve TypeScript compilation errors
- Add custom functionality

This file tracks these modifications so they can be reapplied after component updates.

## Modified Components

### Button (`app/components/ui/button/Button.vue`)

**Date:** 2026-01-28

**Issue:** Vue 3.5+ compiler cannot resolve `PrimitiveProps` type from `reka-ui` at compile time, causing a "Failed to resolve extends base type" error.

**Solution:**
- Added `/* @vue-ignore */` comment before `PrimitiveProps` in the Props interface
- Explicitly defined `as?: string` and `asChild?: boolean` props (these won't be inferred when using `@vue-ignore`)

**Changes:**
```vue
interface Props extends /* @vue-ignore */ PrimitiveProps {
  as?: string
  asChild?: boolean
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  asChild: false,
})
```

**Reason:** Vue 3.5+ has stricter type checking and cannot resolve external types from packages like `reka-ui` at compile time. The `@vue-ignore` directive tells Vue to skip strict type checking for this extends clause, while still maintaining runtime behavior.

---

## Adding New Overrides

When modifying a shadcn component, add an entry above with:
1. Component name and path
2. Date of modification
3. Issue description
4. Solution applied
5. Code changes (if applicable)
6. Reason for the change
