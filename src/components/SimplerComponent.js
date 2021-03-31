import React from 'react'

const currentFeeling = "I am just happy."

const SimplerComponent = props => 
    <div onClick={props.handleClick}>{currentFeeling}</div>
export default SimplerComponent