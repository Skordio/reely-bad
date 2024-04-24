# Reely Bad

This is the website for Group 2's Meta Puzzle for the CSCI 539 final project. 

## Project Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

pnpm for package management, install on windows using:

```sh
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

node.js for running the project, install on windows using:

```sh
choco install nodejs
```

if you have chocolatey installed, otherwise download from the [node.js website](https://nodejs.org/en/download)

## Project Development

once your environment is set up, run this command to install the project dependencies:

```sh
pnpm install
```

### Run local development server (that auto-updates when changes to code are made)

```sh
pnpm run dev
```

once you have this running, you can connect to localhost:5173 in your browser to see the website and test changes.

### Build, this must be run before deploying

```sh
pnpm run build
```

### Deploy to GitHub Pages

```sh
pnpm run deploy
```