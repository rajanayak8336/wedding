import React from "react";
import { wedding } from "./data";
import "./Couple.css";

export default function Couple() {
  return (
    <section id="couple" className="couple section-padding">
      <div className="couple-paper">

        <div className="section-heading">
          <span>OUR STORY</span>

          <h2>Two Hearts</h2>

          <div className="heading-line" />

          <p>
            Two souls, one beautiful journey,
            <br />
            and a lifetime of memories waiting to be created.
          </p>
        </div>

        <div className="couple-grid">

          {/* Groom */}
          <article className="person groom">
            <div className="person-frame">
              <img
                src={wedding.images.groom}
                alt={wedding.groom || "Daivik"}
              />
            </div>

            <h3>{wedding.groom || "Daivik"}</h3>

            <div className="floral-divider">-----❧-----</div>

            <p>SON OF</p>

            <strong>
              {wedding.groomFather || "Mr. Karthik Tandel"}
            </strong>

            <div className="parent-and">&</div>

            <strong>
              {wedding.groomMother || "Mrs. Ajita Tandel"}
            </strong>
          </article>

          {/* Heart between Groom and Bride */}
          <div className="couple-heart" aria-hidden="true">
            ♥
          </div>

          {/* Bride */}
          <article className="person bride">
            <div className="person-frame">
              <img
                src={wedding.images.bride}
                alt={wedding.bride || "Tejaswini"}
              />
            </div>

            <h3>{wedding.bride || "Tejaswini"}</h3>

            <div className="floral-divider">-----❧-----</div>

            <p>DAUGHTER OF</p>

            <strong>
              {wedding.brideFather || "Mr. Nageswara Rao"}
            </strong>

            <div className="parent-and">&</div>

            <strong>
              {wedding.brideMother || "Mrs. Jyothi"}
            </strong>
          </article>

        </div>

        <p className="couple-quote">
          “Together is a beautiful place to be.”
        </p>

        <div className="bottom-divider">
          <span>❧</span>
        </div>

        <div className="leaf-decoration leaf-left">❧</div>
        <div className="leaf-decoration leaf-right">❧</div>

      </div>
    </section>
  );
}