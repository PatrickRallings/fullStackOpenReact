import React from 'react'

export default function Button({typeClick, text, voteImg}) {
  return (
    <>
    <button onClick={typeClick}>{voteImg}  {text}</button>
    </>
  )
}
