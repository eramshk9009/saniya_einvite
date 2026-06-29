// Animation variants & shared constants — extracted from inline props so
// React/framer-motion don't allocate new objects on every render.

export const HEARTS = Array.from({ length: 14 }).map((_, i) => ({
  id: `heart-${i}`,
  left: (i * 71) % 100,
  delay: (i * 0.5) % 6,
  duration: 6 + (i % 5),
  size: 14 + ((i * 7) % 18),
  hue: i % 3,
}));

export const PARTICLES = Array.from({ length: 24 }).map((_, i) => ({
  id: `particle-${i}`,
  left: (i * 37) % 100,
  delay: (i * 0.6) % 8,
  duration: 8 + (i % 6),
}));

export const ENTER_BTN_HOVER = { scale: 1.04 };
export const ENTER_BTN_TAP = { scale: 0.97 };

export const GATE_CTA_INITIAL = { opacity: 0, scale: 0.92, y: 20 };
export const GATE_CTA_ANIMATE = { opacity: 1, scale: 1, y: 0 };
export const GATE_CTA_EXIT = {
  opacity: 0,
  scale: 0.85,
  transition: { duration: 0.5 },
};
export const GATE_CTA_TRANSITION = { delay: 0.4, duration: 1 };

export const GLOW_TEXT_SHADOW_TOP = {
  textShadow: [
    "0 0 18px rgba(212,175,55,0.45)",
    "0 0 32px rgba(212,175,55,0.85)",
    "0 0 18px rgba(212,175,55,0.45)",
  ],
};
export const GLOW_TEXT_SHADOW_BISMILLAH = {
  textShadow: [
    "0 0 18px rgba(212,175,55,0.25)",
    "0 0 36px rgba(212,175,55,0.6)",
    "0 0 18px rgba(212,175,55,0.25)",
  ],
};
export const GLOW_TRANSITION_4 = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};
export const GLOW_TRANSITION_45 = {
  duration: 4.5,
  repeat: Infinity,
  ease: "easeInOut",
};

export const SCROLL_HINT_ANIMATE = { opacity: [0.4, 1, 0.4] };
export const SCROLL_HINT_TRANSITION = {
  duration: 2.4,
  repeat: Infinity,
  ease: "easeInOut",
};

export const HEART_PULSE = { scale: [1, 1.18, 1] };
export const HEART_PULSE_TRANSITION = {
  duration: 1.6,
  repeat: Infinity,
  ease: "easeInOut",
};

export const SCROLL_CTA_HOVER = { y: -3 };
export const SCROLL_ARROW_ANIMATE = { y: [0, 6, 0] };

export const DATE_NUM_ANIMATE = { scale: [1, 1.03, 1] };
export const DATE_NUM_TRANSITION = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

export const EMBLEM_ROTATE = { rotate: [0, 360] };
export const EMBLEM_TRANSITION = {
  duration: 60,
  repeat: Infinity,
  ease: "linear",
};

export const FADE_UP_INITIAL = { opacity: 0, y: 30 };
export const FADE_UP_ANIMATE = { opacity: 1, y: 0 };
export const FADE_UP_BIG_INITIAL = { opacity: 0, y: 40 };
export const FADE_SCALE_INITIAL = { opacity: 0, scale: 0.95 };
export const FADE_SCALE_ANIMATE = { opacity: 1, scale: 1 };
export const FADE_IN_INITIAL = { opacity: 0 };
export const FADE_IN_ANIMATE = { opacity: 1 };
export const VIEWPORT_ONCE = { once: true, amount: 0.3 };

export const HEART_HUE = ["#f4d160", "#ffb6b6", "#e9c971"];
