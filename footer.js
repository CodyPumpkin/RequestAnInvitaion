import React, { Component } from 'react';
import '../styles/_footer.css';

export default class Footer extends Component {
    componentDidMount() {
      setTimeout(() => {
        this.getFooterPostionStyle()
      },100)
    }
  
    UNSAFE_componentWillReceiveProps() {
      setTimeout(() => {
        this.getFooterPostionStyle()
      },100)
    }
  
    getFooterPostionStyle = () => {
      this.footer.classList.remove("footerPosi")
      let hei = window.innerHeight //整个窗口的高度
      let footerTop = this.footer.offsetTop//底部footer相对于顶部的距离
      let footerHei = this.footer.offsetHeight
      if (footerTop+footerHei>hei) {
        this.footer.classList.remove("footerPosi")
      }else {
        this.footer.classList.add("footerPosi")
      }
    }
  
    render() {
        return (
            <div className="site-footer" ref={(o)=>this.footer=o}>
            <p className="text-center">Made with 💗 in Melbourne.</p >
            <p className="text-center">© 2015 Broccoli & Co. All rights reserved.</p >
            </div>
        )
      }
    }