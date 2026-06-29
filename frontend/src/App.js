import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import "@/App.css";

const NASHEED_URL = "https://archive.org/download/y-2mate.com-new-wedding-nasheed-music-free-muhammad-al-muqit/y2mate.com%20-%20New%20Wedding%20Nasheed%20Music%20Free%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D9%85%D9%82%D9%8A%D8%B7%20%D8%B9%D8%B1%D9%88%D8%B3%D8%A9%20%D8%A7%D9%84%D9%86%D9%88%D8%B1%20Muhammad%20al%20Muqit.mp3";

const HeartIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
    <path
      d="M16 28 L4.5 16.6 a7 7 0 0 1 9.9 -9.9 L16 8.2 l1.6 -1.5 a7 7 0 0 1 9.9 9.9 Z"
      fill="currentColor"
      stroke="rgba(0,0,0,0.25)"
      strokeWidth="0.6"
    />
  </svg>
);

const FloatingHearts = () => {
  const hearts = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: (i * 71) % 100,
    delay: (i * 0.5) % 6,
    duration: 6 + (i % 5),
    size: 14 + ((i * 7) % 18),
  }));
  return (
    <div className="hearts-layer" aria-hidden="true" data-testid="hearts-layer">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-float"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            color: h.id % 3 === 0 ? "#f4d160" : h.id % 3 === 1 ? "#ffb6b6" : "#e9c971",
          }}
        >
          <HeartIcon size={h.size} />
        </span>
      ))}
    </div>
  );
};

const AudioToggle = ({ playing, onToggle }) => (
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
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
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

const ORNATE = (
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

const Arabesque = () => (
  <svg viewBox="0 0 100 100" className="arabesque" aria-hidden="true">
    <defs>
      <pattern id="ara" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="10" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="0.4" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#ara)" />
  </svg>
);

const FloatingParticles = () => (
  <div className="particles" aria-hidden="true">
    {Array.from({ length: 24 }).map((_, i) => (
      <span
        key={i}
        className="particle"
        style={{
          left: `${(i * 37) % 100}%`,
          animationDelay: `${(i * 0.6) % 8}s`,
          animationDuration: `${8 + (i % 6)}s`,
        }}
      />
    ))}
  </div>
);

const PalaceGates = ({ onEnter, opened }) => {
  return (
    <div className="gates-wrapper" data-testid="palace-gates">
      <div className={`gate gate-left ${opened ? "gate-open" : ""}`}>
        <div className="gate-inner">
          <div className="gate-arch-top" />
          <div className="gate-panel">
            <div className="gate-medallion" />
            <div className="gate-medallion gate-medallion-sm" />
            <div className="gate-medallion gate-medallion-sm gate-medallion-bottom" />
          </div>
          <div className="gate-knocker" />
        </div>
      </div>
      <div className={`gate gate-right ${opened ? "gate-open" : ""}`}>
        <div className="gate-inner">
          <div className="gate-arch-top" />
          <div className="gate-panel">
            <div className="gate-medallion" />
            <div className="gate-medallion gate-medallion-sm" />
            <div className="gate-medallion gate-medallion-sm gate-medallion-bottom" />
          </div>
          <div className="gate-knocker" />
        </div>
      </div>

      <AnimatePresence>
        {!opened && (
          <div className="gate-cta-anchor">
            <motion.div
              className="gate-cta"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.5 } }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <motion.div
                className="bismillah-top"
                lang="ar"
                animate={{ textShadow: [
                  "0 0 18px rgba(212,175,55,0.45)",
                  "0 0 32px rgba(212,175,55,0.85)",
                  "0 0 18px rgba(212,175,55,0.45)",
                ] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
              </motion.div>
              <h1 className="invite-title">A Royal Invitation</h1>
              <p className="invite-sub">The honour of your presence is humbly requested</p>
              <motion.button
                data-testid="enter-palace-btn"
                onClick={onEnter}
                className="enter-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Enter the Palace</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
              <motion.p
                className="scroll-hint"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                Knock the doors to begin
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------- Reveal panel shown immediately when doors open ---------- */
const RevealPanel = ({ show, onScroll }) => {
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.25, duration: 0.9, ease: "easeOut" },
    }),
  };
  return (
    <AnimatePresence>
      {show && (
        <div className="reveal-panel-anchor" data-testid="reveal-panel-anchor">
          <motion.div
            className="reveal-panel"
            data-testid="reveal-panel"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.9, duration: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            <div className="reveal-inner">
            <motion.div className="moon-star" variants={item} custom={0} initial="hidden" animate="show">
              <svg viewBox="0 0 80 80" width="56" height="56">
                <path d="M50 12a28 28 0 1 0 0 56 22 22 0 1 1 0-56z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M62 38 l3.5 7.5 L73 47 l-5.5 5 1.3 7.5L62 56l-6.8 3.5L56.5 52 51 47l7.5-1.5z" fill="currentColor" />
              </svg>
            </motion.div>

            <motion.p className="reveal-kicker" variants={item} custom={1} initial="hidden" animate="show">
              With the blessings of Allah ﷻ
            </motion.p>

            <motion.h2 className="bride-name shimmer" data-testid="bride-name" variants={item} custom={2} initial="hidden" animate="show">
              Saniya
            </motion.h2>

            <motion.div className="amp" variants={item} custom={3} initial="hidden" animate="show">
              <span className="amp-line" />
              <motion.span
                className="amp-symbol amp-heart"
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <HeartIcon size={28} />
              </motion.span>
              <span className="amp-line" />
            </motion.div>

            <motion.h2 className="groom-name shimmer" data-testid="groom-name" variants={item} custom={4} initial="hidden" animate="show">
              Mubeen
            </motion.h2>

            <FloatingHearts />

            <motion.div variants={item} custom={5} initial="hidden" animate="show">
              {ORNATE}
            </motion.div>

            <motion.p className="reveal-meta" variants={item} custom={6} initial="hidden" animate="show">
              <span className="meta-strong">Friday, 25 December 2026</span>
              <span className="meta-dot">•</span>
              <span>After Ṣalāt-ul-ʿAṣr</span>
            </motion.p>

            <motion.p className="reveal-venue" variants={item} custom={6.5} initial="hidden" animate="show">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 2 L4 8 v12 h5 v-7 h6 v7 h5 V8 z" />
                <path d="M12 2 v3 M10 4 h4" />
              </svg>
              <span>Badi Masjid, Karwar</span>
            </motion.p>

            <motion.button
              type="button"
              className="scroll-cta"
              data-testid="scroll-more-btn"
              onClick={onScroll}
              variants={item}
              custom={7}
              initial="hidden"
              animate="show"
              whileHover={{ y: -3 }}
            >
              <span>Scroll for the full invitation</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                ↓
              </motion.span>
            </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Section = ({ children, className = "", testId }) => (
  <section data-testid={testId} className={`section ${className}`}>
    <div className="section-inner">{children}</div>
  </section>
);

const Home = () => {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const contentRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroFade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleEnter = async () => {
    setOpened(true);
    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.55;
        await audioRef.current.play();
        setPlaying(true);
      } catch (_e) {
        /* autoplay may be blocked — user can use toggle */
      }
    }
  };

  const toggleAudio = async () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        audioRef.current.volume = 0.55;
        await audioRef.current.play();
        setPlaying(true);
      } catch (_e) {
        setPlaying(false);
      }
    }
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addToCalendar = () => {
    // 25 Dec 2026, India (UTC+5:30). Asr in Karwar in Dec ≈ 16:00 local.
    // Event: Nikah after Asr → Walima dinner until 22:00.
    // Stored in UTC: 16:00 IST = 10:30 UTC, 22:00 IST = 16:30 UTC.
    const dtStart = "20261225T103000Z";
    const dtEnd = "20261225T163000Z";
    const dtStamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Saniya weds Mubeen//Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:saniya-mubeen-nikah-2026@invite",
      `DTSTAMP:${dtStamp}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      "SUMMARY:Saniya weds Mubeen — Nikah & Walima",
      "LOCATION:Badi Masjid\\, Karwar (Nikah) • Gulshan Baug (Dinner)",
      "DESCRIPTION:Nikah ceremony after Ṣalāt-ul-ʿAṣr at Badi Masjid\\, Karwar.\\nWalima dinner from 7:00 PM onwards at Gulshan Baug.\\nYour duʿās and presence are our greatest gift.",
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      "DESCRIPTION:Saniya & Mubeen's Nikah tomorrow",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Saniya-weds-Mubeen.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const openGoogleCalendar = () => {
    const start = "20261225T103000Z";
    const end = "20261225T163000Z";
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: "Saniya weds Mubeen — Nikah & Walima",
      dates: `${start}/${end}`,
      details:
        "Nikah ceremony after Ṣalāt-ul-ʿAṣr at Badi Masjid, Karwar. Walima dinner from 7:00 PM onwards at Gulshan Baug.",
      location: "Badi Masjid, Karwar • Gulshan Baug",
    });
    window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, "_blank", "noopener");
  };

  useEffect(() => {
    document.title = "Saniya weds Mubeen — A Royal Nikah";
  }, []);

  return (
    <div className="royal-root" data-testid="royal-root">
      <audio
        ref={audioRef}
        src={NASHEED_URL}
        loop
        preload="auto"
        crossOrigin="anonymous"
        data-testid="nasheed-audio"
      />
      <AudioToggle playing={playing} onToggle={toggleAudio} />

      {/* HERO with gates */}
      <motion.div ref={heroRef} style={{ opacity: heroFade }} className="hero">
        <div className="hero-bg" />
        <FloatingParticles />
        <PalaceGates opened={opened} onEnter={handleEnter} />
        <RevealPanel show={opened} onScroll={scrollToContent} />
        <div className="hero-foreground" aria-hidden="true">
          <div className="hero-arch-frame" />
        </div>
      </motion.div>

      {/* CONTENT */}
      <main ref={contentRef} className="content">
        <Arabesque />

        <Section testId="bismillah-section" className="center bismillah-section">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
          >
            <motion.div
              className="bismillah"
              lang="ar"
              animate={{ textShadow: [
                "0 0 18px rgba(212,175,55,0.25)",
                "0 0 36px rgba(212,175,55,0.6)",
                "0 0 18px rgba(212,175,55,0.25)",
              ] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
            </motion.div>
            <p className="bismillah-trans">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
            {ORNATE}
            <p className="ayat">
              “And of His signs is that He created for you from yourselves mates that
              you may find tranquillity in them; and He placed between you affection
              and mercy.”
            </p>
            <p className="ayat-ref">— Surah Ar-Rūm, 30:21</p>
          </motion.div>
        </Section>

        <Section testId="date-section" className="center date-section">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="arch-card">
              <p className="small-label">Save the Date</p>
              <div className="date-grand">
                <span className="date-day">Friday</span>
                <div className="date-numerals">
                  <motion.span
                    className="date-num"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    25
                  </motion.span>
                  <div className="date-month-year">
                    <span className="date-month">December</span>
                    <span className="date-year">2026</span>
                  </div>
                </div>
              </div>
              {ORNATE}
              <p className="time-line"><span>Ceremony commences</span></p>
              <p className="time-grand" data-testid="time">After Ṣalāt-ul-ʿAṣr</p>
              <p className="time-sub">Following the Asr prayer, in-shāʾ-Allāh</p>
            </div>
          </motion.div>
        </Section>

        <Section testId="event-section" className="center event-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="event-card">
              <motion.div
                className="event-emblem"
                aria-hidden="true"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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

        <Section testId="venue-section" className="center venue-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
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
            </div>
          </motion.div>
        </Section>

        <Section testId="dinner-section" className="center dinner-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="small-label">Walima Dinner</p>
            <div className="dinner-card">
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
              <p className="dinner-title" data-testid="dinner-title">Dinner Reception</p>
              <p className="dinner-time" data-testid="dinner-time">7:00 PM Onwards</p>
              <div className="dinner-venue-row">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 2 L4 8 v12 h5 v-7 h6 v7 h5 V8 z" />
                  <path d="M12 2 v3 M10 4 h4" />
                </svg>
                <span data-testid="dinner-venue">Gulshan Baug</span>
              </div>
              <p className="dinner-note">
                Kindly join us for a feast of celebration following the Nikah ceremony. Your presence will complete our joy.
              </p>
              <div className="calendar-actions">
                <button
                  type="button"
                  className="cal-btn cal-btn-primary"
                  data-testid="add-to-calendar-btn"
                  onClick={addToCalendar}
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
            </div>
          </motion.div>
        </Section>

        <Section testId="closing-section" className="center closing">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            {ORNATE}
            <p className="dua" lang="ar">
              بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِيْ خَيْرٍ
            </p>
            <p className="dua-trans">
              “May Allah bless you, and shower His blessings upon you, and unite you both in goodness.”
            </p>
            {ORNATE}
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

        <footer className="footer" data-testid="footer">
          <p>وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
        </footer>
      </main>
    </div>
  );
};

function App() {
  return <Home />;
}

export default App;
