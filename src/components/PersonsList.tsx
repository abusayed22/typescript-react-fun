

import React from 'react'

type pNamesProps ={
    names: {
        first: string,
        last: string
    }[]
}

export default function PersonsList(props: pNamesProps) {
  return (
    <div>
        {props.names.map(name => (
            <p key={name.first}>{name.first} {name.last}</p>
        ))}
    </div>
  )
}
