import React from 'react'

export default function CardSlot1(props) {
  return (
    <>
    <div className='myCard'>
        <h1>{props.heading}</h1>
        <img src={props.cardImg} />
        <h2>{props.pName}</h2>
    </div>
    </>
  )
}
