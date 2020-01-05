import React from 'react';

const Menu = ({onDark, ...props}) => {
  const background = onDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const color = onDark ? '#FFF' : '#000';
  const shadow = onDark ? '#FFF' : '#000';
  return(
    <ul css={{
      transition: 'all 0.3s ease-in-out',
      zIndex: 10,
      listStyle: 'none',
      background,
      borderRadius: 3,
      boxShadow: `2px 2px 8px -4px ${shadow}`,
      li: {
        color,
        padding: 12,
        ':hover': {
          cursor: 'pointer',
          background: 'rgba(150, 150, 150, 0.5)' 
        }
      }
    }} {...props}>
      {props.children}
    </ul>
  )
}

export default Menu
