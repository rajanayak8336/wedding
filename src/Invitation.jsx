
import React from "react";
import { wedding } from "./data";
import "./Invitation.css";

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="invitation"
      style={{
        "--invitation-bg": `url("/assets/groom-bride.png")`,
      }}
    >
      <div className="invitation-content">

        <p className="ganesha-quote">
          With the blessings of Lord Ganesha
        </p>

        <p className="invitation-welcome">
          We warmly invite you
          <br />
          to celebrate our wedding
        </p>

        <h1 className="invitation-names">
          <span className="groom-name">
            {wedding.groom}
          </span>

          <span className="and-symbol">
            &
          </span>

          <span className="bride-name">
            {wedding.bride}
          </span>
        </h1>

        <div className="invitation-info">
          <p>10<sup>th</sup> {wedding.weddingDate}</p>
          <p>{wedding.weddingDay}</p>
          <p>{wedding.weddingTime} pm</p>
          <p>{wedding.venue}</p>
          <p>{wedding.city}</p>
        </div>

      </div>

      <a className="swipe-link" href="#couple">
        <span className="swipe-arrow">↑</span>
        <strong>Swipe Up</strong>
        <small>Explore Our Celebration</small>
      </a>
    </section>
  );
}
