import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className ="shadow ">
        <div className="container ">
          <div><span>Company Logo</span></div>
          <div>

            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Pricing</a></li>
              <li className="last"><a href="#">Sign up</a></li>
              
            </ul>

          </div>
        </div>
      </header>

      <div className ="text">
        <h1>Pricing</h1>
        <p>Quickly build an effective pricing table for your potential 
          customers with this Bootstrap example. It's built with default
           Bootstrap components and utilities with little customization.
        </p>
      </div>
      <div className="container-box">

      <div className="row">
      <div className="col">
      <div class="card">
        <h5 class="card-header">Free</h5>
        <div class="card-body">
        <h2 class="card-title">$0 <span> / mo</span></h2>
        <p class="card-title">10 users included</p>
        <p>2 GB of storage</p>
        <p>Email support</p>
        <p>Help center access</p>
        <a href="#" class="btn mt-3 d-block border free">Sign up for free</a>
        </div>
      </div>
      </div>

      <div className="col">
      <div class="card">
        <h5 class="card-header">Pro</h5>
        <div class="card-body">
        <h2 class="card-title">$15 <span> / mo</span></h2>
        <p class="card-title">20 users included</p>
        <p>10 GB of storage</p>
        <p>Email support</p>
        <p>Help center access</p>
        <a href="#" class="btn btn-primary mt-3 d-block">Sign up for free</a>
        </div>
      </div>
      </div>

      <div className="col">
      <div class="card">
        <h5 class="card-header">Enterprise</h5>
        <div class="card-body">
        <h2 class="card-title">$29 <span> / mo</span></h2>
        <p class="card-title">30 users included</p>
        <p>15 GB of storage</p>
        <p>Email support</p>
        <p>Help center access</p>
        <a href="#" class="btn btn-primary mt-3 d-block">Sign up for free</a>
        </div>
      </div>
      </div>
      </div>


      </div>

      <footer>
        <div className="first">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
          <p>© 2017-2018</p>
        </div>
        <div className="nav">
          

          <ul>
            <li className="first">Features</li>
            <li><a href="#">Cool stuff</a></li>
            <li><a href="#">Random feature</a></li>
            <li><a href="#">Team feature</a></li>
            <li><a href="#">Stuff for developers</a></li>
            <li><a href="#">Another one</a></li>
            <li><a href="#">Last time</a></li>
          </ul>
        </div>
        <div className="nav">

          <ul>
          <li className="first">Resources</li>
            <li><a href="#">Resource</a></li>
            <li><a href="#">Resource name</a></li>
            <li><a href="#">Another resource</a></li>
            <li><a href="#">Final resource</a></li>
          </ul>
        </div>
        <div className="nav">

          <ul>
          <li className="first">About</li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Privacyf</a></li>
            <li><a href="#">Terms</a></li>
      
          </ul>
        </div>
       
      </footer>

    </div>
  );
}

export default App;
