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
<svg width="500" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
       <!-- 카드 배경 그라디언트 -->
    <linearGradient id="card1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5b21b6"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
    <linearGradient id="card2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <linearGradient id="card3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#134e4a"/>
    </linearGradient>
    <linearGradient id="card4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#831843"/>
    <stop offset="100%" stop-color="#581c87"/>
    </linearGradient>
    <linearGradient id="card5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#1e40af"/>
    <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="card6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>

    <!-- 텍스트 그라디언트 (반대로 적용) -->
    <linearGradient id="value1" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
    <linearGradient id="value2" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#fcd34d"/>
      <stop offset="100%" stop-color="#fb923c"/>
    </linearGradient>
    <linearGradient id="value3" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#6ee7b7"/>
      <stop offset="100%" stop-color="#2dd4bf"/>
    </linearGradient>
    <linearGradient id="value4" x1="100%" y1="0%" x2="0%" y2="0%">
    <stop offset="0%" stop-color="#f472b6"/>
    <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
    <linearGradient id="value5" x1="100%" y1="0%" x2="0%" y2="0%">
    <stop offset="0%" stop-color="#93c5fd"/>
    <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="value6" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>

  <style>
    .label {
      font: bold 12px sans-serif;
      fill: #d1d5db;
    }
    .title {
      font: bold 18px sans-serif;
      fill: #e5e7eb;
    }
    .card-border {
      rx: 10;
      stroke: rgba(255,255,255,0.08);
      stroke-width: 1;
    }
  </style>

  <rect x="20" y="50" width="220" height="60" fill="url(#card1)" class="card-border"/>
  <text x="30" y="70" class="label">🏆 Commit Rank</text>
  <text x="30" y="95" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value1)">${getCommitRank(
    commitCount
  )}</text>

  <rect x="260" y="50" width="220" height="60" fill="url(#card2)" class="card-border"/>
  <text x="270" y="70" class="label">📝 Total Commits</text>
  <text x="270" y="95" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value2)">${commitCount.toLocaleString()}</text>

  <rect x="20" y="120" width="220" height="60" fill="url(#card3)" class="card-border"/>
  <text x="30" y="140" class="label">📦 Total PRs</text>
  <text x="30" y="165" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value3)">${prCount.toLocaleString()}</text>

  <rect x="260" y="120" width="220" height="60" fill="url(#card4)" class="card-border"/>
  <text x="270" y="140" class="label">📮 Issues Created</text>
  <text x="270" y="165" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value4)">${issueCount}</text>

  <rect x="20" y="190" width="220" height="60" fill="url(#card5)" class="card-border"/>
  <text x="30" y="210" class="label">⭐ Stars Earned</text>
  <text x="30" y="235" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value5)">${stars}</text>

  <rect x="260" y="190" width="220" height="60" fill="url(#card6)" class="card-border"/>
  <text x="270" y="210" class="label">🧠 Top Language</text>
  <text x="270" y="235" font-family="monospace" font-weight="bold" font-size="16" fill="url(#value6)">${topLang}</text>
</svg>
`;
