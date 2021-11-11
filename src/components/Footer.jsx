import React from 'react'
import Button from './Button'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerStyle'>
      <div classname='footerText'>
        <div>
        04:19:59
        </div>
        <div>
        مانده تا بسته شدن
        </div>
      </div>

      <Button title='ثبت پیشنهاد قیمتی' />
      
    </div>
  )
}

export default Footer
