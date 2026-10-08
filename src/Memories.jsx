import React from "react";
import { wedding } from "./data";
import "./Memories.css";

export default function Memories() {
  return (
    <section className="memories">
      <div className="section-heading">
        <span>OUR LITTLE WORLD</span>
        <h2>Moments of Love</h2>
        <div className="heading-line" />
        <p>
          A collection of beautiful moments
          <br />
          from our journey of love.
        </p>
      </div>

      <div className="memories-grid">
        {wedding.videos.map((video) => (
          <article className="memory-card" key={video}>
            <div className="memory-frame">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </article>
        ))}
      </div>

      <footer className="memories-footer">
        <div>✦ ❧ ✦</div>

        <p>
          Thank you for being part of our story.
          <br />
          We look forward to celebrating with you.
        </p>
      </footer>
    </section>
  );
}