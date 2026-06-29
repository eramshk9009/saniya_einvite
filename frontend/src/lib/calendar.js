// Wedding event time block (UTC): 25 Dec 2026 16:00–22:00 IST (Asr → end of dinner)
const EVENT_START_UTC = "20261225T103000Z";
const EVENT_END_UTC = "20261225T163000Z";
const EVENT_TITLE = "Saniya weds Mubeen — Nikah & Walima";
const EVENT_DETAILS =
  "Nikah ceremony after Ṣalāt-ul-ʿAṣr at Badi Masjid, Karwar. Walima dinner from 7:00 PM onwards at Gulshan Baug.";
const EVENT_LOCATION = "Badi Masjid, Karwar • Gulshan Baug";

const buildIcs = () => {
  const dtStamp =
    new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Saniya weds Mubeen//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:saniya-mubeen-nikah-2026@invite",
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${EVENT_START_UTC}`,
    `DTEND:${EVENT_END_UTC}`,
    `SUMMARY:${EVENT_TITLE}`,
    "LOCATION:Badi Masjid\\, Karwar (Nikah) • Gulshan Baug (Dinner)",
    `DESCRIPTION:${EVENT_DETAILS.replace(/,/g, "\\,")}`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    "DESCRIPTION:Saniya & Mubeen's Nikah tomorrow",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
};

export const downloadIcs = () => {
  const blob = new Blob([buildIcs()], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Saniya-weds-Mubeen.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export const openGoogleCalendar = () => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${EVENT_START_UTC}/${EVENT_END_UTC}`,
    details: EVENT_DETAILS,
    location: EVENT_LOCATION,
  });
  window.open(
    `https://calendar.google.com/calendar/render?${params.toString()}`,
    "_blank",
    "noopener"
  );
};
