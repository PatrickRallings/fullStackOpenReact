import { useState } from 'react'
import Button from './Button.js'
import Statistics from './Statistics.js'

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
