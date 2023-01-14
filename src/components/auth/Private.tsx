import React from 'react'
import Login from './Login'

type privateProps = {
    isLogged : boolean,
    Component: React.ComponentType
}
export default function Private({isLogged, Component}: privateProps) {
  if(isLogged) {
    return <Component />
  } else {
    return <Login />
  }
}
