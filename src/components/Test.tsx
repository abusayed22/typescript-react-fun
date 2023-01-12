import React from 'react'

type TestingProps = {
    name: string,
    msg?: number,
    isLogged: boolean
}

export const  Testing =(props: TestingProps)=> {
    const {msg = 0} = props
    
  return (
    <div>
        {
            props.isLogged ? <p>Welcome <b>{props.name}</b>!, your <b>{props.msg? props.msg: msg}</b> massage unread!!</p> : <p>Welcome</p>
        }
    </div>
  )
}



