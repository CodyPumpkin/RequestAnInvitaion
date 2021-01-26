import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import Draggable from 'react-draggable';

class Modals extends Component {
  state = {
    visible: false,
    disabled: true,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
   
  };

  draggleRef = React.createRef();

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = this.draggleRef?.current?.getBoundingClientRect();
    this.setState({
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      },
    });
  };
  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };
  render() {
    const { bounds, disabled, visible } = this.state;
    return (
      <>
        <Button onClick={this.showModal}>Request an invite</Button>
        <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',               
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
              }}
              onMouseOver={() => {
                if (disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
            <h5>Request an invite</h5>
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={
            [] // 设置footer为空，去掉 取消 确定默认按钮
          }

          modalRender={modal => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >

        <Input placeholder="Full name" style={{ width: '100%',
                cursor: 'move',               
                display: "flex",
                justifyContent: "center",
                alignItems: "center", }} />
        <br />
        <br />
        <Input placeholder="Email" style={{ width: '100%',
                cursor: 'move',               
                display: "flex",
                justifyContent: "center",
                alignItems: "center",}} />
        <br />
        <br />
        <Input placeholder="Confirm email"  style={{ width: '100%',
                cursor: 'move',               
                display: "flex",
                justifyContent: "center",
                alignItems: "center", }}/>
        <br />
        <br />
        <Button onClick={this.showModal} style={{ width: '100%',
                cursor: 'move',               
                display: "flex",
                justifyContent: "center",
                alignItems: "center", }}>Send</Button>
        </Modal>
      </>
    );
  }
}
export default Modals;
// ReactDOM.render(<Modals />, mountNode);