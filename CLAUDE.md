# Chez Mona — Project Instructions

This is a real client project for a beauty salon website.

## Stack

- Nuxt 4
- Vue
- Netlify deployment
- Sanity CMS later
- Fresha for booking

## Current goal

Convert the existing HTML mockup from `docs/chez-mona-maquette.html` into a clean Nuxt website.

## Important rules

- Do not create a backend.
- Do not integrate Sanity yet unless explicitly asked.
- Do not install unnecessary modules.
- Do not modify many unrelated files at once.
- Always explain the plan before changing code.
- Keep the site simple, elegant, responsive and easy to maintain.
- Use reusable components.
- Use semantic HTML.
- Keep SEO in mind.
- Do not invent final client content when information is missing; use clear placeholders.

## Pages planned

- Home
- Les Soins / (prestations)
- À propos
- Contact

## Design direction

Warm, elegant, premium, soft, feminine, beige/sand/brown color palette.

## Typography

Use Google Fonts if needed.

Suggested pairings:

- Titles: Cormorant Garamond, Playfair Display, Lora, or Libre Baskerville
- Body text: Inter, Lato, Nunito Sans, or Source Sans 3

## Booking

Booking will be handled with Fresha. For now, use placeholder links with `#reservation`.

## CMS later

Prestations, prices, descriptions, durations, photos and contact information should later come from Sanity CMS.

For now, use local data files so the site can be built statically first.

## Development approach

Work step by step.

Recommended order:

1. Analyze the HTML mockup.
2. Create the basic Nuxt structure.
3. Create reusable components.
4. Build the homepage.
5. Build the prestations page.
6. Build the contact page.
7. Improve responsive design.
8. Add SEO basics.
9. Deploy preview on Netlify.
10. Integrate Sanity only when the static version is clean.