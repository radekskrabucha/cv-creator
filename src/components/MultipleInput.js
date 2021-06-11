import React from 'react'
import uuid from 'react-uuid'


const MultipleInput = ({handleSubmit, id, label, btnText, type, list, removeItem, property, children}) => {
   return (
      <>
         <form onSubmit={handleSubmit}>
            <label htmlFor={id}>{label}</label>
            <input type={type ? type : 'text'} name={id} id={id} />
            {children}
            <button className='btn' type="submit">{btnText}</button>
         </form>
         {list.map((item) => {
            const {id: itemID, name, position, company } = item
            return (
               <ul key={uuid()}>
               <li>{name ? name : `${position} at ${company}` }</li>
               <button type='button' onClick={() => removeItem(itemID, property?property:id)}>remove item</button>
               </ul>
            )
         })}
      </>
      
   )
}

export default MultipleInput
