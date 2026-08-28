'use client';

const loopText = 'UI　·　UX DESIGN　　✦　　VISUAL DESIGN　　✦　　';

export default function TextLoop() {
  return (
    <div className="text-loop" aria-label="UI · UX Design">
      <svg className="text-loop-svg" viewBox="0 0 1600 240" preserveAspectRatio="xMidYMid slice" role="img">
        <defs>
          <path id="text-loop-path" d="M -260 126 Q 0 36 260 126 T 780 126 T 1300 126 T 1820 126" />
        </defs>
        <path className="text-loop-ribbon" d="M -260 126 Q 0 36 260 126 T 780 126 T 1300 126 T 1820 126" />
        <text className="text-loop-copy" dominantBaseline="middle">
          <textPath href="#text-loop-path" startOffset="0%">{loopText.repeat(4)}<animate attributeName="startOffset" from="0%" to="-25%" dur="28s" repeatCount="indefinite" /></textPath>
        </text>
      </svg>
    </div>
  );
}
