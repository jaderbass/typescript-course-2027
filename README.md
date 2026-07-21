# TypeScript for Beginners

## NPM testen

Nach der Installation von NodeJS zunächst testen, ob NodeJS und NPM richtig installiert wurde.

```powershell
npm -v
```

### Windows Execution Policy verhindert das Ausführen dieses Befehls

Falls Windows das Ausführen des Befehls verhindert muss die Execution Policy geändert werden. Dazu in der PowerShell mit Admin-Rechten folgendes ausführen:

```powershell
Get-ExecutionPolicy -List
```

Das führt i.d.R. zu folgender Ausgabe:

```powershell
      Scope     ExecutionPolicy
----- ---------------
MachinePolicy   Undefined
UserPolicy      Undefined
Process         Undefined
CurrentUser     Undefined
LocalMachine    Undefined
```

Mindestens `CurrentUser` sollte auf `RemoteSigned` stehen. Dazu folgenden Befehl ausführen:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Danach noch einmal mit `Get-ExecutionPolicy -List` prüfen. Die Ausgabe sollte dann so aussehen:

```powershell
      Scope     ExecutionPolicy
----- ---------------
MachinePolicy   Undefined
UserPolicy      Undefined
Process         Undefined
CurrentUser     RemoteSigned
LocalMachine    Undefined
```

## Install Software

```powershell
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

```powershell
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

```git
git remote add origin git@github.com:USER/REPO.git
git fetch origin
git merge origin/main --allow-unrelated-histories
```

Danach:

```git
git push -u origin main

```

## Remote-Repo wechseln

```git
git remote -v
git remote set-url origin git@github.com:NEU/REPO.git

```
Prüfen:

```git
git remote -v
```

Falls das alte Repo komplett raus soll:

```git
git remote remove origin
git remote add origin git@github.com:NEU/REPO.git

```

Danach puschen:

```git
git push -u origin main
```
