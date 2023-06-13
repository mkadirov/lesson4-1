import React, { Component } from 'react'
import Card from '../Card'
import "./MainSection.css"

export default class MainSection extends Component {
  render() {

    const {cards} = this.props;

    return <section className='mainSection'>
    <div className ="text">
      <h1>Pricing</h1>
      <p>Quickly build an effective pricing table for your potential 
        customers with this Bootstrap example. It's built with default
         Bootstrap components and utilities with little customization.
      </p>
    </div>


    <div className="container-box">

    <div className="row">

      {cards.map(card => 
      <div className="col"><Card card = {card}/> 
      </div>)}
    
    </div>


    </div>
    </section>
  }
}
