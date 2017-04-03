import React, { Component } from 'react';
// import logo from './logo.svg';
import './Card.css';
import descriptions from './Descriptions';

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
    if(this.state.type === ATTACK || this.state.type === MONSTER){
      return this.state.value
    }else if(this.state.type !== HYBRID){
      return this.getActionChar()
    }
    return '15'
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

  getActionString(){
    switch(this.state.value){
      case DUEL:
        return 'Pojedynek'
      case HEADSHOT:
        return 'Headshot'
      case EVASION:
        return 'Unik'
      case LANDMINE:
        return 'Mina'
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
        return 'Atak'
      case ACTION:
        return 'Akcja'
      case MONSTER:
        return 'Potwór'
      case HYBRID:
        return 'Potwór/Akcja'
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

  getDescription(){
    return (this.state.title || descriptions[this.state.value]) ? <div className="description">
      {this.getHybridDescription()}
      <div className="title">{this.state.title}</div>
      {descriptions[this.state.value]}
    </div> : ''
  }

  getHybridDescription(){
    return this.state.type === HYBRID ?
      <div className="description-hybrid">
        Po pokonaniu zagraj jak:
      </div> : ''
  }

  getValueBox(){
    return
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div className="backgroundColor"></div>
        {this.getDescription()}
        {this.getValueBox()}
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
        <div className="graphic">{this.state.image}</div>
      </div>
    );
  }
}


export default Card;
