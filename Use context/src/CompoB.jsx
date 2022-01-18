import React, { useContext } from 'react'
import CompoC from './CompoC';
import { First, Last } from './App';

const CompoB = (props) => {
    const fname = useContext(First);
    const lname = useContext(Last)
    return (
        <>
            {/* Using useContext */}
            <h1>This is component B {fname} { lname}</h1>
            <h1>This is component Ba { props.value}</h1>
            <CompoC value="okey"/>
        </>
    )
}

export default CompoB
