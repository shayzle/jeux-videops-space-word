# SpaceWord 🚀

> A retro JavaScript word game set in space — forked from [Figur8/js13k-spaceWord](https://github.com/Figur8/js13k-spaceWord) as part of the **Jeux VidéOps** project at Epitech Web@cadémie Paris.

[Live Website Here !](https://jeuvideopsbyrs.netlify.app)

---

## About

SpaceWord is a browser-based game originally built for the [js13kGames 2021](https://js13kgames.com/) competition, where the theme was **"space"** and the total artefact size had to stay under 13 KB.

This fork is part of the **Jeux VidéOps** school project, focused on setting up a CI/CD pipeline using GitHub Actions — not on rewriting the game itself. The goal is to automate quality checks, testing, and deployment so every code change is validated before it ships.

---

## Tech stack

| Layer | Technology |
|---|---|
| Game | Vanilla JavaScript, HTML, CSS |
| CI/CD | GitHub Actions |
| Linter | ESLint (Google JavaScript Style Guide) |
| Unit tests | Vitest / Jest |
| Functional tests | Playwright |
| Deployment | GitHub Pages |

---

## Getting started

### Prerequisites

- Node.js >= 16
- npm

### Install dependencies

```bash
npm install
```

### Run locally

Open `index.html` directly in your browser, or use a local server:

```bash
npx serve .
```

---

## CI/CD pipeline

The GitHub Actions workflow runs automatically on every push and pull request targeting `main`, and can also be triggered manually from the Actions tab.

### What the pipeline does

1. **Install** — sets up Node.js and installs dependencies via `npm ci`
2. **Lint** — checks code style against the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) using ESLint
3. **Unit tests** — runs the unit test suite and reports results
4. **Functional tests** — runs browser-based tests with Playwright
5. **Audit** — runs `npm audit` to flag known vulnerabilities in dependencies
6. **Deploy** — publishes the game to GitHub Pages on a successful pipeline on `main`

### Trigger conditions

| Event | Runs pipeline |
|---|---|
| Push on any branch | yes |
| Pull request targeting `main` | yes |
| Manual dispatch | yes |

---

## Tests

### Unit tests provided by the project brief

| Function | Expected |
|---|---|
| `getRandomInt(-42, 42) < 43` | `true` |
| `getRandomInt(42, 42)` | `42` |
| `rectIntersect(1,1,2,1,4,1,1,2)` | `false` |
| `rectIntersect(1,1,5,2,4,1,1,2)` | `true` |
| `circleIntersect(3,2,1,6,1,1.5)` | `false` |
| `circleIntersect(3,2,1,3,-2,4)` | `true` |
| `timeToString(123456789)` | `"17:36:78"` |
| `timeToString("toto")` | `"NaN:NaN:NaN"` |

At least 5 additional unit tests and 3 functional tests are written as part of this project.

### Run tests

```bash
# Unit tests
npm test

# Functional tests
npm run test:e2e
```

---

## Security

This project follows DevSecOps practices:

- `npm audit` runs on every pipeline to catch dependency vulnerabilities early
- No tokens, passwords, or API keys are committed to the repository — credentials are injected via GitHub Secrets

---

## Project context

This repo is part of **Jeux VidéOps**, a Epitech Web@cadémie project built around the DevOps principle: **automate more to work less, and ship more reliably**.

Each team member acts as both Developer and Operator, and must be able to reproduce the full pipeline independently.

---

## Original game

SpaceWord was created by [Figur8](https://github.com/Figur8) for js13kGames 2021.  
Original repo: https://github.com/Figur8/js13k-spaceWord

---

## License

This fork inherits the license from the original repository. See the original repo for details.
