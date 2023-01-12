import React from 'react'

type headingProps = {
    children: React.ReactNode
}
export default function Oscar(props:headingProps) {
  return (
    <div>{props.children}</div>
  )
}
