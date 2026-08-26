# Microservices Explainer

Schematică interactivă Auth — login browser + revoke acces.

## Live (GitHub Pages)

După deploy: **https://natyni.github.io/microservices-explainer/**

## Local

- **Hub:** `index.html` — listă servicii
- **Auth:** `auth.html` — schematica interactivă

## Conținut Auth

- **Login** — Super Admin → theMarketerID → sesiune activă
- **Revoke acces** — auth portal → deconectare forțată din Super Admin
- **Logout app / complet** — theMarketer Logout vs Complete Logout
- Navigare: butoane Pas 1/4…, ← →, Auto ▶, link share (`#revoke/3`). Cutiile din diagramă sunt doar vizuale.

## GitHub Pages setup

1. Repo: `microservices-explainer` pe contul personal GitHub
2. **Settings → Pages →** Branch `main`, folder `/ (root)`
3. Fișierul `index.html` de la rădăcină = homepage
