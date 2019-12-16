import React, { Component } from 'react'
import './button.css'




function Button(props) {

    console.log(props)
    //props are empty
    //props are not defined
    //console shows 3 times.  but there are 4 buttons
    return (
        <div>
            <div className="upperButtonDiv">
                <button className="upperButton" button onClick={props.onclick}>Test
                </button>
            </div>

        </div>
    )
}


export default Button;