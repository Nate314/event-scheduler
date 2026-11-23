# Event Scheduler

An Angular client (`client/`), a Node/Express API (`server/`) and a MySQL schema (`db/`), with
model classes shared by both sides in `shared-models/`.

## Running with Docker

No local Node or MySQL install is needed. From the repo root:

```
./run.sh          # macOS, Linux, Git Bash
.\run.ps1         # Windows PowerShell
```

The launcher picks a free host port for the client (starting at 8080), writes it to `.env`, runs
`docker compose up --build -d` and prints the URL, for example `Event Scheduler: http://localhost:8080`.
Any arguments are passed to `docker compose`, for example `./run.sh down` or `./run.sh logs -f`.
The launcher is the [compose-launcher](https://github.com/Nate314/compose-launcher) git submodule; the
first run fetches it with `git submodule update --init compose-launcher`. Ports and URLs live in `run.conf`.

The stack has three services:

- `client`: the production Angular build served by unprivileged nginx, which also proxies `/api` to the server.
- `server`: the Express API on port 5000, reachable only inside the compose network.
- `mysql-db`: MySQL 8.4. On the first start it creates the `EventScheduler` schema from `db/ddl.sql` and the
  app user. Data persists in the `mysql-data` volume; remove that volume to start from an empty database.

## Configuration

The server reads its settings from environment variables (see `.env.example`): `DB_USER`, `DB_PASSWORD`,
`JWT_SECRET`, plus the optional `DB_HOST`, `DB_PORT`, `DB_NAME` and `JWT_LIFESPAN_MINUTES`. `docker-compose.yml`
supplies dev-only defaults, so a plain `./run.sh` works without a `.env`. Set real values in `.env` for anything
other than local use. `.env` is git-ignored.

## Tests

Unit tests (Karma and Jasmine in headless Chromium), run in Docker from the repo root:

```
docker run --rm -v "${PWD}:/repo" -v /repo/client/node_modules -w /repo/client node:22-alpine sh -c "apk add -q --no-cache chromium && export CHROME_BIN=/usr/bin/chromium && npm ci && npx ng test --no-watch"
```

End-to-end tests (Playwright) live in `e2e/`, a separate npm project, and run against an already running
stack. Start it with the launcher, then pass the printed URL (from inside Docker the host is `host.docker.internal`):

```
docker run --rm --ipc=host -e BASE_URL=http://host.docker.internal:8080 -v "${PWD}/e2e:/e2e" -v /e2e/node_modules -w /e2e mcr.microsoft.com/playwright:v1.63.0-noble sh -c "npm ci && npx playwright test"
```
