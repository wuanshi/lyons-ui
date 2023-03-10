import React, { FC, InputHTMLAttributes,  } from 'react'

interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {

}

const Input: FC<InputProps> = () => {
  return (
    <div>Input</div>
  )
}

export default Input