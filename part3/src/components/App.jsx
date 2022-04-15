import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
    if ((good+bad+neutral)===0) {
      return (
      <div>
        <h3>The app currently has no data</h3>
      </div>
      )
    }
    else {
      return (
<div>
<h2>Statistics</h2>
      <hr />
      <span><p><b>Good: </b>{good}</p></span>
      <span><p><b>Neutral: </b>{neutral}</p></span>
      <span><p><b>Bad: </b>{bad}</p></span>
      <span><p><b>Total: </b>{good+neutral+bad}</p></span>
      <span><p><b>Average: </b>{((good*1)+(neutral*0)+(bad*-1))/(good+neutral+bad)}</p></span>
      <span><p><b>% Positive: </b>{good/(good+neutral+bad)*100}</p></span>
</div>
      )
    }
}

const Button = ({typeClick1, typeClick2, typeClick3}) => {
  return (
    <div>
    <button onClick={typeClick1} >Good</button>
    <button onClick={typeClick2} >Neutral</button>
    <button onClick={typeClick3} >Bad</button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <hr />
      <h4><i>(Select one)</i></h4>
      <Button typeClick1={goodClick} typeClick2={neutralClick} typeClick3={badClick}/>
      <hr />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
