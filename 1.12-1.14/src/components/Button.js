import React from 'react'

export default function Button({typeClick, text}) {
  return (
    <>
    <button onClick={typeClick} >{text}</button>
    </>
  )
}
