
import React, { useState } from "react";
import { wedding } from "./data";

import Opening from "./Opening";
import Invitation from "./Invitation";
import Couple from "./Couple";
import Events from "./Events";
import Venue from "./Venue";
import Memories from "./Memories";
import Music from "./Music";

import "./App.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  function openInvitation() {
    setOpened(true);
    setMusicPlaying(true);

    // Scroll to the invitation after opening.
    setTimeout(() => {
      document.getElementById("invitation")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }

  return (
    <main className="app">
      {!opened && <Opening onOpen={openInvitation} />}

      {opened && (
        <div className="wedding-content">
          <Invitation />
          <Couple />
          <Events />
          <Venue />
          <Memories />
        </div>
      )}

      {opened && (
        <Music
          src={wedding.music}
          playing={musicPlaying}
          setPlaying={setMusicPlaying}
        />
      )}
    </main>
  );
}