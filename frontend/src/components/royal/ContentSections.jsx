import { motion } from "framer-motion";
import { Section, Ornate } from "@/components/royal/RoyalUI";
import {
  FADE_UP_BIG_INITIAL,
  FADE_UP_INITIAL,
  FADE_UP_ANIMATE,
  FADE_SCALE_INITIAL,
  FADE_SCALE_ANIMATE,
  FADE_IN_INITIAL,
  FADE_IN_ANIMATE,
  VIEWPORT_ONCE,
  GLOW_TEXT_SHADOW_BISMILLAH,
  GLOW_TRANSITION_45,
  DATE_NUM_ANIMATE,
  DATE_NUM_TRANSITION,
  EMBLEM_ROTATE,
  EMBLEM_TRANSITION,
} from "@/lib/motionVariants";
import { downloadIcs, openGoogleCalendar } from "@/lib/calendar";

const MAP_URL = "https://maps.app.goo.gl/n4ComNLeAwLZ63vd8";

const TRANSITION_1 = { duration: 1 };
const TRANSITION_11 = { duration: 1.1 };
const TRANSITION_12 = { duration: 1.2 };

export const BismillahSection = () => (
  <Section testId="bismillah-section" className="center bismillah-section">
    <motion.div
      initial={FADE_UP_BIG_INITIAL}
      whileInView={FADE_UP_ANIMATE}
      viewport={VIEWPORT_ONCE}
      transition={TRANSITION_11}
    >
      <motion.div
        className="bismillah"
        lang="ar"
        animate={GLOW_TEXT_SHADOW_BISMILLAH}
        transition={GLOW_TRANSITION_45}
      >
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
      </motion.div>
      <p className="bismillah-trans">
        In the name of Allah, the Most Gracious, the Most Merciful
      </p>
      <Ornate />
      <p className="ayat">
        “And of His signs is that He created for you from yourselves mates that
        you may find tranquillity in them; and He placed between you affection
        and mercy.”
      </p>
      <p className="ayat-ref">— Surah Ar-Rūm, 30:21</p>
    </motion.div>
  </Section>
);

export const DateSection = () => (
  <Section testId="date-section" className="center date-section">
    <motion.div
      initial={FADE_SCALE_INITIAL}
      whileInView={FADE_SCALE_ANIMATE}
      viewport={VIEWPORT_ONCE}
      transition={TRANSITION_1}
    >
      <div className="arch-card">
        <p className="small-label">Save the Date</p>
        <div className="date-grand">
          <span className="date-day">Friday</span>
          <div className="date-numerals">
            <motion.span
              className="date-num"
              animate={DATE_NUM_ANIMATE}
              transition={DATE_NUM_TRANSITION}
            >
              25
            </motion.span>
            <div className="date-month-year">
              <span className="date-month">December</span>
              <span className="date-year">2026</span>
            </div>
          </div>
        </div>
        <Ornate />
        <p className="time-line"><span>Ceremony commences</span></p>
        <p className="time-grand" data-testid="time">After Ṣalāt-ul-ʿAṣr</p>
        <p className="time-sub">Following the Asr prayer, in-shāʾ-Allāh</p>
      </div>
    </motion.div>
  </Section>
);

export const EventSection = () => (
  <Section testId="event-section" className="center event-section">
    <motion.div
      initial={FADE_UP_INITIAL}
      whileInView={FADE_UP_ANIMATE}
      viewport={VIEWPORT_ONCE}
      transition={TRANSITION_1}
    >
      <div className="event-card">
        <motion.div
          className="event-emblem"
          aria-hidden="true"
          animate={EMBLEM_ROTATE}
          transition={EMBLEM_TRANSITION}
        >
          <svg viewBox="0 0 80 80" width="80" height="80">
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="40" cy="40" r="32" />
              <circle cx="40" cy="40" r="24" />
              <path d="M40 12 L46 34 L68 34 L50 48 L56 70 L40 56 L24 70 L30 48 L12 34 L34 34 Z" />
            </g>
          </svg>
        </motion.div>
        <p className="event-title">The Nikah Ceremony</p>
        <p className="event-desc">
          A sacred covenant, witnessed by loved ones and blessed by the Almighty.
          Your duʿās are our greatest gift.
        </p>
      </div>
    </motion.div>
  </Section>
);

export const VenueSection = () => (
  <Section testId="venue-section" className="center venue-section">
    <motion.div
      initial={FADE_UP_INITIAL}
      whileInView={FADE_UP_ANIMATE}
      viewport={VIEWPORT_ONCE}
      transition={TRANSITION_1}
    >
      <p className="small-label">The Venue</p>
      <div className="venue-card">
        <div className="venue-mosque" aria-hidden="true">
          <svg viewBox="0 0 120 80" width="120" height="80">
            <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
              <path d="M60 6 v8 M56 10 h8" />
              <circle cx="60" cy="22" r="6" />
              <path d="M40 78 V44 a20 20 0 0 1 40 0 V78 Z" />
              <path d="M50 78 V60 a10 10 0 0 1 20 0 V78" />
              <path d="M22 78 V52 a8 8 0 0 1 16 0 V78" />
              <path d="M82 78 V52 a8 8 0 0 1 16 0 V78" />
              <path d="M30 48 v-6 M30 42 a4 4 0 0 1 -4 -4 M30 42 a4 4 0 0 0 4 -4" />
              <path d="M90 48 v-6 M90 42 a4 4 0 0 1 -4 -4 M90 42 a4 4 0 0 0 4 -4" />
              <path d="M16 78 H104" />
            </g>
          </svg>
        </div>
        <p className="venue-name" data-testid="venue-name">Badi Masjid</p>
        <p className="venue-city">Karwar</p>
        <p className="venue-note">
          Please join us at the masjid following the Aṣr prayer for the Nikah ceremony.
        </p>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
          data-testid="venue-map-link"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" />
            <circle cx="12" cy="9" r="2.6" />
          </svg>
          <span>View on Google Maps</span>
        </a>
      </div>
    </motion.div>
  </Section>
);

const EXTERNAL_LINK_STYLE = { opacity: 0.75 };

const DinnerEmblem = () => (
  <div className="dinner-emblem" aria-hidden="true">
    <svg viewBox="0 0 80 80" width="72" height="72">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
        <path d="M20 40 a20 20 0 0 1 40 0" />
        <path d="M14 44 H66" />
        <path d="M40 40 v-10" />
        <path d="M36 30 a4 4 0 0 1 8 0" />
        <path d="M18 50 q22 14 44 0" />
        <circle cx="40" cy="62" r="1.5" fill="currentColor" />
        <path d="M30 16 v6 M40 12 v8 M50 16 v6" />
      </g>
    </svg>
  </div>
);

const DinnerVenueLink = () => (
  <a
    href={MAP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="dinner-venue-row dinner-venue-link"
    data-testid="dinner-venue"
  >
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 2 L4 8 v12 h5 v-7 h6 v7 h5 V8 z" />
      <path d="M12 2 v3 M10 4 h4" />
    </svg>
    <span>Gulshan Baug</span>
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      style={EXTERNAL_LINK_STYLE}
    >
      <path d="M7 17L17 7 M9 7h8v8" />
    </svg>
  </a>
);

const CalendarButtons = () => (
  <div className="calendar-actions">
    <button
      type="button"
      className="cal-btn cal-btn-primary"
      data-testid="add-to-calendar-btn"
      onClick={downloadIcs}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18 M8 3v4 M16 3v4 M12 13v5 M9.5 15.5h5" />
      </svg>
      <span>Add to Calendar</span>
    </button>
    <button
      type="button"
      className="cal-btn cal-btn-ghost"
      data-testid="add-to-google-calendar-btn"
      onClick={openGoogleCalendar}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 12h14 M13 6l6 6-6 6" />
      </svg>
      <span>Google Calendar</span>
    </button>
  </div>
);

export const DinnerSection = () => (
  <Section testId="dinner-section" className="center dinner-section">
    <motion.div
      initial={FADE_UP_INITIAL}
      whileInView={FADE_UP_ANIMATE}
      viewport={VIEWPORT_ONCE}
      transition={TRANSITION_1}
    >
      <p className="small-label">Walima Dinner</p>
      <div className="dinner-card">
        <DinnerEmblem />
        <p className="dinner-title" data-testid="dinner-title">Dinner Reception</p>
        <p className="dinner-time" data-testid="dinner-time">7:00 PM Onwards</p>
        <DinnerVenueLink />
        <p className="dinner-note">
          Kindly join us for a feast of celebration following the Nikah ceremony.
          Your presence will complete our joy.
        </p>
        <CalendarButtons />
      </div>
    </motion.div>
  </Section>
);

export const ClosingSection = () => (
  <Section testId="closing-section" className="center closing">
    <motion.div
      initial={FADE_IN_INITIAL}
      whileInView={FADE_IN_ANIMATE}
      viewport={VIEWPORT_ONCE}
      transition={TRANSITION_12}
    >
      <Ornate />
      <p className="dua" lang="ar">
        بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِيْ خَيْرٍ
      </p>
      <p className="dua-trans">
        “May Allah bless you, and shower His blessings upon you, and unite you both in goodness.”
      </p>
      <Ornate />
      <p className="signoff">With love &amp; the warmest of welcomes —</p>
      <p className="family">The Families of Saniya &amp; Mubeen</p>
      <div className="crown" aria-hidden="true">
        <svg viewBox="0 0 64 32" width="64" height="32">
          <path d="M2 28 L10 8 L20 22 L32 4 L44 22 L54 8 L62 28 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="10" cy="8" r="2.2" fill="currentColor" />
          <circle cx="32" cy="4" r="2.6" fill="currentColor" />
          <circle cx="54" cy="8" r="2.2" fill="currentColor" />
        </svg>
      </div>
    </motion.div>
  </Section>
);
