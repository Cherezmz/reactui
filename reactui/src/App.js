import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Footer from './footer'
import Button from './button'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //inicialPokemon is not defined from the very begining.
      inicialPokemon: []

    }
    this.newPokemon = this.newPokemon.bind(this)

  }


  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    let value = 'pikachu'
    fetch(url + value)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({ inicialPokemon: res.results })
        console.log(this.state)


      })



  }

  newPokemon() {

    console.log("1111111")


  }

  //onClick for tthr 1-st button fires newPockemon//
  // but I can do nothing because my array/string inicialPokemon//
  //is not defined//
  render() {
    // let { inicialPokemon } = this.state
    // inicialPokemon.forEach(pokeman => {
    //   console.log(pokeman.name)
    // });
    return (
      <div className="doNotTouch">


        <Header />


        <Button onclick={this.newPokemon} />
        <Button />
        <Button />
        <Button />
        <Footer />

      </div>
    )
  }
}

export default App;


