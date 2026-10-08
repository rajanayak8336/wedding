
import React, { useEffect, useState } from "react";
import { wedding } from "./data";
import "./Venue.css";

export default function Venue() {
  const [remaining, setRemaining] = useState({});

  useEffect(() => {
    // Local wedding time: India Standard Time (UTC+05:30).
    const target = new Date("2026-12-10T19:37:00+05:30").getTime();

    function updateCountdown() {
      const difference = Math.max(0, target - Date.now());

      setRemaining({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="venue-section">
      <div className="venue-container">

        {/* VENUE HEADING */}
        <div className="section-heading">
          <span>WE WOULD LOVE TO SEE YOU</span>

          <h2>Find Our Venue</h2>

          <div className="heading-line" />
        </div>

        {/* VENUE DETAILS */}
        <div className="venue-details">
          <p className="venue-name">{wedding.venue}</p>

          <p>{wedding.city}</p>

          <a
            className="direction-button"
            href={wedding.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>⌖</span>
            Get Directions
          </a>
        </div>

        {/* COUNTDOWN */}
        <div className="countdown-panel">
          <p>COUNTING DOWN TO FOREVER</p>

          <div className="countdown-grid">
            {[
              ["Days", remaining.days],
              ["Hours", remaining.hours],
              ["Minutes", remaining.minutes],
              ["Seconds", remaining.seconds]
            ].map(([label, value]) => (
              <div className="countdown-item" key={label}>
                <strong>
                  {String(value ?? 0).padStart(2, "0")}
                </strong>

                <span>{label}</span>
              </div>
            ))}
          </div>

          <small>
            {wedding.weddingDate} · {wedding.weddingTime}
          </small>
        </div>

        {/* WARM REGARDS */}
        <div className="warm-regards">
          <span>WITH LOVE AND BLESSINGS</span>

          <h3>
            The
            <br />
            <strong>Dharavath &amp; Tandel</strong>
          </h3>

          <p>
            Two hearts, two families, and one beautiful journey.
            <br />
            with the love and blessings of our families,
            <br />
            we invite you to be a part of the moments
            <br />
            that will become memories for a lifetime.
            <br />
            <br />
            -------♥︎-------
            <br />
            <br />
            Your presence will make our celebration complete.
          </p>
        </div>

      </div>
    </section>
  );
}
