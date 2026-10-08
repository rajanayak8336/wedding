
import React, { useEffect, useRef } from "react";
import "./Music.css";

export default function Music({ src, playing, setPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.play().catch(() => {
        setPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [playing, src, setPlaying]);

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
      />

      <button
        className={`music-button ${playing ? "is-playing" : ""}`}
        onClick={() => setPlaying((current) => !current)}
        aria-label={playing ? "Pause wedding music" : "Play wedding music"}
        title={playing ? "Pause music" : "Play music"}
      >
        <span>{playing ? "Ⅱ" : "♫"}</span>

        <div className="music-bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
      </button>
    </>
  );
}