import React from 'react'

const CustomInput = ({ labelTitle, type, action, length }) => {
  return (
    <>
        <div className="form-group mb-2">
            <label htmlFor="">{labelTitle}</label>
            <input type={type} onChange={(e) => action(e.target.value)} className="form-control" maxLength={length} />
        </div>
    </>
  )
}

export default CustomInput