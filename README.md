# VERTEK — Web corporativa

Sitio del holding industrial Vertek. Construido en **Astro 5**, estático, sin
dependencias de framework y sin JavaScript de cliente más allá de dos scripts
mínimos (menú móvil y revelado al hacer scroll).

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

## Estructura

```
src/
  data/site.js          ← TODO el contenido y la configuración
  styles/global.css     ← sistema de diseño (tokens + utilidades)
  layouts/
    Layout.astro        ← head, SEO, schema.org, header, footer
    Legal.astro         ← plantilla de páginas legales
  components/
    Logo.astro          ← logotipo tipográfico (palabra + regla + descriptor)
    Header.astro        ← navegación sticky con resaltado de sección
    Hero.astro
    Grupo.astro         ← #grupo
    Empresas.astro      ← #empresas (las 7 empresas)
    Capacidades.astro   ← #capacidades
    Sectores.astro      ← #sectores
    Respaldo.astro      ← #respaldo
    Contacto.astro      ← #contacto (formulario)
    Footer.astro
  pages/
    index.astro         ← una sola página con anclas
    aviso-de-privacidad.astro
    404.astro
public/
  favicon.svg
  og.png                ← imagen para redes sociales (1200×630)
  robots.txt
```

**Todo el copy vive en `src/data/site.js`.** Para cambiar un texto, un nombre de
empresa, una URL o un sector, se edita ese archivo y cambia en todo el sitio
(incluidos el footer y el schema.org de Google).

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

El orden y los textos salen de `empresas` en `src/data/site.js`. Apex aparece
sin enlace, con la etiqueta "Sitio próximamente".

## Pendientes antes de publicar

1. **Endpoint del formulario** — `site.formEndpoint` apunta a un placeholder de
   Formspree. Sustituir por el endpoint real (Formspree, Basin, Netlify Forms o
   un handler propio).
2. **Dominios definitivos de Orme y Fyron** — hoy apuntan a
   `orme-psi.vercel.app` y `adriangarza84.github.io/fyron`. Actualizar en
   `empresas` cuando tengan dominio propio.
3. **URL de Apex** — cuando salga el sitio, agregar `href` y cambiar el CTA.
4. **Razón social y domicilio fiscal** — el aviso de privacidad los deja
   señalados como pendientes de confirmar.
5. **Analítica** — no se instaló ninguna. Si se quiere, se agrega en
   `src/layouts/Layout.astro`.

## Nota sobre `og.png`

La imagen para redes se generó a partir del logotipo y el claim del hero. Si
cambia el claim, hay que regenerarla para que no quede desfasada.
