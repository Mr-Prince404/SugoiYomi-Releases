import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const screenshotsDir = path.join(root, "docs", "screenshots");
const iconPath = path.join(screenshotsDir, "icon.png");
const outputPath = path.join(screenshotsDir, "chat-bubbles.svg");

function asDataUri(filePath, mimeType) {
  const buffer = fs.readFileSync(filePath);
  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

if (!fs.existsSync(iconPath)) {
  throw new Error(`No se encontró el archivo: ${iconPath}`);
}

const icon = asDataUri(iconPath, "image/png");

const svg = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1600"
  height="620"
  viewBox="0 0 1600 620"
  role="img"
  aria-labelledby="title desc"
>
  <title id="title">¿Cómo nació SugoiYomi?</title>

  <desc id="desc">
    Burbujas animadas que cuentan el origen de SugoiYomi:
    un capricho creativo, perfeccionismo y el deseo de construir
    una experiencia de lectura a medida.
  </desc>

  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#06070d"/>
      <stop offset="40%" stop-color="#140a22"/>
      <stop offset="100%" stop-color="#091019"/>
    </linearGradient>

    <radialGradient id="glow" cx="50%" cy="44%" r="56%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>

    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>

    <filter id="shadow" x="-50%" y="-50%" width="220%" height="240%">
      <feDropShadow
        dx="0"
        dy="14"
        stdDeviation="14"
        flood-color="#000000"
        flood-opacity="0.35"
      />
    </filter>

    <style><![CDATA[
      .bubble {
        animation: bob 9s infinite ease-in-out;
      }

      .bubble2 {
        animation-delay: -2s;
      }

      .bubble3 {
        animation-delay: -4s;
      }

      .bubble4 {
        animation-delay: -6s;
      }

      .typing1 {
        animation: typing 3s infinite ease-in-out;
      }

      .typing2 {
        animation: typing 3s infinite ease-in-out;
        animation-delay: .2s;
      }

      .typing3 {
        animation: typing 3s infinite ease-in-out;
        animation-delay: .4s;
      }

      @keyframes bob {
        0%, 100% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(-8px);
        }
      }

      @keyframes typing {
        0%, 80%, 100% {
          opacity: .25;
        }

        40% {
          opacity: 1;
        }
      }
    ]]></style>
  </defs>

  <rect
    x="0"
    y="0"
    width="1600"
    height="620"
    rx="30"
    ry="30"
    fill="url(#bg)"
  />

  <rect
    x="0"
    y="0"
    width="1600"
    height="620"
    rx="30"
    ry="30"
    fill="url(#glow)"
  />

  <circle
    cx="800"
    cy="304"
    r="180"
    fill="#9333ea"
    fill-opacity="0.08"
    filter="url(#blur)"
  />

  <image
    href="${icon}"
    x="738"
    y="28"
    width="124"
    height="124"
    preserveAspectRatio="xMidYMid meet"
  />

  <text
    x="800"
    y="182"
    text-anchor="middle"
    fill="#ffffff"
    font-size="40"
    font-weight="760"
    font-family="Inter, Segoe UI, Arial, sans-serif"
  >
    ¿Cómo nació SugoiYomi?
  </text>

  <text
    x="800"
    y="216"
    text-anchor="middle"
    fill="#a1a1aa"
    font-size="18"
    font-family="Inter, Segoe UI, Arial, sans-serif"
  >
    Así comenzó todo...
  </text>

  <!-- ====================================================== -->
  <!-- BURBUJA 1 -->
  <!-- ====================================================== -->

  <g class="bubble bubble1" filter="url(#shadow)">
    <path
      d="
        M132 286
        h430
        a24 24 0 0 1 24 24
        v114
        a24 24 0 0 1 -24 24
        h-276
        l-42 30
        8-30
        h-120
        a24 24 0 0 1 -24 -24
        v-114
        a24 24 0 0 1 24 -24
        z
      "
      fill="#111827"
      stroke="#38bdf8"
      stroke-opacity="0.22"
    />

    <text
      x="162"
      y="332"
      fill="#dbeafe"
      font-size="16"
      font-weight="700"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      Todo empezó como un capricho
    </text>

    <text
      x="162"
      y="366"
      fill="#ffffff"
      font-size="19"
      font-weight="540"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      <tspan x="162" dy="0">
        SugoiYomi nació porque quería una
      </tspan>

      <tspan x="162" dy="29">
        experiencia de lectura realmente mía,
      </tspan>

      <tspan x="162" dy="29">
        hecha a mi gusto.
      </tspan>
    </text>
  </g>

  <!-- ====================================================== -->
  <!-- BURBUJA 2 -->
  <!-- ====================================================== -->

  <g class="bubble bubble2" filter="url(#shadow)">
    <path
      d="
        M992 270
        h466
        a24 24 0 0 1 24 24
        v138
        a24 24 0 0 1 -24 24
        h-92
        l12 34
        -46-34
        h-340
        a24 24 0 0 1 -24 -24
        v-138
        a24 24 0 0 1 24 -24
        z
      "
      fill="#160f23"
      stroke="#c084fc"
      stroke-opacity="0.24"
    />

    <text
      x="1024"
      y="316"
      fill="#f3e8ff"
      font-size="16"
      font-weight="700"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      Y también como perfeccionismo
    </text>

    <text
      x="1024"
      y="352"
      fill="#ffffff"
      font-size="19"
      font-weight="540"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      <tspan x="1024" dy="0">
        Había mucho de ese impulso de pulir
      </tspan>

      <tspan x="1024" dy="29">
        detalles, ajustar ideas y dejar cada
      </tspan>

      <tspan x="1024" dy="29">
        parte como la imaginaba.
      </tspan>
    </text>
  </g>

  <!-- ====================================================== -->
  <!-- BURBUJA 3 -->
  <!-- ====================================================== -->

  <g class="bubble bubble3" filter="url(#shadow)">
    <path
      d="
        M198 470
        h510
        a22 22 0 0 1 22 22
        v86
        a22 22 0 0 1 -22 22
        h-510
        a22 22 0 0 1 -22 -22
        v-86
        a22 22 0 0 1 22 -22
        z
      "
      fill="#0f1720"
      stroke="#3DDC84"
      stroke-opacity="0.22"
    />

    <text
      x="228"
      y="510"
      fill="#d1fae5"
      font-size="15"
      font-weight="700"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      De idea personal a proyecto real
    </text>

    <text
      x="228"
      y="542"
      fill="#ffffff"
      font-size="18"
      font-weight="500"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      <tspan x="228" dy="0">
        Con el tiempo, ese capricho empezó a crecer:
      </tspan>

      <tspan x="228" dy="28">
        lector, biblioteca, fuentes, descargas y mucho más.
      </tspan>
    </text>
  </g>

  <!-- ====================================================== -->
  <!-- BURBUJA 4 -->
  <!-- ====================================================== -->

  <g class="bubble bubble4" filter="url(#shadow)">
    <path
      d="
        M826 480
        h554
        a22 22 0 0 1 22 22
        v82
        a22 22 0 0 1 -22 22
        h-554
        a22 22 0 0 1 -22 -22
        v-82
        a22 22 0 0 1 22 -22
        z
      "
      fill="#121118"
      stroke="#a855f7"
      stroke-opacity="0.22"
    />

    <text
      x="856"
      y="518"
      fill="#e9d5ff"
      font-size="15"
      font-weight="700"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      La idea sigue siendo la misma
    </text>

    <text
      x="856"
      y="550"
      fill="#ffffff"
      font-size="18"
      font-weight="500"
      font-family="Inter, Segoe UI, Arial, sans-serif"
    >
      <tspan x="856" dy="0">
        Construir algo bonito, funcional y muy mío;
      </tspan>

      <tspan x="856" dy="28">
        ahora en Windows y también camino a Android e iOS.
      </tspan>
    </text>
  </g>

  <!-- ====================================================== -->
  <!-- TYPING -->
  <!-- ====================================================== -->

  <g transform="translate(724 286)">
    <rect
      x="0"
      y="0"
      width="152"
      height="54"
      rx="18"
      fill="#14141d"
      stroke="#ffffff"
      stroke-opacity="0.08"
    />

    <circle
      class="typing1"
      cx="46"
      cy="27"
      r="6"
      fill="#c084fc"
    />

    <circle
      class="typing2"
      cx="76"
      cy="27"
      r="6"
      fill="#a855f7"
    />

    <circle
      class="typing3"
      cx="106"
      cy="27"
      r="6"
      fill="#7c3aed"
    />
  </g>

  <!-- Borde exterior -->
  <rect
    x="1"
    y="1"
    width="1598"
    height="618"
    rx="29"
    ry="29"
    fill="none"
    stroke="#ffffff"
    stroke-opacity="0.07"
    stroke-width="2"
  />
</svg>
`.trim();

fs.writeFileSync(
  outputPath,
  svg,
  "utf8",
);

console.log(`Generado: ${outputPath}`);