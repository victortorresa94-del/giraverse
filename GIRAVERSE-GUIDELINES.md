# Giraverse — Guidelines & Contexto de marca

> Documento maestro. Cualquier sesión (IA o persona) que trabaje en Giraverse
> debería leer esto primero para contextualizarse: qué es, qué vende, cómo es su
> negocio, su esencia y su identidad visual. Consolida el análisis funcional de
> la app publicada + la guía de marca oficial (por Júlia Martín) + lo extraído
> de los repositorios.

---

## 1. Qué es Giraverse

**Giraverse es una plataforma SaaS del sector de la música en vivo en España.**
Un **marketplace / directorio de espacios escénicos** (salas de conciertos,
clubs, auditorios) que conecta a los tres actores del directo en un único
ecosistema digital:

- **Salas y espacios** — que quieren llenar su agenda de conciertos.
- **Agentes de booking** — que programan y cierran fechas.
- **Managers de artistas / promotores / tourmanagers** — que planifican giras.

Nace para **modernizar y digitalizar** una industria históricamente dispersa
(datos de salas fragmentados en PDFs, emails y webs), **simplificar procesos**,
**generar oportunidades reales** y **facilitar colaboraciones** entre quienes
tienen el escenario y quienes lo necesitan.

> Naming: **Gira** (tour/concierto) + **-verse** (universo) = "el universo de
> las giras / de las salas en vivo".

**El nombre `giraverse-api` del backend es hoy la base de Artiverse.** Giraverse
fue la **antesala publicada** (directorio de espacios); Artiverse es la
evolución/plataforma mayor. Ver §8.

---

## 2. Propuesta de valor · qué vende · negocio

### Doble propuesta de valor
- **Para artistas / managers / promotores:** centralizan el descubrimiento de
  espacios de España con los datos que importan —**aforo, ubicación, contacto de
  reservas, rider técnico**— eliminando la fricción de planificar una gira.
- **Para salas:** ganan **visibilidad** ante una audiencia cualificada (músicos,
  managers y agentes que programan de verdad) y **captan contactos de booking**
  directos. Copy oficial de la plataforma: *"Gana visibilidad. Cierra más conciertos."*

### Modelo de negocio
SaaS / marketplace con **monetización por visibilidad**: espacios promocionados
o marcados como **"Recomendado"** a cambio de pago. Recorrido potencial hacia
comisión por cierre de contratos o suscripción premium para salas.

### Diferenciador estratégico
Cuenta con el **respaldo del Ministerio de Cultura (Gobierno de España)** —
legitimidad, red institucional y puerta a espacios públicos (auditorios y
teatros municipales). Pocos competidores pueden replicarlo.

---

## 3. Público objetivo (personas)

- **Primario:** managers, tourmanagers y artistas planificando giras nacionales
  que necesitan identificar venues por ciudad, aforo y capacidad técnica.
- **Secundario:** programadores y responsables de booking de salas que buscan
  visibilidad y recibir propuestas de conciertos.

---

## 4. Esencia, valores y personalidad

- **Esencia:** infraestructura digital que impulsa una industria musical más
  **conectada, ágil y contemporánea**.
- **Valores:** cambio, modernidad, innovación, eficiencia, transparencia,
  conexión.
- **Personalidad de marca:** moderna, sólida, tecnológica, cercana pero
  profesional. "Music tech" con carácter, no corporativa ni fría.
- **Tono verbal:** idioma real del sector (gira, bolo, aforo, rider, sala),
  frases cortas, energía, español de España.

---

## 5. La plataforma (módulos)

Basado en el análisis funcional de la app publicada:

| Módulo | Qué hace |
|---|---|
| **Home / Discovery** | "Recomendados" (carrusel) + "Espacios por población" (Madrid, Valencia, Barcelona, Ourense). |
| **Descubre espacios** (`/discover`) | Listado del catálogo con buscador (nombre/aforo/población) y filtros. Cards con ciudad, aforo (pax), foto, badge "Recomendado", y "like"/favoritos. |
| **Ficha de espacio** (`/venue/:id`) | Foto, descripción, **aforo**, ubicación (tags país+ciudad), contactos (responsable de reservas, production manager, email), redes. CTAs: **"Ver rider de sala"** (PDF) y **"Contacta"**. La sala autogestiona su ficha. |
| **Promociona** (`/promote`) | Landing B2B hacia salas. Hero oscuro de concierto: *"Gana visibilidad. Cierra más conciertos."* |
| **Comunidad** (`/community`) | Blog + Foro y Noticias. |
| **Mensajes privados** | Chat interno entre usuarios (promotor ↔ sala). |
| **Notificaciones + perfil** | Auth activo (Google OAuth + email). |

**Estado:** fase de lanzamiento / MVP avanzado. Catálogo real pero pequeño
(~16 espacios, todos en España), foro aún vacío, sin transaccionalidad (no hay
reservas/pagos online todavía).

**Stack de la app:** front SPA con **HeroUI + Tailwind**; backend NestJS +
PostgreSQL (Drizzle) + Redis + Stripe + Socket.io + AWS S3 (repo `giraverse-api`).

---

## 6. Posicionamiento competitivo

Nicho muy específico: mercado español de música en vivo, **salas medianas y
pequeñas**. No es ticketera (Ticketmaster, See Tickets) ni agregador de eventos
para público final (Bandsintown, Songkick). Competencia europea cercana:
Gigstarter, GigSaloon, Sonicbids — pero ninguna con foco local español tan
definido. Ventana de oportunidad antes de que un actor internacional lo cubra.

---

## 7. Identidad visual (guía de marca oficial)

**Diseñada por Júlia Martín (juliamartin.co).**

### Colores
| Rol | Nombre | HEX |
|---|---|---|
| Primario | **Electric Orange** | `#EA5600` |
| Degradado (0%) | Gradient Orange | `#FFAA00` |
| Degradado (29%) | | `#FF7B2E` |
| Degradado (61%) | | `#EA5600` |
| Degradado (100%) | | `#CB0202` |
| Fondo claro | **Sun White** | `#FDF6F6` |
| Oscuro / texto | **Dust Black** | `#171617` |

Regla: representar la marca **siempre** con Orange · Sun White · Dust Black, en
versión clara u oscura. El naranja es el acento; no saturar toda la pieza.

### Tipografía
- **Outfit** (Google Fonts) en todas sus variantes para **web, textos y vídeos**.
- El **logotype "GIRAVERSE"** usa una tipografía custom (modificada) exclusiva
  del logo: **no** usarla como fuente en otros contextos. Siempre en MAYÚSCULAS.

### Logo
- **Logomark:** una **"G"** moderna y contundente (esencia digital, solidez).
- **Símbolo alternativo:** una **nota musical reinterpretada como pin de
  localización** — conecta música + mapa. Pensado para favicon, mapas e
  interfaces digitales.
- **Logotype:** wordmark "GIRAVERSE" en mayúsculas.
- **Lockup:** nota-pin + wordmark.
- Mantener **clear space** mínimo alrededor (relativo a la altura del logo).

### Favicon
Variantes oficiales: la **"G"** o la **nota-pin**, en Orange sólido, Orange
degradado, Dust Black o Sun White.

### Archivos de marca
En `Material Giraverse/` (fuente original de Dani):
- `Diseño de marca y guía de estilo - GIRAVERSE.pdf` — guía completa.
- `logos 1/` (SVG) y `logos 2/` (PNG): `G black`, `G gradient`, `G orange claro`,
  `G white fondo orange`, `Giraverse LOGO` (wordmark), `Nota claro` (nota-pin).

Versiones web optimizadas en `assets/brand/` (usadas por la landing):
`mark-pin.png`, `wordmark-dark.png`, `wordmark-white.png`; favicon en
`favicon.ico` + `assets/icons/`.

---

## 8. Relación con Artiverse (ecosistema)

- **Giraverse** = antesala publicada, enfocada en el **directorio de espacios**.
- **Artiverse** = evolución/plataforma mayor (perfiles de artista, agencias,
  descubrimiento, chat, suscripciones). Backend en `giraverse-api` (hoy "Artiverse
  API"), front en `artiverse-svelte`, producción en `app.artiverse.es` (IONOS).
- Dominio de Giraverse: **`giraverse.es`** (IONOS). La **app** vive en el
  subdominio `app.giraverse.es` → `/artiverse-app`. La **landing** (este repo) se
  sirve en la **raíz `giraverse.es`**.

---

## 9. Esta landing (repo)

HTML + CSS + JS plano, sin build. Estructura: hero → respaldo → qué es → doble
público → cómo funciona → ficha de sala → ciudades → tipos de espacio →
comunidad → waitlist → FAQ → footer. Marca oficial aplicada (Orange/Sun White/
Dust Black, Outfit, logo real). Imágenes de ambiente generadas con IA (fal.ai)
por ausencia de fotografía propia; sustituibles por material real.

Deploy: IONOS webhosting (subir a la carpeta raíz de `giraverse.es`). Repo:
`github.com/victortorresa94-del/giraverse`.
