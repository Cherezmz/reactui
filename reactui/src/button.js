import React, { Component } from 'react'
import './button.css'




function Button(props) {

    console.log(props)
    //props are empty
    //props are not defined
    return (
        <div>
            <div className="upperButtonDiv">
                <button className="upperButton" button onClick={props.onclick}>
                </button>
            </div>

        </div>
    )
}


export default Button;