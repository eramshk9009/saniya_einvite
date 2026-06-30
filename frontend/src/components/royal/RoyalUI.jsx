import { motion, AnimatePresence } from "framer-motion";
import {
  HEARTS,
  PARTICLES,
  HEART_HUE,
  ENTER_BTN_HOVER,
  ENTER_BTN_TAP,
  GATE_CTA_INITIAL,
  GATE_CTA_ANIMATE,
  GATE_CTA_EXIT,
  GATE_CTA_TRANSITION,
  GLOW_TEXT_SHADOW_TOP,
  GLOW_TRANSITION_4,
  SCROLL_HINT_ANIMATE,
  SCROLL_HINT_TRANSITION,
  HEART_PULSE,
  HEART_PULSE_TRANSITION,
  SCROLL_CTA_HOVER,
  SCROLL_ARROW_ANIMATE,
} from "@/lib/motionVariants";

export const HeartIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
    <path
      d="M16 28 L4.5 16.6 a7 7 0 0 1 9.9 -9.9 L16 8.2 l1.6 -1.5 a7 7 0 0 1 9.9 9.9 Z"
      fill="currentColor"
      stroke="rgba(0,0,0,0.25)"
      strokeWidth="0.6"
    />
  </svg>
);

export const FloatingHearts = () => (
  <div className="hearts-layer" aria-hidden="true" data-testid="hearts-layer">
    {HEARTS.map((h) => (
      <span
        key={h.id}
        className="heart-float"
        style={{
          left: `${h.left}%`,
          animationDelay: `${h.delay}s`,
          animationDuration: `${h.duration}s`,
          color: HEART_HUE[h.hue],
        }}
      >
        <HeartIcon size={h.size} />
      </span>
    ))}
  </div>
);

export const FloatingParticles = () => (
  <div className="particles" aria-hidden="true">
    {PARTICLES.map((p) => (
      <span
        key={p.id}
        className="particle"
        style={{
          left: `${p.left}%`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
        }}
      />
    ))}
  </div>
);

export const AudioToggle = ({ playing, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={playing ? "Pause nasheed" : "Play nasheed"}
    data-testid="audio-toggle"
    className={`audio-toggle ${playing ? "is-playing" : ""}`}
  >
    {playing ? (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M9 18V8l11-3v10" />
        <circle cx="6" cy="18" r="3" fill="currentColor" />
        <circle cx="17" cy="15" r="3" fill="currentColor" />
      </svg>
    )}
    <span className={`audio-eq ${playing ? "active" : ""}`} aria-hidden>
      <i /><i /><i /><i />
    </span>
    <span className="audio-label">{playing ? "Pause Nasheed" : "Play Nasheed"}</span>
  </button>
);

export const Ornate = () => (
  <svg viewBox="0 0 200 40" className="ornate-divider" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M0 20 H80" />
      <path d="M120 20 H200" />
      <circle cx="100" cy="20" r="6" />
      <circle cx="100" cy="20" r="11" />
      <path d="M100 4 L102 14 L112 16 L104 22 L106 32 L100 26 L94 32 L96 22 L88 16 L98 14 Z" />
      <path d="M70 20 q5 -10 15 0 q-5 10 -15 0 z" />
      <path d="M130 20 q-5 -10 -15 0 q5 10 15 0 z" />
    </g>
  </svg>
);

export const Arabesque = () => (
  <svg viewBox="0 0 100 100" className="arabesque" aria-hidden="true">
    <defs>
      <pattern
        id="ara"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M10 0 L20 10 L10 20 L0 10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <circle cx="10" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="0.4" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#ara)" />
  </svg>
);

const GatePanel = () => (
  <div className="gate-inner">
    <div className="gate-arch-top" />
    <div className="gate-panel">
      <div className="gate-medallion" />
      <div className="gate-medallion gate-medallion-sm" />
      <div className="gate-medallion gate-medallion-sm gate-medallion-bottom" />
    </div>
    <div className="gate-knocker" />
  </div>
);

const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const GateCTA = ({ onEnter }) => (
  <div className="gate-cta-anchor">
    <motion.div
      className="gate-cta"
      initial={GATE_CTA_INITIAL}
      animate={GATE_CTA_ANIMATE}
      exit={GATE_CTA_EXIT}
      transition={GATE_CTA_TRANSITION}
    >
      <motion.div
        className="bismillah-top"
        lang="ar"
        animate={GLOW_TEXT_SHADOW_TOP}
        transition={GLOW_TRANSITION_4}
      >
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
      </motion.div>
      <h1 className="invite-title">A Royal Invitation</h1>
      <p className="invite-sub">
        The honour of your presence is humbly requested
      </p>
      <motion.button
        data-testid="enter-palace-btn"
        onClick={onEnter}
        className="enter-btn"
        whileHover={ENTER_BTN_HOVER}
        whileTap={ENTER_BTN_TAP}
      >
        <span>Enter the Palace</span>
        <ChevronRightIcon />
      </motion.button>
      <motion.p
        className="scroll-hint"
        animate={SCROLL_HINT_ANIMATE}
        transition={SCROLL_HINT_TRANSITION}
      >
        Knock the doors to begin
      </motion.p>
    </motion.div>
  </div>
);

export const PalaceGates = ({ onEnter, opened }) => {
  const openedClass = opened ? "gate-open" : "";
  return (
    <div className="gates-wrapper" data-testid="palace-gates">
      <div className={`gate gate-left ${openedClass}`}>
        <GatePanel />
      </div>
      <div className={`gate gate-right ${openedClass}`}>
        <GatePanel />
      </div>
      <AnimatePresence>{!opened && <GateCTA onEnter={onEnter} />}</AnimatePresence>
    </div>
  );
};

const REVEAL_PANEL_INITIAL = { opacity: 0, scale: 0.94 };
const REVEAL_PANEL_ANIMATE = {
  opacity: 1,
  scale: 1,
  transition: { delay: 0.9, duration: 0.8 },
};
const REVEAL_PANEL_EXIT = { opacity: 0 };

const revealItemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.25, duration: 0.9, ease: "easeOut" },
  }),
};

const RevealItem = ({ custom, children, className, as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={revealItemVariants}
      custom={custom}
      initial="hidden"
      animate="show"
    >
      {children}
    </Tag>
  );
};

const MoonStarIcon = () => (
  <svg viewBox="0 0 80 80" width="56" height="56">
    <path
      d="M50 12a28 28 0 1 0 0 56 22 22 0 1 1 0-56z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M62 38 l3.5 7.5 L73 47 l-5.5 5 1.3 7.5L62 56l-6.8 3.5L56.5 52 51 47l7.5-1.5z"
      fill="currentColor"
    />
  </svg>
);

const MosqueIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M12 2 L4 8 v12 h5 v-7 h6 v7 h5 V8 z" />
    <path d="M12 2 v3 M10 4 h4" />
  </svg>
);

const RevealNames = () => (
  <>
    <RevealItem as="h2" custom={2} className="bride-name shimmer">
      <span data-testid="bride-name">Saniya</span>
    </RevealItem>

    <RevealItem custom={3} className="amp">
      <span className="amp-line" />
      <motion.span
        className="amp-symbol amp-heart"
        animate={HEART_PULSE}
        transition={HEART_PULSE_TRANSITION}
      >
        <HeartIcon size={28} />
      </motion.span>
      <span className="amp-line" />
    </RevealItem>

    <RevealItem as="h2" custom={4} className="groom-name shimmer">
      <span data-testid="groom-name">Mubeen</span>
    </RevealItem>
  </>
);

const RevealDetails = ({ onScroll }) => (
  <>
    <RevealItem as="p" custom={6} className="reveal-meta">
      <span className="meta-strong">Friday, 25 December 2026</span>
      <span className="meta-dot">•</span>
      <span>After Ṣalāt-ul-ʿAṣr</span>
    </RevealItem>

    <RevealItem as="p" custom={6.5} className="reveal-venue">
      <MosqueIcon />
      <span>Badi Masjid, Karwar</span>
    </RevealItem>

    <motion.button
      type="button"
      className="scroll-cta"
      data-testid="scroll-more-btn"
      onClick={onScroll}
      variants={revealItemVariants}
      custom={7}
      initial="hidden"
      animate="show"
      whileHover={SCROLL_CTA_HOVER}
    >
      <span>Scroll for the full invitation</span>
      <motion.span
        animate={SCROLL_ARROW_ANIMATE}
        transition={HEART_PULSE_TRANSITION}
        aria-hidden
      >
        ↓
      </motion.span>
    </motion.button>
  </>
);

export const RevealPanel = ({ show, onScroll }) => (
  <AnimatePresence>
    {show && (
      <div className="reveal-panel-anchor" data-testid="reveal-panel-anchor">
        <motion.div
          className="reveal-panel"
          data-testid="reveal-panel"
          initial={REVEAL_PANEL_INITIAL}
          animate={REVEAL_PANEL_ANIMATE}
          exit={REVEAL_PANEL_EXIT}
        >
          <div className="reveal-inner">
            <RevealItem custom={0} className="moon-star">
              <MoonStarIcon />
            </RevealItem>
            <RevealItem as="p" custom={1} className="reveal-kicker">
              With the blessings of Allah ﷻ
            </RevealItem>
            <RevealNames />
            <FloatingHearts />
            <RevealItem custom={5}>
              <Ornate />
            </RevealItem>
            <RevealDetails onScroll={onScroll} />
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export const Section = ({ children, className = "", testId }) => (
  <section data-testid={testId} className={`section ${className}`}>
    <div className="section-inner">{children}</div>
  </section>
);
