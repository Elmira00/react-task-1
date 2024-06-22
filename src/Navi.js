import React, { Component } from 'react'

export default class Navi extends Component {
  render() {
    return (
      <div style={{backgroundColor:"white",padding:"10px",borderRadius:"10px",margin:"10px"}}>
        <i style={{fontSize:"1.3em",backgroundColor:"springgreen",padding:"5px"}} className="fa-solid fa-bars"></i>
        <ul style={{fontSize:"1.2em",color:"gray",display:"block",float:'right', listStyleType: "none"}}>
            <li style={{display:"inline",margin:"5px"}}>
                page 1
            </li>
            <li style={{display:"inline",margin:"5px"}}>
                page 2
            </li>
            <li style={{display:"inline",margin:"5px"}}>
                page 3
            </li>
            <li style={{display:"inline",margin:"5px"}}>
                page 4
            </li>
            
        </ul>
      </div>
    )
  }
}
