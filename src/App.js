import React from 'react'
import { Redirect } from 'react-router-dom'

export default (props)=>{
    return (
        <div>
            <Redirect to='/admin'></Redirect>
            {props.children}
        </div>
    )
}