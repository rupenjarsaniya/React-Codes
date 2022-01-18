import React from 'react'
import CompoC from './CompoC';

const CompoB = (props) => {
    return (
        <>
            <h1>This is component B { props.value}</h1>
            <CompoC value="okey"/>
        </>
    )
}

export default CompoB
