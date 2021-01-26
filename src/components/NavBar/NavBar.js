import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './NavBar.css';

export default class NavBar extends Component {
  
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {/* <h5> Broccoli & Co.</h5> */}
            <a href="/">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
