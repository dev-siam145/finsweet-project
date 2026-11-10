import React from 'react'

const Anchor = ({children,href,className}) => {
  return (
    <a href={href} className={className}>
        {children}
    </a>
  )
}

export default Anchor