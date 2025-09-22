"use client";
import { useEffect, useState } from "react";

const now = Date.now();
const startDate = new Date("2025-10-11T10:00:00+09:00").getTime();
const endDate = new Date("2025-10-12T17:00:00+09:00").getTime();

function getTimeRemainingUntilStart() {
  const total = startDate - now;

  if (total <= 0) {
    return { d: 0, hh: 0, mm: 0, ss: 0 };
  }

  const seconds = String(Math.floor((total / 1000) % 60)).padStart(2, "0");
  const minutes = String(Math.floor((total / 1000 / 60) % 60)).padStart(2, "0");
  const hours = String(Math.floor((total / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0",
  );
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { d: days, hh: hours, mm: minutes, ss: seconds };
}

function getTimeRemainingUntilEnd() {
  const total = endDate - now;

  if (total <= 0) {
    return { d: 0, hh: 0, mm: 0, ss: 0 };
  }

  const seconds = String(Math.floor((total / 1000) % 60)).padStart(2, "0");
  const minutes = String(Math.floor((total / 1000 / 60) % 60)).padStart(2, "0");
  const hours = String(Math.floor((total / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0",
  );
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { d: days, hh: hours, mm: minutes, ss: seconds };
}

const CountDown: React.FC = () => {
  const [untilStart, setUntilStart] = useState(getTimeRemainingUntilStart());
  const [untilEnd, setUntilEnd] = useState(getTimeRemainingUntilEnd());

  useEffect(() => {
    const timer = setInterval(() => {
      setUntilStart(getTimeRemainingUntilStart());
      setUntilEnd(getTimeRemainingUntilEnd());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (untilStart.d > 0) {
    return `開催まで${untilStart.d}日`;
  }

  if (untilStart.d === 0) {
    return `開催まで${untilStart.hh}:${untilStart.mm}:${untilStart.ss}`;
  }

  if (untilEnd.d > 0) {
    return `開催中 残り${untilEnd.d}日`;
  }

  if (untilEnd.d === 0) {
    return `開催中 残り${untilEnd.hh}:${untilEnd.mm}:${untilEnd.ss}`;
  }

  return "あきび祭2025は終了しました。また来年お会いしましょう！";
};

export default CountDown;
