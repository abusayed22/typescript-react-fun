import React from 'react'

type addProps = {
    stataus: 'loading'| 'success' | 'error'
}


   

export default function AddvacePropsCoponent(props: addProps) {
 
    let msg;

if( props.stataus === 'loading') {
    msg = 'loading...'
} else if (
    props.stataus === 'success'
) {
    msg = 'Successfully data fetching'
} else if (
    props.stataus === 'error'
) {
    msg = "Error data fetching"
}

    return (
    <div>
        <h1>Stataus:- {msg}</h1>
    </div>
  )
}
