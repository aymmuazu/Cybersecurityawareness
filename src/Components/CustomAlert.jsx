import React from 'react'

const CustomAlert = ({ message, alertStyle }) => {
  return (
    <div className='col-md-5 text-center fw-bolder'>
        <div className={`alert ${alertStyle}`}>
            {message}
        </div>
    </div>
  )
}

export default CustomAlert