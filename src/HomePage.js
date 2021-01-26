import React, { Component } from 'react';
// import NavBar from '../NavBar/NavBar';
import Footer from '../footer';
import 'antd/dist/antd.css';
import Modals from '../Modals';

class HomePage extends Component {

  render() {
    return(
      <div className="HomePage">
        <div>
          {/* <NavBar /> */}
          <h3>A better way<br/> to enjoy everyday.</h3>
          <p>Be the first to know when we lauch.</p>
        </div>
        <Modals />
        
        <div style={{borderTop: '1px solid #000'}} />
        <div>
            <Footer /> 
        </div>  
     </div>
    )
  }
}

export default HomePage;
