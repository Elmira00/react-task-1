import React, { Component } from 'react'

export default class MenuItem extends Component {
  render() {
    return (
      <div>
        <i style={{color:"white", marginRight:"30px",fontSize:"1.3em"}} className={this.props.icon}></i>
        <p style={{color:"white",display:"inline-block",fontWeight:"bold",fontSize:"1.4em"}}>{this.props.title}</p>
      </div>
    )
  }
}
