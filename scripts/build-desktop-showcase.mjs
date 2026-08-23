import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const screenshotsDir = path.join(root, "docs", "screenshots");

const entries = [
  {
    key: "library",
    file: "library.png",
    title: "Biblioteca",
    subtitle: "Tu colección, a tu manera.",
    descriptionLine1:
      "Biblioteca local y remota, continuación de lectura",
    descriptionLine2:
      "y organización de obras en una misma experiencia.",
  },
  {
    key: "explore",
    file: "explore.png",
    title: "Explorar",
    subtitle: "Descubre nuevas lecturas.",
    descriptionLine1:
      "Instala fuentes, busca contenido y empieza",
    descriptionLine2:
      "a construir tu catálogo personal.",
  },
  {
    key: "content",
    file: "content.png",
    title: "Ficha de obra",
    subtitle: "Toda la información en contexto.",
    descriptionLine1:
      "Sinopsis, capítulos y detalles reunidos",
    descriptionLine2:
      "en una ficha pensada para navegar y leer.",
  },
  {
    key: "extensions",
    file: "extensions.png",
    title: "Fuentes instalables",
    subtitle: "Amplía tu biblioteca.",
    descriptionLine1:
      "Explora, instala y administra fuentes",
    descriptionLine2:
      "desde una interfaz preparada para crecer.",
  },
  {
    key: "catalog",
    file: "catalog.png",
    title: "Catálogo",
    subtitle: "Exploración visual.",
    descriptionLine1:
      "Portadas, listados y navegación cómoda",
    descriptionLine2:
      "para encontrar rápidamente tu próxima lectura.",
  },
  {
    key: "reader",
    file: "reader.png",
    title: "Lector",
    subtitle: "La experiencia central.",
    descriptionLine1:
      "Lectura enfocada, cómoda y estética",
    descriptionLine2:
      "con progreso y distintos modos de lectura.",
  },
];

const outputPath = path.join(
  screenshotsDir,
  "desktop-showcase.svg",
);

function asDataUri(filePath, mimeType) {
  const buffer = fs.readFileSync(filePath);

  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

for (const entry of entries) {
  const fullPath = path.join(
    screenshotsDir,
    entry.file,
  );

  if (!fs.existsSync(fullPath)) {
    throw new Error(
      `No se encontró el archivo: ${fullPath}`,
    );
  }

  entry.uri = asDataUri(
    fullPath,
    "image/png",
  );
}

const duration = 36;
const step = duration / entries.length;

const slides = entries
  .map((entry, index) => {
    // Con delays negativos "invertidos" para que el orden visible sea:
    // 1 → 2 → 3 → 4 → 5 → 6
    const delay =
      index === 0 ? 0 : duration - index * step;

    return `
    <g
      class="slide slide-${index + 1}"
      style="animation-delay: -${delay}s;"
    >
      <!-- Marco de la captura -->
      <rect
        x="110"
        y="146"
        width="870"
        height="540"
        rx="28"
        ry="28"
        fill="#080b12"
        stroke="#ffffff"
        stroke-opacity="0.06"
      />

      <rect
        x="132"
        y="168"
        width="826"
        height="496"
        rx="22"
        ry="22"
        fill="#0b0f17"
      />

      <!-- Captura real -->
      <image
        href="${entry.uri}"
        x="132"
        y="168"
        width="826"
        height="496"
        preserveAspectRatio="xMidYMid meet"
        clip-path="url(#shotClip)"
      />

      <!-- Información -->
      <text
        x="1058"
        y="190"
        fill="#a855f7"
        font-size="16"
        font-weight="700"
        letter-spacing="2"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        ${String(index + 1).padStart(2, "0")} / ${String(entries.length).padStart(2, "0")}
      </text>

      <text
        x="1058"
        y="246"
        fill="#ffffff"
        font-size="46"
        font-weight="760"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        ${entry.title}
      </text>

      <text
        x="1058"
        y="290"
        fill="#e9d5ff"
        font-size="24"
        font-weight="540"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        ${entry.subtitle}
      </text>

      <line
        x1="1058"
        y1="318"
        x2="1400"
        y2="318"
        stroke="#a855f7"
        stroke-opacity="0.30"
        stroke-width="2"
      />

      <text
        x="1058"
        y="372"
        fill="#d4d4d8"
        font-size="18"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        <tspan
          x="1058"
          dy="0"
        >
          ${entry.descriptionLine1}
        </tspan>

        <tspan
          x="1058"
          dy="30"
        >
          ${entry.descriptionLine2}
        </tspan>
      </text>

      <g transform="translate(1058 460)">
        <rect
          x="0"
          y="0"
          width="244"
          height="46"
          rx="16"
          fill="#16111f"
          stroke="#a855f7"
          stroke-opacity="0.22"
        />

        <text
          x="122"
          y="29"
          text-anchor="middle"
          fill="#ffffff"
          font-size="16"
          font-weight="650"
          font-family="Inter, Segoe UI, Arial, sans-serif"
        >
          Experiencia de escritorio
        </text>
      </g>
    </g>`;
  })
  .join("");

const dots = entries
  .map((entry, index) => {
    const delay =
      index === 0 ? 0 : duration - index * step;

    return `
    <circle
      class="dot dot-${index + 1}"
      style="animation-delay: -${delay}s;"
      cx="${705 + index * 38}"
      cy="724"
      r="10"
    />`;
  })
  .join("");

const svg = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1600"
  height="760"
  viewBox="0 0 1600 760"
  role="img"
  aria-labelledby="title desc"
>
  <title id="title">
    SugoiYomi Desktop Showcase
  </title>

  <desc id="desc">
    Carrusel animado de capturas de SugoiYomi Desktop.
  </desc>

  <defs>
    <linearGradient
      id="bg"
      x1="0"
      y1="0"
      x2="1"
      y2="1"
    >
      <stop
        offset="0%"
        stop-color="#06070d"
      />

      <stop
        offset="45%"
        stop-color="#150a24"
      />

      <stop
        offset="100%"
        stop-color="#091019"
      />
    </linearGradient>

    <radialGradient
      id="glow"
      cx="50%"
      cy="42%"
      r="60%"
    >
      <stop
        offset="0%"
        stop-color="#a855f7"
        stop-opacity="0.24"
      />

      <stop
        offset="100%"
        stop-color="#a855f7"
        stop-opacity="0"
      />
    </radialGradient>

    <clipPath
      id="canvasClip"
      clipPathUnits="userSpaceOnUse"
    >
      <rect
        x="0.5"
        y="0.5"
        width="1599"
        height="759"
        rx="30"
        ry="30"
      />
    </clipPath>

    <clipPath
      id="shotClip"
      clipPathUnits="userSpaceOnUse"
    >
      <rect
        x="132"
        y="168"
        width="826"
        height="496"
        rx="22"
        ry="22"
      />
    </clipPath>

    <style>
      <![CDATA[
        .slide {
          opacity: 0;
          animation:
            slideCycle ${duration}s infinite;
        }

        .dot {
          fill: #2b2437;
          animation:
            dotCycle ${duration}s infinite;
        }

        @keyframes slideCycle {
          0%,
          13% {
            opacity: 1;
          }

          16%,
          100% {
            opacity: 0;
          }
        }

        @keyframes dotCycle {
          0%,
          13% {
            fill: #a855f7;
          }

          16%,
          100% {
            fill: #2b2437;
          }
        }
      ]]>
    </style>
  </defs>

  <g clip-path="url(#canvasClip)">
    <!-- Fondo -->
    <rect
      x="0"
      y="0"
      width="1600"
      height="760"
      fill="url(#bg)"
    />

    <rect
      x="0"
      y="0"
      width="1600"
      height="760"
      fill="url(#glow)"
    />

    <circle
      cx="1030"
      cy="260"
      r="200"
      fill="#9333ea"
      fill-opacity="0.06"
    />

    <!-- Slides -->
    ${slides}

    <!-- Encabezado -->
    <g>
      <text
        x="120"
        y="72"
        fill="#ffffff"
        font-size="42"
        font-weight="760"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Capturas de escritorio
      </text>

      <text
        x="120"
        y="108"
        fill="#a1a1aa"
        font-size="18"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Una vista animada por las pantallas principales de SugoiYomi Desktop.
      </text>
    </g>

    <!-- Indicadores -->
    <g>
      ${dots}
    </g>

    <!-- Borde -->
    <rect
      x="1"
      y="1"
      width="1598"
      height="758"
      rx="29"
      ry="29"
      fill="none"
      stroke="#ffffff"
      stroke-opacity="0.08"
      stroke-width="2"
      vector-effect="non-scaling-stroke"
    />
  </g>
</svg>
`.trim();

fs.writeFileSync(
  outputPath,
  svg,
  "utf8",
);

console.log(
  `Generado: ${outputPath}`,
);