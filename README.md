# Josafe.com Portfolio · Nuxt 3

Portfolio personal modern per a un desenvolupador full stack i enginyer de sistemes AI.

## Stack tècnic

- **Frontend:** Nuxt 3 (Vue 3 + SSR)
- **Styling:** TailwindCSS
- **Animacions:** `@vueuse/motion` (equivalent a Framer Motion per Vue)
- **Backend opcional:** Laravel 11 API (per sincronitzar projectes propis)

## Estructura principal

- `pages/index.vue`: composició de seccions i SEO.
- `sections/`: Hero, About, Projects i Contact.
- `components/ProjectCard.vue`: card reutilitzable amb animació.
- `data/projects.json`: projectes manuals destacats.
- `server/api/github-repos.get.ts`: proxy SSR a GitHub API.
- `composables/useGithubRepos.ts`: transformació de repositoris GitHub a format card.

## Projectes inicials inclosos

- AGC Padel Academy · https://agcpadelacademy.com/
- Chatbot Multiagent System · https://github.com/Josafe/TFM-Sistema-Chatbot-Multiagent

## Configuració ràpida

```bash
npm install
npm run dev
```

## Com connectar GitHub API

1. La ruta SSR `server/api/github-repos.get.ts` consulta `https://api.github.com/users/Josafe/repos`.
2. Pots definir `GITHUB_TOKEN` a variables d'entorn per augmentar límits de rate limit.
3. El composable `useGithubRepos.ts` converteix els repositoris en targetes de projecte.
4. `ProjectsSection.vue` barreja projectes manuals (`data/projects.json`) amb els automàtics de GitHub.

## Escalabilitat

- Per afegir projectes manuals, només cal editar `data/projects.json`.
- Per backend Laravel 11, crea endpoints propis i substitueix/combina la càrrega del composable amb `$fetch` cap a la teva API.
