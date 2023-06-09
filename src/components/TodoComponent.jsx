import React from 'react'
import { Check, Trash } from "@phosphor-icons/react";

const TodoComponent = ({ todo, completed, toggleComplete, deleteTodo }) => {

  return (
    <li className={`${completed && 'completed'}`} >
      <p className={`${completed && 'completed'} text-[16px]`} > {todo}</p>
      <div className='flex items-center justify-center gap-2' >
        <Check onClick={toggleComplete} weight="bold" className='icon text-green-600' />
        <Trash onClick={deleteTodo} className='icon text-red-500' />
      </div>
    </li >
  )
}

export default TodoComponent