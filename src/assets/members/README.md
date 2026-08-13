# Member photos

This folder is the source copy of the member photos. The website serves the matching files from `public/images/members`.

When replacing a photo, upload the replacement to **both** `src/assets/members` and `public/images/members` using the same filename. The current website will then load it from `/images/members`.

Use these filenames:

- `president.jpg`
- `executive-vice-president.jpg`
- `vice-president-1.jpg`
- `vice-president-2.jpg`
- `secretary.jpg`
- `treasurer.jpg`

Use square images where possible (at least 600 × 600 px). After uploading, update `src/data/leadership.ts` to import each image and replace the placeholder image for the corresponding member.
