# Giraverse · Landing page

Landing de presentación de **Giraverse** — el directorio de espacios escénicos
de España que conecta artistas, managers y promotores con salas, clubs y
auditorios.

HTML + CSS + JS plano. Sin build, sin dependencias. Se abre y funciona.

## Estructura

```
giraverse-landing/
├── index.html        # Página única (todas las secciones)
├── styles.css        # Sistema de diseño (marca naranja #EA5600 · Outfit)
├── script.js         # Nav móvil, reveal on scroll, waitlist
├── assets/
│   ├── icons/favicon.svg
│   └── img/          # 9 imágenes generadas (fal.ai · FLUX)
└── README.md
```

## Marca

| | |
|---|---|
| Color primario | `#EA5600` (naranja) |
| CTA "Contacta" | `#17C964` (verde éxito) |
| Badge "Recomendado" | `#1F6FEB` (azul) |
| Texto | `#11181C` (azul-negro) |
| Tipografía | **Outfit** (Google Fonts) |

Heredada de la identidad del ecosistema Artiverse + análisis de la app real.

## Ver en local

Cualquier servidor estático. Por ejemplo:

```bash
cd giraverse-landing
python -m http.server 5500
# abre http://localhost:5500
```

## Imágenes

Las 9 fotos de `assets/img/` se generaron con IA (fal.ai / FLUX) porque no
había material fotográfico de Giraverse. Para sustituir cualquiera por una foto
real, basta con reemplazar el archivo manteniendo el mismo nombre
(`hero-bg.jpg`, `venue-detail.jpg`, `city-madrid.jpg`, …). El wiring está en el
bloque "WIRING DE IMÁGENES" de `styles.css`.

## Pendiente antes de producción

- [ ] **Conectar la lista de espera** (`#waitlistForm` en `script.js`) a un
      backend real: Formspree, Brevo o el endpoint de Giraverse. Ahora guarda en
      `localStorage` como demo.
- [ ] Sustituir el logo "Ministerio de Cultura" en texto por el logo oficial
      (`logo-ministerio-cultura.png` existe en `artiverse-svelte/static/`).
- [ ] Añadir `assets/img/og-cover.jpg` para la previsualización en redes (Open Graph).
- [ ] Enlazar las redes sociales reales en el footer.
- [ ] Rellenar las páginas legales (aviso legal, privacidad, cookies).

## Desplegar

Al ser estático, sirve cualquier hosting:

- **Vercel / Netlify**: arrastrar la carpeta o conectar el repo. Sin config.
- **GitHub Pages**: push a `main` y activar Pages sobre la raíz.
- **IONOS** (mismo hosting que Artiverse): subir por FTP a la carpeta pública.
