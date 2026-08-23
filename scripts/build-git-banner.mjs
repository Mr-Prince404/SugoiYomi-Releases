import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const screenshotsDir = path.join(root, 'docs', 'screenshots');

const iconPath = path.join(screenshotsDir, 'icon.png');
const outputPath = path.join(screenshotsDir, 'git-banner.svg');

function asDataUri(filePath, mimeType) {
  const buffer = fs.readFileSync(filePath);
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

if (!fs.existsSync(iconPath)) {
  throw new Error(`No se encontró el archivo: ${iconPath}`);
}

const icon = asDataUri(iconPath, 'image/png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="520" viewBox="0 0 1600 520" role="img" aria-labelledby="title desc">
  <title id="title">SugoiYomi Git Banner</title>
  <desc id="desc">Banner temático de SugoiYomi para GitHub README.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#06070d"/>
      <stop offset="45%" stop-color="#150a24"/>
      <stop offset="100%" stop-color="#090d13"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.28"/>
      <stop offset="55%" stop-color="#7c3aed" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="titleGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="55%" stop-color="#e9d5ff"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3ddc84" stop-opacity="0.0"/>
      <stop offset="30%" stop-color="#a855f7" stop-opacity="0.55"/>
      <stop offset="70%" stop-color="#a855f7" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#3ddc84" stop-opacity="0.0"/>
    </linearGradient>
    <filter id="softBlur" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    <filter id="iconShadow" x="-100%" y="-100%" width="300%" height="300%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#a855f7" flood-opacity="0.42"/>
    </filter>
    <style><![CDATA[
      .starA { animation: twinkle 3.8s infinite ease-in-out; }
      .starB { animation: twinkle 4.6s infinite ease-in-out; animation-delay: -1.4s; }
      .starC { animation: twinkle 5.1s infinite ease-in-out; animation-delay: -2.1s; }
      .float1 { animation: floatUp 8s infinite ease-in-out; }
      .float2 { animation: floatUp 10s infinite ease-in-out; animation-delay: -2s; }
      .float3 { animation: floatUp 12s infinite ease-in-out; animation-delay: -4s; }
      .pulseGlow { animation: pulse 6s infinite ease-in-out; }
      @keyframes twinkle {
        0%,100% { opacity: .25; transform: scale(0.9); }
        50% { opacity: 1; transform: scale(1.08); }
      }
      @keyframes floatUp {
        0%,100% { transform: translateY(0px); opacity: .18; }
        50% { transform: translateY(-8px); opacity: .34; }
      }
      @keyframes pulse {
        0%,100% { opacity: .70; }
        50% { opacity: 1; }
      }
    ]]></style>
  </defs>

  <rect x="0" y="0" width="1600" height="520" rx="34" ry="34" fill="url(#bg)"/>
  <rect x="0" y="0" width="1600" height="520" rx="34" ry="34" fill="url(#glow)"/>

  <circle class="pulseGlow" cx="800" cy="228" r="185" fill="#9333ea" fill-opacity="0.08" filter="url(#softBlur)"/>
  <circle cx="800" cy="228" r="160" fill="none" stroke="#c084fc" stroke-opacity="0.10"/>
  <circle cx="800" cy="228" r="205" fill="none" stroke="#c084fc" stroke-opacity="0.05"/>

  <g fill="#f5d0fe">
    <g class="starA">
      <path d="M235 78 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z"/>
    </g>
    <g class="starB">
      <path d="M1328 88 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5z"/>
    </g>
    <g class="starC">
      <path d="M1260 410 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z"/>
    </g>
    <g class="starA">
      <path d="M322 420 l4 11 11 4 -11 4 -4 11 -4 -11 -11 -4 11 -4z"/>
    </g>
  </g>

  <g stroke="#a855f7" stroke-opacity="0.22" fill="none" stroke-width="1.4">
    <path class="float1" d="M120 148 C 240 102, 354 92, 478 130"/>
    <path class="float2" d="M1118 140 C 1244 108, 1360 112, 1480 156"/>
    <path class="float3" d="M132 378 C 232 402, 350 408, 455 380"/>
    <path class="float1" d="M1138 370 C 1246 336, 1366 334, 1470 362"/>
  </g>

  <image href="${icon}" x="690" y="72" width="220" height="220" preserveAspectRatio="xMidYMid meet" filter="url(#iconShadow)"/>

  <text x="800" y="328" text-anchor="middle" fill="url(#titleGradient)" font-size="72" font-weight="760" font-family="Inter, Segoe UI, Arial, sans-serif" letter-spacing="-1.5">SugoiYomi</text>
  <text x="800" y="368" text-anchor="middle" fill="#c084fc" font-size="18" font-weight="700" font-family="Inter, Segoe UI, Arial, sans-serif" letter-spacing="4">RELEASES</text>

  <line x1="530" y1="392" x2="1070" y2="392" stroke="url(#lineGradient)" stroke-width="2"/>

  <text x="800" y="430" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="520" font-family="Inter, Segoe UI, Arial, sans-serif">Tu rincón de lectura</text>
  <text x="800" y="465" text-anchor="middle" fill="#a1a1aa" font-size="17" font-family="Inter, Segoe UI, Arial, sans-serif">Windows disponible · Android &amp; iOS en desarrollo</text>

  <g transform="translate(46 0)">

  <rect
    x="560"
    y="482"
    width="112"
    height="26"
    rx="13"
    fill="#0f1720"
    stroke="#38bdf8"
    stroke-opacity="0.34"
  />

  <text
    x="616"
    y="499"
    text-anchor="middle"
    fill="#dbeafe"
    font-size="13"
    font-weight="700"
    font-family="Inter, Segoe UI, Arial, sans-serif"
  >
    Windows
  </text>

  <rect
    x="694"
    y="482"
    width="138"
    height="26"
    rx="13"
    fill="#10151a"
    stroke="#3DDC84"
    stroke-opacity="0.34"
  />

  <text
    x="763"
    y="499"
    text-anchor="middle"
    fill="#d1fae5"
    font-size="13"
    font-weight="700"
    font-family="Inter, Segoe UI, Arial, sans-serif"
  >
    Android
  </text>

  <rect
    x="856"
    y="482"
    width="92"
    height="26"
    rx="13"
    fill="#121118"
    stroke="#c084fc"
    stroke-opacity="0.34"
  />

  <text
    x="902"
    y="499"
    text-anchor="middle"
    fill="#f3e8ff"
    font-size="13"
    font-weight="700"
    font-family="Inter, Segoe UI, Arial, sans-serif"
  >
    iOS
  </text>

</g>

  <rect x="1" y="1" width="1598" height="518" rx="33" ry="33" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`.trim();

fs.writeFileSync(outputPath, svg, 'utf8');
console.log(`Generado: ${outputPath}`);
