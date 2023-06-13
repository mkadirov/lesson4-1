import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import {Component} from 'react';
import Footer from './Components/Footer';

const linkList = ["Features", "Enterprise", "Support", "Pricing"];

const cards = [
  {
    className:"Free",
    price: "0",
    users: "10",
    trafic: "2",
    btn:"Sign up for free"
  },
  {
    className:"Pro",
    price: "15",
    users: "20",
    trafic: "10",
    btn:"Get started"
  },
  {
    className:"Enterprise",
    price: "29",
    users: "30",
    trafic: "15",
    btn:"Contact us"
  }
]

const novList = [
  ['Features', 'Cool stuff', 'Random feature', 'Team feature', 'Stuff of dewelopers', 'Another one', 'Last time'],
  ['Resources','Recource', 'Resource name', 'Another resource', 'Final resource'],
  ['About','Team', 'Locations', 'Privacf', 'Treams']
]

class App extends Component {

  render() {
    return (
      <div>
        <Header linkList = {linkList}/>

        <MainSection cards = {cards}/>

        <Footer novList = {novList}/>
  
      </div>
    );
  }
}


export default App;
