# VERTEK — Web corporativa

Sitio del holding industrial Vertek. Construido en **Astro 5**, estático, sin
dependencias de framework y sin JavaScript de cliente más allá de dos scripts
mínimos (menú móvil y revelado al hacer scroll).

**Bilingüe:** español como idioma principal en la raíz, inglés bajo `/en/`. Las
dos versiones se generan estáticamente; el cambio de idioma es un enlace, no
JavaScript ni un traductor automático.

## Arrancar

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run dev` abre en `http://localhost:4321`. El build genera `dist/` listo
para publicar en Vercel, Netlify, Cloudflare Pages o cualquier hosting estático.

## Publicación

**Producción:** https://vertek.mx — servida por **Vercel**, conectada al repo.
Cada push a `main` dispara el build (`npm run build`, sin variables) y el
despliegue. No hay `vercel.json`: la configuración vive en el panel de Vercel.

**Vista previa:** https://adriangarza84.github.io/vertek/ — cada push a `main`
dispara además `.github/workflows/deploy.yml`, que compila con
`GITHUB_PAGES=true` y publica en GitHub Pages bajo `/vertek/`.

Los dos destinos salen del mismo código. Los enlaces internos pasan todos por
el helper `ruta()` de `src/data/site.js` y por la tabla de
`src/i18n/config.js`, por eso funcionan en la raíz y bajo un subdirectorio.

## Estructura

```
src/
  data/
    site.js             ← config neutral al idioma + enlaces de las empresas
    contenido.es.js     ← TODO el copy en español
    contenido.en.js     ← TODO el copy en inglés (mismas claves)
    contenido.js        ← une copy + enlaces: contenido('es') | contenido('en')
  i18n/
    config.js           ← idiomas, locales y tabla de rutas por idioma
    ui.js               ← cadenas de interfaz (navegación, formulario, pie)
  styles/global.css     ← sistema de diseño (tokens + utilidades)
  layouts/
    Layout.astro        ← head, SEO, hreflang, schema.org, header, footer
    Legal.astro         ← plantilla de páginas legales
  paginas/
    Portada.astro       ← portada compartida por los dos idiomas
  components/
    Logo.astro          ← logotipo tipográfico (palabra + regla + descriptor)
    Header.astro        ← navegación sticky + selector de idioma
    Hero.astro
    Grupo.astro         ← #grupo
    Empresas.astro      ← #empresas (las 7 empresas)
    Capacidades.astro   ← #capacidades
    Sectores.astro      ← #sectores
    Respaldo.astro      ← #respaldo
    Contacto.astro      ← #contacto (formulario)
    Footer.astro
  pages/
    index.astro         ← español, en la raíz
    aviso-de-privacidad.astro
    404.astro           ← bilingüe (el host sirve este mismo para todo)
    en/
      index.astro       ← inglés, bajo /en/
      privacy-notice.astro
public/
  favicon.svg
  og.png                ← imagen para redes sociales (1200×630)
  robots.txt
```

## Dónde se edita el contenido

| Qué | Dónde |
| --- | --- |
| Copy de las secciones | `src/data/contenido.es.js` y `contenido.en.js` |
| Navegación, botones, formulario, pie | `src/i18n/ui.js` |
| Correo, ciudad, endpoint del formulario | `src/data/site.js` |
| URL de una empresa | `enlacesEmpresas` en `src/data/site.js` (una sola vez) |
| Rutas y slugs por idioma | `rutas` en `src/i18n/config.js` |
| Texto legal | `src/pages/aviso-de-privacidad.astro` y `en/privacy-notice.astro` |

Reglas que conviene no romper:

- **`contenido.es.js` y `contenido.en.js` son gemelos.** Misma forma, mismas
  claves. Si añades una clave en uno, añádela en el otro o la versión que falte
  se queda sin ese texto.
- **Las URL de las empresas viven una sola vez**, en `enlacesEmpresas`,
  emparejadas por `id`. Así cambiar un dominio no deja el otro idioma
  apuntando al sitio viejo.
- **Los `id` de sección no se traducen** (`#empresas`, `#contacto`…). Por eso
  el ancla sigue funcionando al cambiar de idioma.
- **Ningún componente escribe texto visible directamente**: todo pasa por
  `contenido()` o por `traducir()`.

## Dirección de diseño

Paleta clara y arquitectónica, monocromática, tomada del logotipo: blancos,
grises concreto y grafito `#33373C`. Sin color de acento — la jerarquía se
construye con contraste, reglas de un píxel y espacio. Retículas de plano
técnico como textura de fondo y la geometría de la "V" como motivo del hero.

- Tipografías: **Archivo** (títulos), **Inter** (texto), **IBM Plex Mono**
  (etiquetas técnicas). Las mismas familias que Apex, para coherencia de grupo.
- Esquinas rectas en todos los elementos (sin border-radius).
- Accesibilidad: contraste AA, foco visible, `skip link`, jerarquía de
  encabezados correcta y respeto a `prefers-reduced-motion`.

## Contenido: las 7 empresas

Macero · Valltor · Apex · Tecnocranes · Orme · Fyron · Subestaciones Juárez.

El orden y los textos salen de `empresas` en `src/data/contenido.es.js` y
`contenido.en.js`; el enlace, de `enlacesEmpresas` en `src/data/site.js`. Las
siete tienen sitio; si alguna se queda sin web, basta con quitar su entrada de
`enlacesEmpresas` y la tarjeta pasa sola al estado "próximamente".

## Pendientes antes de publicar

1. **Endpoint del formulario** — `site.formEndpoint` apunta a un placeholder de
   Formspree. Sustituir por el endpoint real (Formspree, Basin, Netlify Forms o
   un handler propio).
2. **Dominio definitivo de Apex y Orme** — hoy apuntan a
   `apex-blond-seven.vercel.app` y `orme-psi.vercel.app`. Actualizar en
   `enlacesEmpresas` (`src/data/site.js`) cuando tengan dominio propio; con eso
   cambian los dos idiomas a la vez. Fyron ya está en `fyron.mx`.
3. **Razón social y domicilio fiscal** — el aviso de privacidad los deja
   señalados como pendientes de confirmar.
4. **Analítica** — no se instaló ninguna. Si se quiere, se agrega en
   `src/layouts/Layout.astro`.

## Nota sobre `og.png`

La imagen para redes se generó a partir del logotipo y el claim del hero. Si
cambia el claim, hay que regenerarla para que no quede desfasada.
