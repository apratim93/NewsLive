import React,{Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/Footer'

import '../App.css';
//import BreakingNews from './BreakingNews'
import WeatherApi from './WeatherApi'
import './App.css'


class WeatherNav extends Component{
    render(){
      
        return(
          
            <>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/"><h4 className="linkText">News</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
         <Nav.Link href="/Tech"><h4 className="hov">Tech</h4></Nav.Link>
      <Nav.Link href="/Business"><h4 className="hov">Business</h4></Nav.Link>
      <Nav.Link href="/Health"><h4 className="hov">Helath</h4></Nav.Link>
      <Nav.Link href="/Enter"><h4 className="hov">Entertainment</h4></Nav.Link>
      <Nav.Link href="/SportsApi"><h4 className="hov">Sports</h4></Nav.Link>
      <Nav.Link href="/WeatherApi"><h4 className="hov">Weather</h4></Nav.Link>
      <Nav.Link href="/Corona"><h4 className="hov">Corona</h4></Nav.Link>


     
     
    </Nav>
      </Navbar.Collapse>
</Navbar>
<WeatherApi />

<Footer />
            </>
            
           
        )
    }
}
export default WeatherNav