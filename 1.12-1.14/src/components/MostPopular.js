import React from "react";

export default function MostPopular({ top, value }) {
  if (value === 0) {
    return (
      <>
        <h2>Most Popular Anecdote</h2>
        <hr className="votesHR" />
        <div className="col mt-2 votes">
          <h3>
            <i>There are currently no votes</i>
          </h3>
        </div>
      </>
    );
  } else if (value === 1) {
    return (
      <>
        <h2>Most Popular Anecdote</h2>
        <h5 className="col mt-2 votes">
          <i>(with {value} vote)</i>
        </h5>
        <hr className="votesHR" />
        <div className="col mt-4">
          <h2>"{top}"</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Most Popular Anecdote</h2>
        <h5 className="col mt-2 votes">
          <i>(with {value} votes)</i>
        </h5>
        <hr className="votesHR" />
        <div className="col mt-4">
          <h2>"{top}"</h2>
        </div>
      </>
    );
  }
}