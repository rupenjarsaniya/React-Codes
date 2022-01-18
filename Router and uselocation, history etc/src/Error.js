import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Error = () => {
    const his = useHistory();
    return (
        <>
            <h1>Sorry page not found</h1>
            <Button onClick={()=>his.push("/")}>Go Back</Button>
        </>
    )
}

export default Error
