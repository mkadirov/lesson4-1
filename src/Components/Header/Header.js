import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
  render() {
    
    const {linkList} = this.props;
   

    return (   
        <header className ="shadow ">
        <div className="container ">
          <div><span>Company Logo</span></div>
          <div>
            <ul>
              {linkList.map(value => <li><a href="#">{value}</a></li>
              )}
              <li className="last"><a href="#">Sign up</a></li>
            </ul>

          </div>
        </div>
      </header>
    )
  }
}
