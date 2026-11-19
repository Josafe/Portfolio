# Josafe.dev Portfolio · Nuxt 3

Portfolio personal modern per a un desenvolupador full stack i enginyer de sistemes AI.

Web: https://www.josafe.dev

## Stack tècnic

- **Frontend:** Nuxt 3 (Vue 3 + SSR)
- **Styling:** TailwindCSS
- **Animacions:** `@vueuse/motion` (equivalent a Framer Motion per Vue)
- **Backend opcional:** Laravel 11 API (per sincronitzar projectes propis)

## Estructura principal

- `pages/index.vue`: composició de seccions i SEO.
- `sections/`: Hero, About, Projects i Contact.
- `components/ProjectCard.vue`: targeta de projecte (estat, categoria, context, notes, tecnologies i enllaços).
- `data/projects.ts`: font única i tipada dels projectes seleccionats manualment, amb textos en CA/ES/EN.
- `types/project.ts`: model de dades dels projectes i valors vàlids d'estat, categoria i context.
- `composables/useProjects.ts`: projectes ordenats (destacats primer i després per `order`).
- `server/api/github-repos.get.ts`: proxy a l'API de GitHub; actualment no l'utilitza cap pàgina.

## Projectes

La pàgina de projectes només mostra projectes seleccionats manualment a `data/projects.ts`. No hi ha cap importació automàtica de repositoris: cada projecte enllaça el seu repositori públic (si en té) i la pàgina enllaça el perfil general de GitHub.

## Configuració ràpida

```bash
npm install
npm run dev
```

## Com afegir o actualitzar un projecte

1. Afegeix o edita l'entrada a `data/projects.ts` amb un `slug` únic.
2. Escriu `title`, `description` i, si cal, `notes` en català, castellà i anglès.
3. Indica `status` (`live`, `in-development`, `experimental`) i `context` (`personal`, `academic`) només si són reals i confirmats; si no, omet-los.
4. Completa `category`, `technologies`, `links` (`live`, `repository`), `featured` i `order`.
5. Si necessites un estat, una categoria o un context nous, afegeix-los a `types/project.ts` i les seves etiquetes a `i18n/locales/{ca,es,en}.json` (`projects.status`, `projects.category`, `projects.context`).
6. No afegeixis projectes de mostra ni dates, clients o mètriques que no siguin reals.

## Escalabilitat

- Per afegir projectes, segueix els passos de la secció anterior a `data/projects.ts`.
- Per backend Laravel 11, crea endpoints propis i substitueix/combina la càrrega del composable amb `$fetch` cap a la teva API.
