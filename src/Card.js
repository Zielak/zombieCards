import React, { Component } from 'react';
// import logo from './logo.svg';
import './Card.css';
import descriptions from './Descriptions';

import IconDuel from '../assets/icon-duel.png';
import IconEvasion from '../assets/icon-evasion.png';
import IconLandmine from '../assets/icon-landmine.png';
import IconHeadshot from '../assets/icon-headshot.png';
import IconThief from '../assets/icon-joker.png';

import IconHearts from '../assets/icon-hearts.png';
import IconClubs from '../assets/icon-clubs.png';
import IconSpades from '../assets/icon-spades.png';
import IconMonsters from '../assets/icon-monsters.png';

const HEARTS   = 'hearts'
const SPADES   = 'spades'
const CLUBS    = 'clubs'
const MONSTERS = 'monsters'

const ATTACK   = 'attack'
const ACTION   = 'action'
const MONSTER  = 'monster'
const HYBRID   = 'hybrid'
const THIEF    = 'thief'

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
      type: props.type || ACTION
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
        return <img src={IconDuel} alt="⚔️"/>
      case HEADSHOT:
        return <img src={IconHeadshot} alt="🎯"/>
      case EVASION:
        return <img src={IconEvasion} alt="🏃"/>
      case LANDMINE:
        return <img src={IconLandmine} alt="💥"/>
      case THIEF:
        return <img src={IconThief} alt="✪"/>
      default:
        return '?'
    }
  }

  getActionString(){
    switch(this.state.value){
      case DUEL:
        return 'Pojedynek'
      case HEADSHOT:
        return 'Celny strzał'
      case EVASION:
        return 'Unik'
      case LANDMINE:
        return 'Mina'
      default:
        return '?'
    }
  }


  getSuit(){
    let image
    switch(this.state.suit){
      case HEARTS:
        image = <img src={IconHearts} alt='♥'/>; break
      case CLUBS:
        image = <img src={IconClubs} alt='♣'/>; break
      case SPADES:
        image = <img src={IconSpades} alt='♠'/>; break
      case MONSTERS:
        image = <img src={IconMonsters} alt='P'/>; break
      default:
        return ''
    }
    return <div className="suit">
      {image}
    </div>
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
    return (this.state.title || descriptions[this.state.value]) ?
    <div>
        <div className="description">
        {this.getIntroDescription()}
        <div className="title">{this.state.title}</div>
        {descriptions[this.state.value]}
      </div>
      <div className="description reverse">
        {this.getIntroDescription()}
        <div className="title">{this.state.title}</div>
        {descriptions[this.state.value]}
      </div>
    </div> : ''
  }

  getIntroDescription(){
    let str = '';
    if(this.state.type === HYBRID) str = 'Po pokonaniu zagraj jak:';
    if(this.state.value === THIEF) str = 'Zagraj poza swoją kolejką.';
    return str.length > 0 ?
      <div className="description-intro">
        {str}
      </div> : ''
  }

  getImage(){
    return this.state.type === ACTION ?
      <div className={'graphic graphic-'+this.state.value}>
      </div>
      : ''
  }

  value2opacity(){
    let num = (parseFloat(this.state.value)) /10
    return !!this.state.value ? {
      opacity: isNaN(num) ? 1 : num
    } : {}
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div className="background" style={this.value2opacity()}></div>
        {/*{this.getImage()}*/}
        {this.getDescription()}
        <div className="icons">
          <div className="rank">{this.getValueChar()}</div>
          {this.getSuit()}
          <div className="type">{this.getTypeString()}</div>
        </div>
        <div className="icons reverse">
          <div className="rank">{this.getValueChar()}</div>
          {this.getSuit()}
          <div className="type">{this.getTypeString()}</div>
        </div>
      </div>
    );
  }
}


export default Card;
