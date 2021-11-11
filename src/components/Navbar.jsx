import React from 'react'
import { RightOutlined, HeartOutlined, ClockCircleOutlined } from '@ant-design/icons'
import './Navbar.css'

const Navbar = (props) => {
  return (
  <div className='navStyle'>
    <RightOutlined />
  
    <div className='navTitle'>
      {props.title}
    </div>
    <div>
     <span className= 'navHeart'>
       <HeartOutlined />
     </span>
      <span className= 'navClock'>
      <ClockCircleOutlined />
    </span>
  </div>
  </div>
  )
}

export default Navbar
