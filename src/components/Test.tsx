import React from 'react'

type TestingProps = {
    name: string,
    msg: number,
    isLogged: boolean
}

export const  Testing =(props: TestingProps)=> {
  return (
    <div>
        {
            props.isLogged ? <p>Welcome <b>{props.name}</b>!, your {props.msg} massage unread!!</p> : <p>Welcome</p>
        }
    </div>
  )
}



