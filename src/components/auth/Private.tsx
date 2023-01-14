import React from 'react'
import Login from './Login'

export default function Private({isLogged, Component}) {
  if(isLogged) {
    return <Component />
  } else {
    return <Login />
  }
}
