# Capri Marine — Website Mockup

Static design mockup for the Capri Marine redesign (Lake Wallenpaupack, Lakeville PA). Visual direction is taken from the Safe Harbor inspo: deep navy, light display type, full-bleed lake photography and a full-screen split menu. The structure follows the Digital Growth Assessment deck.

## Pages
- `index.html`: Home (hero, trust strip, brands, featured boats, services, story, reviews, CTA)
- `inventory.html`: Filterable inventory (condition, brand, type, length, search, sort)
- `boat.html?id=…`: Boat detail page with gallery, specs and quote CTA
- `service.html`, `marina.html`, `about.html`, `lake-life.html`, `contact.html`
- `credits.html`: Photo credits (Wikimedia Commons stand-ins)

Also includes a scripted "Ask Capri" AI assistant demo, a mobile call/text quick bar, LocalBusiness and FAQ schema, and Netlify Forms (quote, service, storage, general).

## Deploy on Netlify
Connect this repo in Netlify → *Add new site → Import from Git*. No build command is needed; the publish directory is `.` (set in `netlify.toml`). Form submissions show up under **Forms** in Netlify after the first deploy.

## Before launch
Replace the bracketed `[placeholders]` (founding story, team, hours, dry dock rates), the sample reviews, and the stand-in photos with real Capri Marine content. Inventory data lives in `assets/js/inventory-data.js`.
