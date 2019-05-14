import React from 'react';

function Button(props) {
  const text = props.text
  const className = props.className
  const href = props.href
  return (
    <a className={className} onClick={props.onClick} href={href}>
      {text}
    </a>
  )
}

export default Button