import React from 'react'

const categories = (props) => {
  const {category, setCurrentCategory} = props
  return (
    <div>
      <div onClick={() => {setCurrentCategory(category)}}>
        {category}
      </div>
    </div>
  )
}

export default categories