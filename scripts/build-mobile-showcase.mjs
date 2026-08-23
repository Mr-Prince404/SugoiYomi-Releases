import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "..");
const screenshotsDir = path.join(root, "docs", "screenshots");

const androidPath = path.join(screenshotsDir, "android.png");
const iosPath = path.join(screenshotsDir, "iOS.png");
const iconPath = path.join(screenshotsDir, "icon.png");
const outputPath = path.join(screenshotsDir, "mobile-showcase.svg");

function asDataUri(filePath, mimeType) {
  const buffer = fs.readFileSync(filePath);
  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

for (const filePath of [androidPath, iosPath, iconPath]) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`No se encontró el archivo: ${filePath}`);
  }
}

const android = asDataUri(androidPath, "image/png");
const ios = asDataUri(iosPath, "image/png");
const icon = asDataUri(iconPath, "image/png");

const svg = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1600"
  height="900"
  viewBox="0 0 1600 900"
  role="img"
  aria-labelledby="title description"
>
  <title id="title">SugoiYomi Mobile para Android e iOS</title>

  <desc id="description">
    Vista previa de SugoiYomi Mobile ejecutándose en Android e iOS.
  </desc>

  <defs>
    <!-- ====================================================== -->
    <!-- FONDO -->
    <!-- ====================================================== -->

    <linearGradient
      id="background"
      x1="0"
      y1="0"
      x2="1"
      y2="1"
    >
      <stop
        offset="0%"
        stop-color="#09070d"
      />

      <stop
        offset="45%"
        stop-color="#100b18"
      />

      <stop
        offset="100%"
        stop-color="#080a0f"
      />
    </linearGradient>

    <radialGradient
      id="centerGlow"
      cx="50%"
      cy="44%"
      r="50%"
    >
      <stop
        offset="0%"
        stop-color="#a855f7"
        stop-opacity="0.20"
      />

      <stop
        offset="42%"
        stop-color="#7c3aed"
        stop-opacity="0.08"
      />

      <stop
        offset="100%"
        stop-color="#7c3aed"
        stop-opacity="0"
      />
    </radialGradient>

    <!-- ====================================================== -->
    <!-- BRANDING -->
    <!-- ====================================================== -->

    <linearGradient
      id="brandGradient"
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop
        offset="0%"
        stop-color="#ffffff"
      />

      <stop
        offset="55%"
        stop-color="#e9d5ff"
      />

      <stop
        offset="100%"
        stop-color="#c084fc"
      />
    </linearGradient>

    <!-- ====================================================== -->
    <!-- BORDES DE LOS DISPOSITIVOS -->
    <!-- ====================================================== -->

    <linearGradient
      id="androidBorder"
      x1="0"
      y1="0"
      x2="1"
      y2="1"
    >
      <stop
        offset="0%"
        stop-color="#3DDC84"
        stop-opacity="0.60"
      />

      <stop
        offset="100%"
        stop-color="#a855f7"
        stop-opacity="0.22"
      />
    </linearGradient>

    <linearGradient
      id="iosBorder"
      x1="0"
      y1="0"
      x2="1"
      y2="1"
    >
      <stop
        offset="0%"
        stop-color="#ffffff"
        stop-opacity="0.55"
      />

      <stop
        offset="100%"
        stop-color="#a855f7"
        stop-opacity="0.28"
      />
    </linearGradient>

    <!-- ====================================================== -->
    <!-- FILTROS -->
    <!-- ====================================================== -->

    <filter
      id="phoneShadow"
      x="-30%"
      y="-30%"
      width="160%"
      height="180%"
    >
      <feDropShadow
        dx="0"
        dy="24"
        stdDeviation="22"
        flood-color="#000000"
        flood-opacity="0.58"
      />
    </filter>

    <filter
      id="softGlow"
      x="-80%"
      y="-80%"
      width="260%"
      height="260%"
    >
      <feGaussianBlur
        stdDeviation="35"
      />
    </filter>

    <filter
      id="iconShadow"
      x="-100%"
      y="-100%"
      width="300%"
      height="300%"
    >
      <feDropShadow
        dx="0"
        dy="10"
        stdDeviation="18"
        flood-color="#a855f7"
        flood-opacity="0.34"
      />
    </filter>

    <!-- ====================================================== -->
    <!-- RECORTE GLOBAL -->
    <!-- ====================================================== -->

    <!--
      Se desplaza medio píxel hacia dentro para evitar artefactos
      de rasterización/antialiasing en los límites del viewport.
    -->
    <clipPath
      id="canvasClip"
      clipPathUnits="userSpaceOnUse"
    >
      <rect
        x="0.5"
        y="0.5"
        width="1599"
        height="899"
        rx="36"
        ry="36"
      />
    </clipPath>

    <!-- ====================================================== -->
    <!-- RECORTES DE CAPTURAS -->
    <!-- ====================================================== -->

    <clipPath
      id="androidClip"
      clipPathUnits="userSpaceOnUse"
    >
      <rect
        x="138"
        y="90"
        width="334"
        height="724"
        rx="38"
        ry="38"
      />
    </clipPath>

    <clipPath
      id="iosClip"
      clipPathUnits="userSpaceOnUse"
    >
      <rect
        x="1128"
        y="90"
        width="334"
        height="724"
        rx="38"
        ry="38"
      />
    </clipPath>
  </defs>

  <!--
    Todo el showcase queda dentro del mismo recorte global.
    Fondo, glows, teléfonos y borde exterior quedan limitados
    por las cuatro esquinas redondeadas.
  -->
  <g clip-path="url(#canvasClip)">

    <!-- ====================================================== -->
    <!-- FONDO -->
    <!-- ====================================================== -->

    <rect
      x="0"
      y="0"
      width="1600"
      height="900"
      fill="url(#background)"
    />

    <rect
      x="0"
      y="0"
      width="1600"
      height="900"
      fill="url(#centerGlow)"
    />

    <!-- Glow central -->
    <circle
      cx="800"
      cy="390"
      r="265"
      fill="#9333ea"
      fill-opacity="0.075"
      filter="url(#softGlow)"
    />

    <!-- ====================================================== -->
    <!-- DECORACIÓN -->
    <!-- ====================================================== -->

    <circle
      cx="800"
      cy="375"
      r="235"
      fill="none"
      stroke="#c084fc"
      stroke-opacity="0.055"
      stroke-width="1"
    />

    <circle
      cx="800"
      cy="375"
      r="285"
      fill="none"
      stroke="#c084fc"
      stroke-opacity="0.035"
      stroke-width="1"
    />

    <line
      x1="565"
      y1="74"
      x2="710"
      y2="74"
      stroke="#a855f7"
      stroke-opacity="0.22"
    />

    <line
      x1="890"
      y1="74"
      x2="1035"
      y2="74"
      stroke="#a855f7"
      stroke-opacity="0.22"
    />

    <!-- ====================================================== -->
    <!-- ANDROID -->
    <!-- ====================================================== -->

    <g filter="url(#phoneShadow)">
      <!-- Marco exterior -->
      <rect
        x="118"
        y="70"
        width="374"
        height="764"
        rx="55"
        ry="55"
        fill="#08080c"
        stroke="url(#androidBorder)"
        stroke-width="2"
      />

      <!-- Marco interior -->
      <rect
        x="127"
        y="79"
        width="356"
        height="746"
        rx="47"
        ry="47"
        fill="#101015"
        stroke="#ffffff"
        stroke-opacity="0.07"
      />

      <!-- Captura original -->
      <image
        href="${android}"
        x="138"
        y="90"
        width="334"
        height="724"
        preserveAspectRatio="xMidYMid meet"
        clip-path="url(#androidClip)"
      />
    </g>

    <!-- Label Android -->
    <g>
      <rect
        x="213"
        y="850"
        width="184"
        height="38"
        rx="19"
        ry="19"
        fill="#10151a"
        stroke="#3DDC84"
        stroke-opacity="0.38"
        vector-effect="non-scaling-stroke"
      />

      <circle
        cx="238"
        cy="869"
        r="5"
        fill="#3DDC84"
      />

      <text
        x="257"
        y="875"
        fill="#d1fae5"
        font-size="18"
        font-weight="600"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Android
      </text>
    </g>

    <!-- ====================================================== -->
    <!-- IOS -->
    <!-- ====================================================== -->

    <g filter="url(#phoneShadow)">
      <!-- Marco exterior -->
      <rect
        x="1108"
        y="70"
        width="374"
        height="764"
        rx="55"
        ry="55"
        fill="#08080c"
        stroke="url(#iosBorder)"
        stroke-width="2"
      />

      <!-- Marco interior -->
      <rect
        x="1117"
        y="79"
        width="356"
        height="746"
        rx="47"
        ry="47"
        fill="#101015"
        stroke="#ffffff"
        stroke-opacity="0.08"
      />

      <!-- Captura original -->
      <image
        href="${ios}"
        x="1128"
        y="90"
        width="334"
        height="724"
        preserveAspectRatio="xMidYMid meet"
        clip-path="url(#iosClip)"
      />
    </g>

    <!-- Label iOS -->
    <g>
      <rect
        x="1203"
        y="850"
        width="184"
        height="38"
        rx="19"
        ry="19"
        fill="#121118"
        stroke="#c084fc"
        stroke-opacity="0.42"
        vector-effect="non-scaling-stroke"
      />

      <circle
        cx="1228"
        cy="869"
        r="5"
        fill="#d8b4fe"
      />

      <text
        x="1247"
        y="875"
        fill="#f3e8ff"
        font-size="18"
        font-weight="600"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        iOS
      </text>
    </g>

    <!-- ====================================================== -->
    <!-- BRANDING CENTRAL -->
    <!-- ====================================================== -->

    <g>
      <!-- Icono -->
      <image
        href="${icon}"
        x="730"
        y="156"
        width="140"
        height="140"
        preserveAspectRatio="xMidYMid meet"
        filter="url(#iconShadow)"
      />

      <!-- Nombre -->
      <text
        x="800"
        y="355"
        fill="url(#brandGradient)"
        text-anchor="middle"
        font-size="60"
        font-weight="750"
        letter-spacing="-1.5"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        SugoiYomi
      </text>

      <!-- Subtítulo -->
      <text
        x="800"
        y="401"
        fill="#c084fc"
        text-anchor="middle"
        font-size="19"
        font-weight="600"
        letter-spacing="3"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        MOBILE
      </text>

      <!-- Separador -->
      <line
        x1="710"
        y1="438"
        x2="890"
        y2="438"
        stroke="#a855f7"
        stroke-opacity="0.42"
      />

      <!-- Claim -->
      <text
        x="800"
        y="487"
        fill="#ffffff"
        text-anchor="middle"
        font-size="23"
        font-weight="500"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Tu biblioteca.
      </text>

      <text
        x="800"
        y="521"
        fill="#ffffff"
        text-anchor="middle"
        font-size="23"
        font-weight="500"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Tu mundo.
      </text>

      <text
        x="800"
        y="555"
        fill="#ffffff"
        text-anchor="middle"
        font-size="23"
        font-weight="500"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Tu forma de leer.
      </text>

      <!-- Estado -->
      <rect
        x="624"
        y="608"
        width="352"
        height="64"
        rx="18"
        ry="18"
        fill="#ffffff"
        fill-opacity="0.035"
        stroke="#c084fc"
        stroke-opacity="0.17"
        vector-effect="non-scaling-stroke"
      />

      <text
        x="800"
        y="636"
        fill="#e9d5ff"
        text-anchor="middle"
        font-size="16"
        font-weight="650"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Android &amp; iOS
      </text>

      <text
        x="800"
        y="658"
        fill="#a1a1aa"
        text-anchor="middle"
        font-size="14"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        En desarrollo
      </text>

      <!-- Próximo lanzamiento -->
      <text
        x="800"
        y="745"
        fill="#ffffff"
        fill-opacity="0.85"
        text-anchor="middle"
        font-size="16"
        font-weight="600"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Próximo lanzamiento
      </text>

      <text
        x="800"
        y="776"
        fill="#a1a1aa"
        text-anchor="middle"
        font-size="14"
        font-family="Inter, Segoe UI, Arial, sans-serif"
      >
        Android &amp; iOS
      </text>
    </g>

    <!-- ====================================================== -->
    <!-- BORDE EXTERIOR -->
    <!-- ====================================================== -->

    <!--
      También queda dentro del canvasClip para evitar residuos
      o pequeños artefactos en las cuatro esquinas.
    -->
    <rect
      x="1"
      y="1"
      width="1598"
      height="898"
      rx="35"
      ry="35"
      fill="none"
      stroke="#ffffff"
      stroke-opacity="0.08"
      stroke-width="2"
      vector-effect="non-scaling-stroke"
    />

  </g>
</svg>
`.trim();

fs.writeFileSync(outputPath, svg, "utf8");

console.log("");
console.log("SugoiYomi Mobile showcase generado correctamente.");
console.log(`Salida: ${outputPath}`);
console.log("");