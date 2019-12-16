import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Footer from './footer'
import Button from './button'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inicialPokemon: []
    }
    this.newPokemon = this.newPokemon.bind(this)
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=4', {
      headers: { "Accept": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({ inicialPokemon: res })



      })



  }

  newPokemon() {
    console.log("1111111")

  }


  render() {
    return (
      <div className="doNotTouch">

        <Header />
        <Button />
        <Button />
        <Button />
        <Button />
        <Footer />

      </div>
    )
  }
}

export default App;


