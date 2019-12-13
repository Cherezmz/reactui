import React, { Component } from 'react'
import './button.css'


fetch('https://pokeapi.co/api/v2/pokemon/', {
    headers: { "Accept": "application/json" }
})
    .then(res => res.json())
    .then(res => {
        console.log(res)
        //console.log(this.state.inicialJokes)
        //this.setState({ inicialJokes: res })


    })


function Button() {
    return (
        <div>
            <button className="upperButton">
                Test</button>


        </div>
    )
}


export default Button;