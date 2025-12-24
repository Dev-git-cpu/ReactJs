import React from 'react'

const Card = ({Dev = Hello}) => {
    console.log(Dev);
    
  return (
    <div>
        <h1>{Dev}</h1>
    </div>

  )
}

export default Card 