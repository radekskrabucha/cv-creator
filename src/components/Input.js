import React from 'react'

const Input = ({type, id, label, handleChange}) => {
   return (
      <>
      <label htmlFor={id}>{label}</label>
      <input required type={type ? type : 'text'} name={id} id={id} onChange={handleChange} />
      </>
   )
}

export default Input
