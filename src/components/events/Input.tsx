import React from 'react'


type inputProps = {
    value: string
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input(props: inputProps) {
  return (
    <>
        <input value={props.value} onChange={props.changeHandler} type="text" />
    </>
  )
}
