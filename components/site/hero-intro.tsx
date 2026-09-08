'use client';

import { useState, useSyncExternalStore } from 'react';
import { Pause, Play } from 'lucide-react';
import { Visual } from './visuals';

function subscribeMotion(notify: () => void) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', notify);
  return () => preference.removeEventListener('change', notify);
}
const motionAllowed = () =>
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const serverSnapshot = () => false;
const clientSnapshot = () => true;
const subscribeHydration = () => () => {};

export function HeroIntro() {
  const ready = useSyncExternalStore(
    subscribeHydration,
    clientSnapshot,
    serverSnapshot,
  );
  const allowed = useSyncExternalStore(
    subscribeMotion,
    motionAllowed,
    serverSnapshot,
  );
  const [paused, setPaused] = useState(false);
  const running = ready && allowed && !paused;
  return (
    <div
      className={`hero-intro ${!ready ? 'is-static' : running ? 'is-playing' : 'is-paused'}`}
    >
      <div className="hero-cinema">
        <Visual name="home" priority />
        <div className="hero-cinema-shade" aria-hidden="true" />
        <div className="hero-story" aria-hidden="true">
          <span className="hero-story-kicker">PAYMINT SOUTH AFRICA</span>
          <div className="hero-story-words">
            <span>Business growth.</span>
            <span>Financial wellbeing.</span>
            <span>Shared opportunity.</span>
          </div>
          <div className="hero-story-progress">
            <span />
            <span />
            <span />
          </div>
        </div>
        <button
          className="hero-motion-control"
          type="button"
          disabled={!ready}
          onClick={() => setPaused(!paused)}
          aria-label={running ? 'Pause hero animation' : 'Play hero animation'}
        >
          {running ? <Pause size={14} /> : <Play size={14} />}
          {running ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
