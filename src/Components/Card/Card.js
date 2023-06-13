import {Component} from 'react';
import "./Card.css"

class Card extends Component {
    render() {
      const {card} = this.props;

      let className;

      if(card.price ==="0") {
        className = "btn mt-3 d-block border free"
      } else {
        className = "btn btn-primary mt-3 d-block"
      }

      return <div className
      ="card">
      <h5 className="card-header">{card.className}</h5>
      <div className="card-body">
      <h2 className="card-title">${card.price} <span> / mo</span></h2>
      <p className="card-title">{card.users} users included</p>
      <p>{card.trafic} GB of storage</p>
      <p>Email support</p>
      <p>Help center access</p>
      <a href="#" className={className}>{card.btn}</a>
      </div>
    </div>
      
    }
  }

  export default Card;