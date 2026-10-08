
import React from "react";
import { wedding } from "./data";
import "./Opening.css";

export default function Opening({ onOpen }) {
  return (
    <section
      className="opening"
      style={{
        "--opening-image": `url("/assets/floral-garden-bg.jpg")`,
      }}
    >
      <div className="opening-content">

        {/* Lord Ganesha */}
        <div className="ganesha-container">
          <img
            src="/assets/ganesh-logo.jpg"
            alt="Lord Ganesha"
            className="ganesha-image"
          />
        </div>

        {/* Ganesh Mantra */}
        <p className="ganesh-mantra">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः
          <br />
          निर्विघ्नं कुरु मे देव शुभ कार्येषु सर्वदा ॥
        </p>

        {/* Shubh Vivah */}
        <p className="shubh-vivah">
          ॐ  | शुभ विवाह | ॐ
        </p>

        {/* Decorative Divider */}
        <div className="opening-divider">
          <span>✦</span>
          <i></i>
          <span>✦</span>
        </div>

        {/* Main Heading */}
        <h1 className="opening-title">
          <span>Wedding</span>
        Invitation
        </h1>

        {/* Open Invitation */}
        <button
          type="button"
          className="open-button"
          onClick={onOpen}
        >
          <span>Click Here to Open </span>
          <span className="button-arrow"></span>
        </button>

        {/* Bottom Hint */}
        <p className="opening-hint">
          A beautiful story awaits you
        </p>

      </div>
    </section>
  );
}
