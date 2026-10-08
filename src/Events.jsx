
import React, { useEffect, useRef, useState } from "react";
import { wedding } from "./data";
import "./Events.css";

export default function Events() {
  const events = wedding.events;
  const [active, setActive] = useState(0);
  const eventRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          const index = Number(
            visibleEntries[0].target.dataset.index
          );

          setActive(index);
        }
      },
      {
        threshold: [0.35, 0.5, 0.7],
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    eventRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToEvent = (index) => {
    eventRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="events" id="events">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="events-header">

        <span className="events-small-title">
          OUR CELEBRATION
        </span>

        <p>
          Join us as we celebrate every beautiful moment
          together.
        </p>

      </div>


      {/* =====================================================
          EVENTS ROADMAP
      ===================================================== */}

      <div className="events-roadmap">

        {/* ROADMAP LINE */}

        <div className="roadmap-line">

          <div
            className="roadmap-progress"
            style={{
              height: `${
                (active / Math.max(events.length - 1, 1)) * 100
              }%`,
            }}
          />

        </div>


        {/* ===================================================
            EVENTS
        =================================================== */}

        {events.map((event, index) => (

          <div
            key={event.name}
            ref={(element) => {
              eventRefs.current[index] = element;
            }}
            data-index={index}
            className={`event-item ${
              index % 2 === 0
                ? "event-left"
                : "event-right"
            } ${
              active === index ? "active" : ""
            }`}
          >

            {/* EVENT CONTENT */}

            <div className="event-content">


              {/* EVENT INFORMATION FIRST */}

              <div className="event-info">

                <h3>{event.name}</h3>

                <h4>{event.subtitle}</h4>

                <p className="event-quote">
                  “{event.quote}”
                </p>

                <div className="event-date">

                  <span>{event.date}</span>

                  <span>{event.time}</span>

                </div>

              </div>


              {/* EVENT IMAGE SECOND */}

              <div className="event-image">

                <img
                  src={event.image}
                  alt={event.name}
                />

              </div>

            </div>


            {/* ROADMAP DOT */}

            <button
              className={`roadmap-dot ${
                active === index
                  ? "selected"
                  : ""
              }`}
              onClick={() => scrollToEvent(index)}
              aria-label={`Go to ${event.name}`}
            >

              <span />

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}
