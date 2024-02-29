import React from 'react'

export default function TextInput({ placeholder, ...rest}) {
  return (
    <input type="text" className='custom-placeholder' placeholder={placeholder} {...rest} />
  )
}
