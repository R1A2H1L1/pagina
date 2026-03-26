# Next.js Starter

Un frontend base limpio y listo para deploy en Vercel.

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **CSS Modules**

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Deploy en Vercel

1. Sube este proyecto a un repositorio de GitHub / GitLab / Bitbucket
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa el repositorio — Vercel detecta Next.js automáticamente
4. Haz clic en **Deploy**

¡Listo! ✓

## Estructura

```
├── app/
│   ├── layout.tsx      # Layout raíz (fuentes, metadatos)
│   ├── page.tsx        # Página principal
│   ├── page.module.css # Estilos con scope local
│   └── globals.css     # Variables CSS globales
├── next.config.js
└── package.json
```
