'use client';

import { useState, useSyncExternalStore } from 'react';
/* oxlint-disable next/no-img-element -- Local WebP hero assets with explicit dimensions. */
const stories = [
  {
    title: 'Business growth.',
    label: 'Business',
    image: 'home-business',
    alt: 'Businesswoman working in a contemporary city office',
  },
  {
    title: 'Financial wellbeing.',
    label: 'Wellbeing',
    image: 'hero-financial-wellbeing',
    alt: 'Woman planning household finances with a phone and notebook at home',
  },
  {
    title: 'Shared opportunity.',
    label: 'Opportunity',
    image: 'hero-shared-opportunity',
    alt: 'South African city streetscape connecting local shops and modern businesses',
  },
] as const;

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

function subscribeVisibility(notify: () => void) {
  document.addEventListener('visibilitychange', notify);
  return () => document.removeEventListener('visibilitychange', notify);
}
const pageVisible = () => document.visibilityState === 'visible';

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
  const visible = useSyncExternalStore(
    subscribeVisibility,
    pageVisible,
    serverSnapshot,
  );
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [scene, setScene] = useState({ index: 0, revision: 0 });
  const running = ready && allowed && visible && !hovered && !keyboardFocused;
  const story = stories[scene.index];

  function selectScene(index: number) {
    setScene((previous) => ({ index, revision: previous.revision + 1 }));
  }

  return (
    <section
      className={`hero-intro ${running ? 'is-playing' : 'is-paused'} ${!ready ? 'is-static' : ''}`}
      aria-roledescription="carousel"
      aria-label="PayMint in South Africa"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse' || event.pointerType === 'pen')
          setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onPointerCancel={() => setHovered(false)}
      onFocusCapture={(event) => {
        setKeyboardFocused(event.target.matches(':focus-visible'));
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setKeyboardFocused(false);
      }}
    >
      <div className="hero-cinema">
        <div className="hero-slides" aria-hidden="true">
          {stories.map((item, index) => (
            <div
              className={`hero-slide ${index === scene.index ? 'is-active' : ''}`}
              key={item.image}
            >
              <img
                src={`/images/${item.image}.webp`}
                alt=""
                width="1536"
                height="1024"
                loading="eager"
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="hero-cinema-shade" aria-hidden="true" />
        <div className="hero-scene-topline">
          <span className="hero-scene-count" aria-hidden="true">
            0{scene.index + 1}
            <span> / 03</span>
          </span>
        </div>
        <div className="hero-story" aria-live="off" aria-atomic="true">
          <span className="hero-story-kicker">BUILT AROUND YOU</span>
          <div key={scene.revision} className="hero-story-words">
            {story.title}
          </div>
          <span className="sr-only">{story.alt}</span>
        </div>
      </div>
      <div className="hero-story-navigation" aria-label="Choose a hero scene">
        {stories.map((item, index) => (
          <button
            type="button"
            key={item.image}
            className="hero-story-choice"
            disabled={!ready}
            aria-label={`Show ${item.title}`}
            aria-current={scene.index === index ? 'true' : undefined}
            onClick={() => selectScene(index)}
          >
            <span className="hero-story-progress" aria-hidden="true">
              {scene.index === index && (
                <span
                  key={scene.revision}
                  className="hero-progress-fill"
                  onAnimationEnd={(event) => {
                    if (event.target === event.currentTarget && running) {
                      setScene((previous) => ({
                        index: (previous.index + 1) % stories.length,
                        revision: previous.revision + 1,
                      }));
                    }
                  }}
                />
              )}
            </span>
            <span className="hero-choice-label">
              <span>0{index + 1}</span>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
