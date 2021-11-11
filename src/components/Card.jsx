import React from 'react'
import './Card.css'

const Recommends = (props) => {

  return (
    <div className='recommend'>
      <img className='avatar' src='https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png' alt='avatar'/>

        <div className='cardText'>
          <div>
            <div>
              {props.name}
            </div>
            <div>
              {props.time}
            </div>
          </div>
          <div className='middle'>
          {props.price}ریال
          </div>
        </div>
    </div>
  )
}

export default Recommends
