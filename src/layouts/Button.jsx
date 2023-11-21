import React from 'react'

const Button = (props) => {
  return (
    <div className='px-6 py-1 border-2 text-teal-500 hover:text-teal-900 transition-all rounded-full cursor-popinter'>
      {props.title}
    </div>
  )
}

export default Button
