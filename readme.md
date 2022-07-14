An experiment where there can be one shared "eslint package" that can be used by other packages without having to configure or install anything related to eslint.

How it works:
- `fragment` installs `garn` as a dependency
- garn has eslint and eslintrc configuration
- in fragment we call the garn eslint with the current cwd. 
- Eslint is run from `garn/node_modules` but is checking files in `fragment/`

Quick start:
- `npm ci` in every folder
- `cd fragment && npm run lint`
