import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class InnerModals extends React.Component {
  state = {
    visible: true,
  };

 handleOk = () => {
    this.setState({
        visible: false,
      });
  };

  render() {
    const { visible } = this.state;
    return (
      <>
        <Modal
          visible={visible}
          footer={[]}
        >
          <h2 align="center">All done!</h2>
          <p align="center">You will be one of the first to experience <br /> Broccoli & Co. when we launch.</p>
          <Button onClick={this.handleOk} style={{ width: '100%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center", }}>OK</Button>
        </Modal>
      </>
    );
  }
}export default InnerModals;