// Imported the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //Establish your applictaion's state with some useState hooks.
  const [home, setHomeScore] = useState(0);
  const [away, setAwayScore] = useState(0);
  console.log('Home: ', home);
  console.log('Away: ', away);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* Changed the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(home + 7)}>
            Home Touchdown
            </button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(home + 3)}>
            Home Field Goal
            </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(away + 7)}>
            Away Touchdown
            </button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(away + 3)}>
            Away Field Goal
            </button>
        </div>
      </section>
    </div>
  );
}

export default App;
