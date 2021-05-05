//import logo from './logo.svg';
import React from 'react';
import Header from './Header'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Users from './Users'
import CreateUser from './CreateUser'
import './App.css';
import {Link, Route, BrowserRouter as Router,Switch} from "react-router-dom"
import {Navbar,Nav} from 'react-bootstrap'

function App() {
  //const[name,setName]=useState("Dezy")

  return (
    <div className="App">
      <Router>

      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">My FirstApp</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href=""><Link to="">Home</Link></Nav.Link>
      <Nav.Link href="About"><Link to="/About">About Us</Link></Nav.Link>
      <Nav.Link href="Users"><Link to="/Users">User</Link></Nav.Link>
      <Nav.Link href="CreateUser"><Link to="/CreateUser">Create User</Link></Nav.Link>
      <Nav.Link href="Contact"><Link to="/Contact">Contact Us</Link></Nav.Link>
    </Nav>
    
  </Navbar>


      <h1>Hello React</h1>
      <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/Createuser">
            <CreateUser />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      {/*<Users/>*/}
      {/*<CreateUser/>*/}



       {/*<Header/>*/}
      {/*<About />*/}
       {/*<Contact name={name}/> */}
       {/*<button onClick={()=>{setName("Sunita Mohanty")}}>Update Props</button> */}
       </Router>
    </div>
  );
}

export default App;
