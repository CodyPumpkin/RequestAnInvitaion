import React, { Component,View } from 'react';
// import NavBar from '../NavBar/NavBar';
import Footer from '../footer';
import 'antd/dist/antd.css';
import Modals from '../Modals';
import '../../styles/_homepage.css';

class HomePage extends Component {

  render() {
    return(
      <div className="HomePage">
         {/* <NavBar /> */}
        <div className="center"> 

          <h3>A better way<br/> to enjoy everyday.</h3>

          <p >Be the first to know when we lauch.</p>
          <Modals />
        </div>
        <div>
            <Footer /> 
        </div>  
     </div>
    )
  }
}
export default HomePage;
