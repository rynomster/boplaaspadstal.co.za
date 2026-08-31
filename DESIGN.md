# Boplaas Padstal — Design System

This document is the visual and interaction source of truth for the Boplaas Padstal website. New pages, sections and components must feel like part of the same warm, editorial farm-stall identity.

## 1. Brand direction

**Visual thesis:** A refined Eastern Cape farm stall—honest, warm and rooted in country life, presented with the confidence of an editorial food and travel brand.

The design should feel:

- Local, welcoming and family-friendly
- Premium without becoming polished or corporate
- Rustic through texture, photography and colour—not decorative clichés
- Spacious, calm and easy to use on a phone
- Bilingual in spirit, using short Afrikaans phrases alongside clear English copy

Avoid generic country-shop styling, fake timber textures, gingham patterns, gradients, excessive shadows, pill-shaped controls and overly playful typography.

## 2. Core principles

1. **The real place is the hero.** Use genuine Boplaas photography before stock or generated imagery.
2. **Editorial scale creates character.** Large serif headings and generous whitespace carry the visual identity.
3. **Utility stays simple.** Navigation, labels, details and buttons use a clean sans-serif face.
4. **Use colour in broad, confident fields.** Cream, paper, oxblood and muted green should define sections rather than decorate individual elements.
5. **Keep actions obvious.** Directions, telephone and WhatsApp are the primary visitor actions.
6. **Square edges feel honest.** Cards and buttons use sharp corners unless the shape has a specific meaning, such as the circular local stamp.

## 3. Colour palette

The CSS custom properties in `app/globals.css` are canonical.

| Token | Value | Usage |
| --- | --- | --- |
| `--cream` | `#f5efe3` | Main warm page background |
| `--paper` | `#fffaf0` | Cards, light buttons and elevated content |
| `--ink` | `#1d241e` | Primary text, footer and dark buttons |
| `--muted` | `#697067` | Secondary copy and supporting details |
| `--oxblood` | `#6f2422` | Feature sections and primary brand accent |
| `--red` | `#9a3530` | Labels, numbering and small emphasis |
| `--line` | `rgba(29, 36, 30, 0.18)` | Dividers and restrained borders |

Supporting surface: muted farm green `#d9dfd0` is reserved for the visit/directions section.

### Colour rules

- Maintain accessible text contrast; use white or `--paper` on oxblood and ink.
- Prefer thin borders and tonal separation over drop shadows.
- Do not introduce bright accent colours without updating this document.
- Use opacity for secondary text on dark surfaces rather than adding new greys.
- Do not use gradients as decorative surfaces. The hero image overlay is the exception because it protects text legibility.

## 4. Typography

### Display type

Use `Georgia, "Times New Roman", serif` for `h1`, `h2` and `h3`.

- Weight: 500
- Tight tracking: approximately `-0.045em` to `-0.065em` on large headings
- Compact line height: approximately `0.82` to `0.98`
- Italics may be used for one short contrasting line or phrase
- Sentence case is preferred

### Utility and body type

Use `Arial, Helvetica, sans-serif` for navigation, buttons, body copy and labels.

- Body text: 16–21px depending on prominence
- Body line height: 1.6–1.75
- Eyebrows and utility labels: 11–13px, bold, uppercase, with `0.06em` to `0.22em` tracking
- Avoid long passages in uppercase

### Voice and language

- Write plainly and warmly; avoid marketing jargon.
- Short Afrikaans hooks may lead into clear English explanations.
- Keep headings brief enough to retain their editorial scale on mobile.
- Use proper typographic apostrophes and punctuation.

## 5. Layout and spacing

### Page structure

- Narrative, single-page flow
- Full-width colour and image sections
- Maximum content width is controlled through fluid horizontal padding rather than a visible boxed container
- Desktop sections may use asymmetrical two-column compositions

### Spacing rhythm

Primary section padding:

```css
padding: clamp(82px, 10vw, 150px) clamp(22px, 8vw, 120px);
```

Use a loose 8px rhythm for component spacing, with common gaps of 18, 24, 30, 36, 44, 50, 60 and 70px. Large empty areas are intentional; do not compress them merely to fit more content above the fold.

### Alignment

- Headings and long-form copy are left-aligned.
- Small labels may sit opposite large headings to create editorial tension.
- Cards align to shared top, bottom and divider lines.
- Avoid centre-aligning whole sections; reserve centred alignment for a contained motif or image.

## 6. Components

### Header

- Transparent over the hero image
- White logo block provides clarity against photography
- Fine translucent bottom border
- Desktop navigation is centred; mobile navigation may be hidden until a genuine menu is required
- WhatsApp remains the principal header action

### Hero

- Real storefront photography fills the viewport
- Minimum height: 790px desktop, 720px tablet/mobile
- Dark directional overlay protects copy while leaving the setting visible
- Oversized serif headline with one indented italic line
- One solid primary button plus one restrained text link
- Optional circular local stamp may be used on wider screens only

### Buttons

- Rectangular with no border radius
- Minimum height: 52px
- Uppercase, bold sans-serif label with modest tracking
- Icon and text are horizontally aligned
- Hover motion is subtle: no more than a 2px upward shift
- Use `button-light` on dark/photo backgrounds and `button-dark` on light backgrounds

### Editorial labels

- Small uppercase text paired with a two-digit section number
- Use red/oxblood numbering on light surfaces and pale red on dark surfaces
- Labels orient the reader; they should not compete with the heading

### Offering cards

- Three columns on desktop, stacked on smaller screens
- Divided by thin lines rather than individual boxes or shadows
- Number and line icon at the top
- Large serif Afrikaans title, small uppercase English translation, then concise copy
- Lucide icons use approximately 1.5px stroke weight

### Event feature

- Oxblood field creates a clear campaign moment
- Copy and poster use an asymmetrical split layout
- Poster may use a slight 2-degree rotation and a deep, restrained shadow to feel physically placed
- Date and contact details are structured with icons and dividers

### Visit card

- Paper surface on muted green section
- Address, opening-hours note and Maps action remain immediately scannable
- On mobile, actions become full-width and stack below the details

### Footer

- Ink background, quiet secondary text and compact uppercase utility styling
- Logo stays on a white field
- Keep the footer functional and sparse

## 7. Photography and imagery

- Prefer genuine Boplaas premises, products, people and events.
- Images should feel naturally lit, warm and documentary rather than heavily staged.
- Crop for the subject and layout; do not add decorative frames.
- Use WebP where practical and provide meaningful alternative text.
- Event posters may retain their original visual identity inside the Boplaas layout.
- Do not simulate farm objects, scenery or textures with CSS artwork.

## 8. Icons

- Use `lucide-react` throughout.
- Default stroke width: 1.5–2px.
- Icons support a label; they should rarely stand alone.
- Do not mix filled, cartoon or multi-colour icon sets.

## 9. Interaction and motion

- Motion must be subtle and purposeful.
- Standard transition duration: 200ms.
- Links may change opacity; buttons may translate upward by 2px.
- Preserve native scrolling and anchor navigation.
- Respect `prefers-reduced-motion` and remove non-essential transitions.
- Avoid scroll-jacking, parallax, autoplay media and ornamental entrance animations.

## 10. Responsive behaviour

### Desktop: above 900px

- Full navigation is visible.
- Multi-column editorial layouts are encouraged.
- Hero stamp and large display scale may be used.

### Tablet: 561–900px

- Hide desktop navigation while retaining logo and WhatsApp.
- Collapse major content grids to a single column.
- Keep typography large, but reduce decorative elements and extreme offsets.

### Mobile: up to 560px

- Horizontal page padding: 22px.
- Section vertical padding: approximately 74px.
- Hero actions, visit actions, contact links and footer content stack vertically.
- Remove the hero stamp.
- Maintain at least 44px touch targets and prevent horizontal overflow.

Test all future additions at approximately 375px, 768px and 1440px widths.

## 11. Accessibility

- Use semantic sections, headings, navigation, links and figures.
- Preserve a logical heading hierarchy.
- Provide visible keyboard focus states for every interactive element.
- Decorative icons use `aria-hidden="true"`.
- Links that open new tabs include `rel="noreferrer"`.
- Do not put essential information only inside an image or poster; repeat key event details as HTML.
- Body copy should remain at least 16px wherever practical.

## 12. Content and implementation guardrails

- Do not publish unverified opening hours, prices, contact details or event information.
- Keep the primary visitor flow: **understand Boplaas → see the offering → get directions or make contact**.
- Reuse the existing CSS variables and component patterns before creating new ones.
- New visual tokens must be added to this file and `app/globals.css` together.
- Do not add a UI library or alternate icon set for ordinary site sections.
- Preserve the static-site build and GitHub Pages compatibility.

## 13. Pre-release checklist

- [ ] Real business details have been confirmed.
- [ ] Headings retain the serif/sans hierarchy.
- [ ] New colours use documented tokens.
- [ ] Mobile layout works at 375px without overflow.
- [ ] Telephone, WhatsApp and Maps links work.
- [ ] Images have descriptive alternative text and efficient formats.
- [ ] Keyboard focus is visible.
- [ ] Reduced-motion preferences are respected.
- [ ] Production build passes.
- [ ] Expired event content has been removed or updated.
