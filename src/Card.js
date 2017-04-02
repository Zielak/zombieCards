import React, { Component } from 'react';
// import logo from './logo.svg';
import './Card.css';

const HEARTS   = 'hearts'
const SPADES   = 'spades'
const CLUBS    = 'clubs'
const MONSTERS = 'monsters'

const ATTACK   = 'attack'
const ACTION   = 'action'
const MONSTER  = 'monster'
const HYBRID   = 'hybrid'

const DUEL     = 'duel'
const HEADSHOT = 'headshot'
const EVASION  = 'evasion'
const LANDMINE = 'landmine'

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      value: props.value || HEADSHOT,
      suit: props.suit || HEARTS,
      type: props.type || ACTION,
      image: props.image || ''
    };
  }

  getValueChar(str){
    return (this.state.type === ATTACK || this.state.type === MONSTER) ?
      this.state.value : this.getActionChar()
  }

  // Action cards have their action "type" in value
  getActionChar(){
    switch(this.state.value){
      case DUEL:
        return '⚔️'
      case HEADSHOT:
        return '⊙'
      case EVASION:
        return '🏃'
      case LANDMINE:
        return '💥'
      default:
        return '?'
    }
  }


  getSuitChar(){
    switch(this.state.suit){
      case HEARTS:
        return '♥'
      case CLUBS:
        return '♣'
      case SPADES:
        return '♠'
      case MONSTERS:
        return '𝚭'
      default:
        return '?'
    }
  }

  getTypeString(){
    switch(this.state.type){
      case ATTACK:
        return 'Karta Ataku'
      case ACTION:
        return 'Karta Akcji'
      case MONSTER:
        return 'Karta Potwór'
      case HYBRID:
        return 'Potworna karta Akcji'
      default:
        return ''
    }
  }

  getClassNames(){
    let str = 'Card '
    str += `type-${this.state.type.toLowerCase()} `
    str += `suit-${this.state.suit.toLowerCase()} `
    str += `rank-${this.state.value.toString().toLowerCase()} `
    return str
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div className="backgroundColor"></div>
        <div className="border borderTop"></div>
        <div className="border borderRight"></div>
        <div className="border borderLeft"></div>
        <div className="border borderBottom"></div>
        <div className="sideText sideLeft">{this.getTypeString()}</div>
        <div className="sideText sideRight">{this.getTypeString()}</div>
        <div className="icons">
          <div className="rank">{this.getValueChar()}</div>
          <div className="suit">{this.getSuitChar()}</div>
        </div>
        <div className="icons reverse">
          <div className="rank">{this.getValueChar()}</div>
          <div className="suit">{this.getSuitChar()}</div>
        </div>
        <div className="title">{this.state.title}</div>
        <div className="graphic">{this.state.image}</div>
      </div>
    );
  }
}


export default Card;
