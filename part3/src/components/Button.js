import React from 'react'

export default function Button({typeClick1, typeClick2, typeClick3}) {
  return (
    <div>
    <button onClick={typeClick1} >Good</button>
    <button onClick={typeClick2} >Neutral</button>
    <button onClick={typeClick3} >Bad</button>
    </div>
  )
}
