import { getCommitRank } from "./utils";

interface Props {
  commitCount: number;
  prCount: number;
  stars: number;
  topLang: string;
  issueCount: number;
}

export const getSVG = ({
  commitCount,
  prCount,
  stars,
  topLang,
  issueCount,
}: Props) => `
<svg width="512" height="250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
      <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
      <feFlood flood-color="#ffffff" flood-opacity="0.08" result="color" />
      <feComposite in="color" in2="offsetBlur" operator="in" result="glass" />
      <feMerge>
        <feMergeNode in="glass" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>

    <!-- 카드 배경 그라디언트 -->
    <linearGradient id="card1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#1e293b" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="card2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f2937" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="card3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#115e59" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#094540" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="card4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78350f" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#92400e" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="card5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#334155" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="card6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4c1d95" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#581c87" stop-opacity="0.6"/>
    </linearGradient>

    <!-- 텍스트 그라디언트 -->
    <linearGradient id="value1" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <linearGradient id="value2" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#93c5fd"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="value3" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#f472b6"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
    <linearGradient id="value4" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#fcd34d"/>
      <stop offset="100%" stop-color="#fb923c"/>
    </linearGradient>
    <linearGradient id="value5" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#6ee7b7"/>
      <stop offset="100%" stop-color="#2dd4bf"/>
    </linearGradient>
    <linearGradient id="value6" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
  </defs>

  <style>
    .background {
      rx: 16;
      fill: url(#bg);
    }
    .label {
      font: bold 12px sans-serif;
      fill: #cbd5e1;
    }
    .title {
      font: bold 18px sans-serif;
      fill: #f8fafc;
    }
    .card-border {
      rx: 10;
      stroke: rgba(255,255,255,0.08);
      stroke-width: 1;
      filter: url(#glass);
    }
  </style>

  <rect width="100%" height="100%" class="background"/>

  <rect x="20" y="20" width="220" height="60" fill="url(#card1)" class="card-border"/>
  <text x="30" y="40" class="label">🏆 Commit Rank</text>
  <text x="30" y="65" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value1)">${getCommitRank(commitCount)}</text>

  <rect x="260" y="20" width="220" height="60" fill="url(#card2)" class="card-border"/>
  <text x="270" y="40" class="label">📝 Total Commits</text>
  <text x="270" y="65" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value2)">${commitCount.toLocaleString()}</text>

  <rect x="20" y="90" width="220" height="60" fill="url(#card3)" class="card-border"/>
  <text x="30" y="110" class="label">📦 Total PRs</text>
  <text x="30" y="135" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value3)">${prCount.toLocaleString()}</text>

  <rect x="260" y="90" width="220" height="60" fill="url(#card4)" class="card-border"/>
  <text x="270" y="110" class="label">📮 Issues Created</text>
  <text x="270" y="135" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value4)">${issueCount}</text>

  <rect x="20" y="160" width="220" height="60" fill="url(#card5)" class="card-border"/>
  <text x="30" y="180" class="label">🧠 Top Language</text>
  <text x="30" y="205" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value5)">${topLang}</text>

  <rect x="260" y="160" width="220" height="60" fill="url(#card6)" class="card-border"/>
  <text x="270" y="180" class="label">⭐ Stars Earned</text>
  <text x="270" y="205" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value6)">${stars}</text>
</svg>

`;
