import React from 'react'

export default function Button({typeClick, text, voteImg, param}) {
  return (
    <>
    <button className={param} onClick={typeClick}>{voteImg}  {text}</button>
    </>
  )
}
