# JCI Biratnagar

This site uses Firebase Authentication, Cloud Firestore, and Cloud Storage. It has no application backend or MongoDB dependency.

## Firebase setup

1. Create a Firebase project and register a Web app.
2. Enable **Email/Password** in Firebase Authentication.
3. Copy `.env.example` to `.env` and provide the six `VITE_FIREBASE_*` values from the Firebase Web app configuration.
4. Deploy [firestore.rules](firestore.rules) and [storage.rules](storage.rules) in the Firebase console (or with the Firebase CLI).
5. Create the first admin in Firebase Authentication, then add `admins/{uid}` in Firestore with `email`, `role: "admin"`, and `active: true`. Use the Authentication user's UID as the document ID.

Public pages fall back to the bundled sample content until Firebase is configured. Admin access is unavailable until the Firebase configuration and an active admin record exist.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
