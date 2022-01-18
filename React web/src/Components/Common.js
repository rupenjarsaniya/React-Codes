import React from 'react'

const Common = (props) => {
    return (
        <>
            <h1 className="head-line"><strong>{props.headline}</strong> {props.headpara} <p>{props.gold}</p></h1>
            <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid atque labore nam vel voluptate consequatur quisquam, esse ab officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, odio!</p>
        </>
    )
}

export default Common
