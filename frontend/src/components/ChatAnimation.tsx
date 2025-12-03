import React from "react";

/**
 * Right-side SVG animation.
 * - Three circles start overlapped (one), then hide for 0.5s,
 *   then expand/bloom into a flower-like overlapping circles.
 *
 * Uses CSS keyframes below.
 */

function ChatAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-[420px] h-[420px] relative">
        <svg
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="g1" cx="50%" cy="30%">
              <stop offset="0%" stopColor="#cfe6ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#9fb7d6" stopOpacity="0.8" />
            </radialGradient>
            <radialGradient id="g2" cx="50%" cy="70%">
              <stop offset="0%" stopColor="#cfe6ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#9fb7d6" stopOpacity="0.6" />
            </radialGradient>
            <radialGradient id="g3" cx="30%" cy="50%">
              <stop offset="0%" stopColor="#cfe6ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#9fb7d6" stopOpacity="0.7" />
            </radialGradient>
          </defs>

          <g className="anim-group">
            <circle
              className="c1"
              cx="300"
              cy="300"
              r="60"
              fill="url(#g1)"
            ></circle>
            <circle
              className="c2"
              cx="300"
              cy="300"
              r="60"
              fill="url(#g2)"
            ></circle>
            <circle
              className="c3"
              cx="300"
              cy="300"
              r="60"
              fill="url(#g3)"
            ></circle>
          </g>
        </svg>
      </div>

      <style>{`
        .anim-group .c1,
        .anim-group .c2,
        .anim-group .c3 {
          transform-origin: 300px 300px;
          transition: transform 600ms ease, opacity 300ms ease;
        }

        /* animation sequence using CSS animation */
        .anim-group .c1 {
          animation: seq 3s infinite;
          animation-delay: 0s;
        }
        .anim-group .c2 {
          animation: seq 3s infinite;
          animation-delay: 0.06s;
        }
        .anim-group .c3 {
          animation: seq 3s infinite;
          animation-delay: 0.12s;
        }

        @keyframes seq {
          /* 0%: all small overlapped */
          0% {
            transform: translate(0px, 0px) scale(1);
            opacity: 1;
          }
          /* 12%: still overlapped */
          12% {
            transform: translate(0px, 0px) scale(1);
            opacity: 1;
          }
          /* 18%: hide quickly (0.5s hidden) */
          20% {
            opacity: 0;
            transform: translate(0px, 0px) scale(0.9);
          }
          /* hold hidden until 33% (~0.5s) */
          33% {
            opacity: 0;
            transform: translate(0px, 0px) scale(0.9);
          }
          /* 40%: start blooming — move outwards and grow */
          55% {
            opacity: 1;
            transform: translate(var(--tx), var(--ty)) scale(3.8);
          }
          /* 85% settle a bit */
          85% {
            transform: translate(var(--tx), var(--ty)) scale(3.4);
            opacity: 0.95;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(3.6);
            opacity: 1;
          }
        }

        /* directions for each circle via CSS variables */
        .anim-group .c1 {
          --tx: -48px;
          --ty: -30px;
        }
        .anim-group .c2 {
          --tx: 48px;
          --ty: -30px;
        }
        .anim-group .c3 {
          --tx: 0px;
          --ty: 50px;
        }

        /* ensure svg scales smoothly on small screens */
        @media (max-width: 640px) {
          .anim-group .c1,
          .anim-group .c2,
          .anim-group .c3 {
            animation-duration: 3s;
          }
        }
      `}</style>
    </div>
  );
}

export default ChatAnimation;
