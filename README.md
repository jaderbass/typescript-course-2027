# TypeScript for Beginners

## Install Software

```bash
npm
npm install -g typescript
npm install -g lite-server
```

## TypeScript VSCode

Documentation: https://code.visualstudio.com/docs/typescript/typescript-compiling

## Folders Setup

- index.html
- script.ts
- package.json
- tsconfig.json

```bash
npm init
npm install
tsc -init
```

## `tsconfig` anpassen

Für den Kurs die minimalen Einstellungen für die `tsconfig.json` übernehmen:

```json
{
  "compilerOptions": {
    "module": "es2020",
    "target": "es2020",
    "strict": true
  },
  "include": ["**/*.ts"],
  "exclude": [".vscode","node_modules"]
}
```

## Remote-Repo übernehmen und dessen Stand ziehen

Wenn das Remote bereits Inhalte hat (README, CI, etc.):

```bash
git remote add origin git@github.com:USER/REPO.git
git fetch origin
git merge origin/main --allow-unrelated-histories
```

Danach:

```bash
git push -u origin main

```

## Remote-Repo wechseln

```bash
git remote -v
git remote set-url origin git@github.com:NEU/REPO.git

```
Prüfen:

```bash
git remote -v
```

Falls das alte Repo komplett raus soll:

```bash
git remote remove origin
git remote add origin git@github.com:NEU/REPO.git

```

Danach puschen:

```bash
git push -u origin main
```
