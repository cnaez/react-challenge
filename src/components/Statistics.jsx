import React from 'react'
import PropTypes from 'prop-types'
import './Statistics.css'

const Statistics = (props) => {
  return (
    <div className='StatisticsStyle'>
      <div>
        آخرین قیمت پیشنهادی
        <div>
        {props.price}ریال
        </div>
      </div>
      <div>
        تعداد کل پیشنهادها
        <div>
        {props.number}
        </div>
      </div>
    </div>
  )
}

Statistics.propTypes = {
  price: PropTypes.number,
  number: PropTypes.number
};

export default Statistics



