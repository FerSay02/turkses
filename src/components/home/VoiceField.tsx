import * as React from 'react';
import type { TranslationMap } from '../../locales/types';
import { OrbitBorderCard } from '../ui/OrbitBorderCard';

type VoiceFieldProps = {
  copy: TranslationMap;
};

const FOLLOWER_VISIBLE_STYLE = 'translate(-50%, -50%) scale(1)';
const FOLLOWER_HIDDEN_STYLE = 'translate(-50%, -50%) scale(0.92)';
const { useRef, useState } = React;

export function VoiceField({ copy }: VoiceFieldProps) {
  const [isFollowerVisible, setIsFollowerVisible] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const isTurkish = copy.localeLabel === 'Dil';

  const updateFollower = (event: React.PointerEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    const follower = followerRef.current;
    if (!canvas || !follower) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    const offsetX = (x / rect.width - 0.5) * 10;
    const offsetY = (y / rect.height - 0.5) * 10;

    canvas.style.setProperty('--pointer-x', `${xPercent}%`);
    canvas.style.setProperty('--pointer-y', `${yPercent}%`);
    canvas.style.setProperty('--pointer-offset-x', `${offsetX.toFixed(2)}`);
    canvas.style.setProperty('--pointer-offset-y', `${offsetY.toFixed(2)}`);

    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;
    follower.style.transform = FOLLOWER_VISIBLE_STYLE;
  };

  const handlePointerEnter = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsFollowerVisible(true);
    updateFollower(event);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    updateFollower(event);
  };

  const handlePointerLeave = () => {
    setIsFollowerVisible(false);
    const follower = followerRef.current;
    if (follower) {
      follower.style.transform = FOLLOWER_HIDDEN_STYLE;
    }
  };

  return (
    <section className="voice-field" aria-label={copy.visual.title}>
      <OrbitBorderCard className="voice-field-shell orbit-border-card--voice" phase={40} speed={12} hoverFill={82}>
        <div className="voice-field-topline">
          <span className="voice-field-label">{copy.visual.title}</span>
          <span className="voice-field-meta">{copy.visual.subtitle}</span>
        </div>

        <div
          ref={canvasRef}
          className="voice-field-canvas"
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className="voice-field-grid" aria-hidden="true" />
          <div className="voice-field-glow voice-field-glow-left" aria-hidden="true" />
          <div className="voice-field-glow voice-field-glow-right" aria-hidden="true" />
          <div className="voice-field-ring" aria-hidden="true" />
          <div
            ref={followerRef}
            className="voice-field-orb voice-field-orb-follow"
            aria-hidden="true"
            style={{
              transform: FOLLOWER_HIDDEN_STYLE,
              opacity: isFollowerVisible ? 1 : 0,
            }}
          />

          <div className="voice-field-card voice-field-card-left voice-field-card--acoustic">
            <span className="voice-card-label">{copy.visual.annotations[0]}</span>
            <strong>{isTurkish ? 'Sinyal / 20 ms' : 'Signal / 20 ms'}</strong>
            <span className="voice-card-meta">{isTurkish ? 'Sabit katman' : 'Stable layer'}</span>
          </div>

          <div className="voice-field-card voice-field-card-right voice-field-card--temporal">
            <span className="voice-card-label">{copy.visual.annotations[1]}</span>
            <strong>{isTurkish ? 'Örüntü / kadans' : 'Pattern / cadence'}</strong>
            <span className="voice-card-meta">{isTurkish ? 'Araştırma izi' : 'Research trace'}</span>
          </div>

          <svg className="voice-wave" viewBox="0 0 640 420" role="img" aria-label={copy.visual.subtitle}>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D2E3FC" />
                <stop offset="55%" stopColor="#4285F4" />
                <stop offset="100%" stopColor="#34A853" />
              </linearGradient>
              <linearGradient id="scanTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34A853" stopOpacity="0" />
                <stop offset="58%" stopColor="#34A853" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#34A853" stopOpacity="0.86" />
              </linearGradient>
              <path
                id="voiceScanPath"
                d="M 22 242 C 82 176, 140 308, 198 244 S 300 176, 360 242 S 458 304, 520 242 S 590 178, 618 242"
              />
            </defs>

            <g className="voice-background-traces" aria-hidden="true">
              <path d="M 42 178 C 126 150, 186 196, 262 174 S 394 150, 468 176 S 568 202, 610 180" />
              <path d="M 36 286 C 130 306, 210 268, 294 288 S 438 310, 610 284" />
            </g>

            <circle className="voice-analysis-field" cx="320" cy="186" r="148" aria-hidden="true" />

            <path
              className="voice-wave-track voice-wave-track-back"
              d="M 24 244 C 88 210, 136 278, 198 244 S 302 208, 360 244 S 466 278, 522 244 S 594 210, 616 244"
            />
            <path
              className="voice-wave-track voice-wave-track-front"
              d="M 22 242 C 82 176, 140 308, 198 244 S 300 176, 360 242 S 458 304, 520 242 S 590 178, 618 242"
              pathLength="1"
            />

            <path
              className="voice-scan-trail"
              d="M 22 242 C 82 176, 140 308, 198 244 S 300 176, 360 242 S 458 304, 520 242 S 590 178, 618 242"
              pathLength="1"
            />
            <g className="voice-scan-head" aria-hidden="true">
              <circle r="5.5" />
              <circle className="voice-scan-head-halo" r="13" />
              <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" begin="1.4s">
                <mpath href="#voiceScanPath" />
              </animateMotion>
            </g>

            {copy.visual.annotations.map((label, index) => {
              const positions = [
                { x: 118, y: 132, labelY: 96 },
                { x: 318, y: 98, labelY: 62 },
                { x: 522, y: 136, labelY: 100 },
              ] as const;
              const position = positions[index] ?? positions[0];

              return (
                <g key={label} className={`voice-node voice-node-${index + 1}`}>
                  <circle className="voice-node-ripple" cx={position.x} cy={position.y} r="24" />
                  <circle cx={position.x} cy={position.y} r="11" />
                  <circle cx={position.x} cy={position.y} r="24" />
                  <text x={position.x + 16} y={position.labelY}>
                    {label}
                  </text>
                </g>
              );
            })}

            <g className="voice-spectral" aria-hidden="true">
              <path d="M 72 332 C 150 318, 204 350, 278 336 S 412 318, 490 336 S 562 352, 594 334" />
              <path d="M 64 354 C 150 340, 222 370, 300 354 S 430 338, 506 354 S 564 370, 600 354" />
              <path d="M 84 374 C 164 360, 234 388, 312 374 S 448 356, 526 374 S 572 388, 592 374" />
            </g>
          </svg>
        </div>
      </OrbitBorderCard>
    </section>
  );
}
