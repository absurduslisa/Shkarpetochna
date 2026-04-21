import React from 'react'
import { variants, sizes } from '../styles/global'

const Button = ({
    children,
    variant = 'primary',
    size = 'sm',
    ...props
  }) => {
  return (
    <button className={`${variants[variant]} ${sizes[size]}`}
    // style={width ? {width} : undefined}
    {...props}>{children}</button>
  )
}

export default Button