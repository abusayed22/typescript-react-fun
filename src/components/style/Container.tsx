import React from 'react'
import { containerProps } from './style.type'



export default function Container(props: containerProps) {
  return (
    <div style={props.styles}>THis is line of style component</div>
  )
}
