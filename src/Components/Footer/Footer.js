import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {

    const {novList} = this.props;

    return  <footer>
    <div className="first">
      <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
      <p>© 2017-2018</p>
    </div>

    {novList.map(list => {
      return <div className="nav">
        {list.map((value, index) => {
        return (index==0)? 
        <li className="first">{value}</li> : <li><a href="#">{value}</a></li>
      })}
      </div>
    })}
   
  </footer>
  }
}
