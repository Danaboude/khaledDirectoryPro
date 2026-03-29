# Design System Specification: High-End Editorial Directory

## 1. Overview & Creative North Star: "The Digital Curator"
The objective of this design system is to move the professional directory away from the "database" aesthetic and toward a "curated editorial" experience. We are not just listing businesses; we are presenting them as premium entities.

**Creative North Star: The Digital Curator**
This system treats the UI as a series of sophisticated, layered galleries. By utilizing intentional asymmetry, overlapping elements, and generous white space, we break the rigid "box-and-grid" monotony. The interface should feel like a high-end physical magazine—authoritative yet breathable—where depth is defined by light and material rather than lines and strokes.

---

## 2. Colors & Materiality
We lean into a palette of deep prestige and organic growth. The interaction between the deep navies and vibrant emeralds creates a sense of established trust paired with modern momentum.

### The "No-Line" Rule
**Standard 1px solid borders are strictly prohibited for sectioning.** 
Boundaries must be defined through tonal shifts. A section intended to stand out should utilize `surface-container-low` (#f2f4f6) sitting on a `surface` (#f7f9fb) background. Use the `0.175rem` (0.5) or `0.35rem` (1) spacing tokens to create "gutters" of color that act as natural dividers.

### Surface Hierarchy & Nesting
Think of the UI as stacked sheets of frosted glass.
*   **Base:** `surface` (#f7f9fb)
*   **Secondary Content:** `surface-container-low` (#f2f4f6)
*   **Elevated Cards:** `surface-container-lowest` (#ffffff)
*   **Active/Hero Elements:** `surface-container-high` (#e6e8ea)

### The Glass & Gradient Rule
To achieve a "signature" feel, floating navigation or overlay modals must use **Glassmorphism**. Apply a background blur (12px–20px) to `surface-container-lowest` at 80% opacity. 
*   **CTAs:** Use a subtle linear gradient from `primary` (#001148) to `on_primary_container` (#6d8cff) at a 135-degree angle to provide a "lit-from-within" professional polish.

---

## 3. Typography
The typography strategy balances the geometric modernity of *Plus Jakarta Sans* for high-impact displays with the utilitarian clarity of *Inter* for data-heavy directory listings.

*   **Display & Headlines (Plus Jakarta Sans):** Use `display-lg` to `headline-sm`. For all headlines, apply a letter-spacing of `0.02em` to enhance the "editorial" prestige.
*   **Body & Labels (Inter):** Use `body-lg` down to `label-sm`. These should remain at standard tracking to ensure maximum readability in dense business descriptions.
*   **The Hierarchy Play:** Contrast is our primary tool. Pair a `display-md` headline with a `label-md` uppercase subtitle (using `on_tertiary_container` emerald) to create a clear, high-end visual anchor.

---

## 4. Elevation & Depth
In this design system, depth is a result of **Tonal Layering**, not structural reinforcement.

*   **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f2f4f6) section. This 1-step shift in the neutral scale creates a sophisticated, soft lift that feels integrated rather than floating.
*   **Ambient Shadows:** If an element must float (e.g., a "Featured Business" card), use a shadow with a blur radius of `48px` and an opacity of `4%`. Use a tinted shadow—specifically a desaturated version of `primary` (#001148)—to mimic natural light passing through high-end optics.
*   **The Ghost Border Fallback:** If accessibility requirements demand a container edge, use the **Ghost Border**: `outline-variant` (#c4c6d0) at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `on_primary_container`), `DEFAULT` (1rem) radius, and `headline-sm` font size for large CTAs.
*   **Secondary:** `surface-container-lowest` fill with a "Ghost Border."
*   **Tertiary:** No background; use `on_secondary_container` text with an icon.

### Cards (The "Directory Card")
*   **Radius:** `md` (1.5rem) or `lg` (2rem).
*   **Structure:** No dividers. Separate the business title from the description using a `4` (1.4rem) spacing unit. 
*   **Hover State:** Transition from `surface-container-lowest` to a subtle `6%` scale increase with a soft Ambient Shadow.

### Chips & Badges
*   **Style:** Pill-shaped (`full` radius). 
*   **Colors:** Use `tertiary_fixed` (#6ffbbe) with `on_tertiary_fixed` (#002113) for "Open Now" or "Growth" indicators. Use `primary_fixed` (#dde1ff) for "Verified" status.

### Input Fields
*   **Execution:** Large `DEFAULT` (1rem) radius. Use `surface-container-low` as the fill. On focus, transition the background to `surface-container-lowest` and add a "Ghost Border" in `surface_tint`.

### Editorial Lists
*   **Prohibition:** No horizontal rules/lines.
*   **Separation:** Use `8` (2.75rem) vertical white space between list items. Use a small `tertiary` (#001c10) accent dot or high-end icon to lead the eye.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Place a hero image offset from the grid to create visual interest.
*   **Do** lean heavily on the `20` (7rem) and `24` (8.5rem) spacing tokens for top-level section padding.
*   **Do** use "vibrant emerald" (`on_tertiary_container`) sparingly as a "success" or "growth" highlight to guide the user’s eye.

### Don’t:
*   **Don’t** use black (#000000). Use `primary` (#001148) for high-contrast text to maintain the "Navy" brand soul.
*   **Don’t** use standard "Drop Shadows." If it looks like a 2010 Photoshop effect, it is too heavy.
*   **Don’t** crowd the screen. If you feel a section needs a divider line, it actually needs more white space (try the `10` or `12` spacing tokens).
*   **Don’t** use a border radius smaller than `DEFAULT` (16px) for any container larger than a button. Square corners break the "Glassmorphism" softness.