import React, { Component } from 'react';
import Card from './Card.js';
// import logo from './logo.svg';
import './App.css';

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
    cards.push(<Card key='dm' value='duel' suit='monsters' type='hybrid' title='Duel Monster' />)
    cards.push(<Card key='hm' value='headshot' suit='monsters' type='hybrid' title='Headshot Monster' />)
    cards.push(<Card key='em' value='evasion' suit='monsters' type='hybrid' title='Evasion Monster' />)
    cards.push(<Card key='lm' value='landmine' suit='monsters' type='hybrid' title='Landmine Monster' />)

    // Actions
    for (let suit of ['hearts', 'spades', 'clubs']) {
      cards.push(<Card key={'d'+suit[0]} value='duel' suit={suit} type='action' title='Duel' />)
      cards.push(<Card key={'h'+suit[0]} value='headshot' suit={suit} type='action' title='Headshot' />)
      cards.push(<Card key={'e'+suit[0]} value='evasion' suit={suit} type='action' title='Evasion' />)
      cards.push(<Card key={'l'+suit[0]} value='landmine' suit={suit} type='action' title='Landmine' />)
    }

    return (
      <div className="App">
        <p className="App-intro">
          We've got {cards.length} cards!
        </p>
        <div className="cards">
          {cards}
        </div>
      </div>
    );
  }
}

export default App;