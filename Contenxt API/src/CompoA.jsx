import React from 'react'
import CompoB from './CompoB';

const CompoA = (props) => {
    return (
        <>
            <h1>This is component A { props.value}</h1>
            <CompoB value="okay"/>
        </>
    )
}

export default CompoA
