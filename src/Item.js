import React from 'react'

const Item = (props) => {
  const {item} = props
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  )
}

export default Item