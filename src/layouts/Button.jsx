import React from 'react'

const Button = (props) => {
  return (
    <div className='px-6 py-1 border-4 text-red-500 hover:text-teal-400 font-bold transition-all rounded-full cursor-pointer'>
      {props.title}
    </div>
  )
}

export default Button
