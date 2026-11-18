<!-- CONTRIBUTING.md -->
# Cómo contribuir
## Ramas (Git Flow)
- Nunca se trabaja en `main` ni en `develop` (están protegidas).
- Cada cambio va en `feature/nombre`, creada desde `develop`.
- Las versiones se preparan en `release/x.y.z`.
## Commits
`feat:`, `fix:`, `docs:`, `ci:`, `chore:` + descripción corta.
## Pull requests
1. PR hacia `develop` usando la plantilla.
2. Enlazar la Issue con `Closes #n`.
3. El CI tiene que salir en verde y otra persona revisa.
## Código
Cada función documentada con JSDoc y `npm test` en verde antes de subir.