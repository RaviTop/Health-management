import React from 'react'

export default function Employees(props) {
  return (
    <div>Employee  {props.name}  <br />  
       {props.role ? <p className='role'>{props.role}</p> : <p className='noRole'>no role defind</p>}
    </div>
  )
}
