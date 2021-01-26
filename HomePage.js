import React, { Component } from 'react';
// import NavBar from '../NavBar/NavBar';
import Footer from '../footer';
// import { Modal, Button } from 'antd';
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
        
            {/* <Button type="primary" onClick={true}>
            Request an invite
            </Button>
            <Modal title="Basic Modal" visible={true} onOk={true} onCancel={true}>
            <p>Some contents...</p >
            <p>Some contents...</p >
            <p>Some contents...</p >
          </Modal> */}
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
