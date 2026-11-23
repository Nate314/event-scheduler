# Client

Angular 22 app. See the repo root README for running the whole stack and the tests in Docker.

- `npm start`: dev server at `http://localhost:4200/` (`ng serve`). API calls go to the relative `/api/v1`, which
  only the Docker stack's nginx proxies, so use the stack for anything that talks to the server.
- `npm run build`: production build into `dist/client/browser`.
- `npm test`: unit tests with Karma (`ng test`); needs Chrome or Chromium (`CHROME_BIN`).
