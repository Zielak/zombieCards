import React, { Component } from 'react'
import Card from './Card.js'
import Board from './Board.js'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    let cards = []

    // Attack cards
    for (let i=2; i<=10; i++) {
      cards.push(<Card key={i+'h'} value={i} suit='hearts' type='attack' />)
      cards.push(<Card key={i+'s'} value={i} suit='spades' type='attack' />)
      cards.push(<Card key={i+'c'} value={i} suit='clubs' type='attack' />)
    }

    // Monsters
    for (let i=2; i<=10; i++) {
      cards.push(<Card key={i+'m'} value={i} suit='monsters' type='monster' />)
      cards.push(<Card key={i+'m2'} value={i} suit='monsters' type='monster' />)
    }
    cards.push(<Card key='dm' value='duel' suit='monsters' type='hybrid' title='Pojedynek' />)
    cards.push(<Card key='hm' value='headshot' suit='monsters' type='hybrid' title='Headshot' />)
    cards.push(<Card key='em' value='evasion' suit='monsters' type='hybrid' title='Unik' />)
    cards.push(<Card key='lm' value='landmine' suit='monsters' type='hybrid' title='Mina' />)

    // Actions
    for (let suit of ['hearts', 'spades', 'clubs']) {
      cards.push(<Card key={'d'+suit[0]} value='duel' suit={suit} type='action' title='Pojedynek' />)
      cards.push(<Card key={'h'+suit[0]} value='headshot' suit={suit} type='action' title='Headshot' />)
      cards.push(<Card key={'e'+suit[0]} value='evasion' suit={suit} type='action' title='Unik' />)
      cards.push(<Card key={'l'+suit[0]} value='landmine' suit={suit} type='action' title='Mina' />)
    }


    return (
      <div className="App">
        <p className="App-intro">
          We've got {cards.length} cards!
        </p>
        <div className="cards">
          {cards}
        </div>
        <Board/>
      </div>
    );
  }
}

export default App;
