import React from 'react'

export default function Button({typeClick, text}) {
  return (
    <div>
    <button onClick={typeClick} >{text}</button>
    </div>
  )
}
