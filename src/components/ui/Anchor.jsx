import React from 'react'

const Anchor = ({children,href,className,onClick}) => {
  return (
    <a href={href} className={className} onClick={onClick}>
        {children}
    </a>
  )
}

export default Anchor