import React from 'react'

type buttonProps = {
    clickHandler : (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export default function Button(props: buttonProps) {
  return (
    <>
    <button onClick={(event) => props.clickHandler(event,1)}>click</button>
    </>
  )
}
