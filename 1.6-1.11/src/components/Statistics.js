import React from "react";
import StatisticsLine from "./StatisticsLine.js";

export default function Statistics({ good, neutral, bad }) {
  if (good + bad + neutral === 0) {
    return (
      <div>
        <h3>
          <i>Please provide feedback</i>
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <hr />
        <table className="tg">
          <thead>
              <StatisticsLine text="Good: " value={good} />
              <StatisticsLine text="Neutral: " value={neutral} />
              <StatisticsLine text="Bad: " value={bad} />
              <StatisticsLine text="Total: " value={good + neutral + bad} />
              <StatisticsLine
                text="Average: "
                value={(
                  (good * 1 + neutral * 0 + bad * -1) /
                  (good + neutral + bad)
                ).toFixed(2)}
              />
              <StatisticsLine
                text="Positive: "
                value={((good / (good + neutral + bad)) * 100).toFixed(2)}
              />
          </thead>
        </table>
      </div>
    );
  }
}
