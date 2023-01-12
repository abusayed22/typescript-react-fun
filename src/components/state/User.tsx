import React, { useState } from 'react'

type authUser = {
    name: string,
    email: string
};

export default function User(props: authUser) {

    const [user,setUser] = useState<null | authUser>(null);

    const loggedinHandler = () => {
        setUser({
            name: 'sabbir',
            email: 'sabbir@exple.com'
        })
    }
    const logoutHandler = () => {
        setUser(null)
    }
  return (
    <div>
        <br />
        <br />
        <button onClick={loggedinHandler}>login</button>
        <button onClick={logoutHandler}>logout</button>
        <p>name: {user?.name}</p>
        <p>email: {user?.email}</p>
    </div>
  )
}
