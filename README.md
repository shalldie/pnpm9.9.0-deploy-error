# pnpm9.9.0-deploy-error

pnpm@9.9.0 when run pnpm deploy, the pkgs in node_modules get lost.

## my projects layout

```
.
├── README.md
├── package.json
├── packages
│   └── app
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## .npmrc

```bash
registry=https://registry.npmjs.org/
shamefully-hoist=true
shared-workspace-lockfile=false
```

## pnpm@9.9.0 run deploy get the error node_modules

deploy steps with `9.8.0` and `9.9.0`:

```bash
rm -rf output && \
pnpm --filter=app --prod deploy ./output/app

cd output/app
node index.js

# pnpm@9.8.0 works well,
# 9.9.0 fail, can't find any pkgs in node_modules
```

I found `9.9.0` only has the .pnpm in node_modules, the pkgs are lost.

```bash
ls -a output/app/node_modules

# 9.8.0
.  ..  .modules.yaml  .pnpm  mini-tpl

# 9.9.0
.  ..  .pnpm
```
