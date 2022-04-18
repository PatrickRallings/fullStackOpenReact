import React, { useState } from "react";
import Button from "./Button.js";
import Header from "./Header.js";
import Votes from "./Votes.js";
import MostPopular from "./MostPopular.js";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const next = () => {
    setSelected(Math.round(Math.random() * 10) % (anecdotes.length - 1));
  };

  const vote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
    console.log()
  };

  const voteImg = <img src="https://www.alachuadems.org/wp-content/uploads/2020/10/icon_checkmark-1.png" height='30px' title='Please vote for your favorite anecdote!' alt="vote checkmark"/>

  return (
    <div className="pt-2">
      <Header />
      <div className='row align-center pt-3'>
        <div className="col-8 pl-5 align-self-center"><h4>"{anecdotes[selected]}"</h4></div>
        <div className="col-4">
          <Votes value={votes[selected]} />
          <Button param='vote' typeClick={vote} text="Vote" voteImg={voteImg} />
        </div>
      </div>
      <Button typeClick={next} text="New Anecdote" />
      <hr />
      <MostPopular top={anecdotes[votes.indexOf(Math.max(...votes))]} value={Math.max(...votes)}/>
    </div>
  );
};

export default App;
