import React from "react";
import MenuItem from "./MenuItem";

export default function Slidebar(props) {
  return (
    <div style={{ backgroundColor: "#727fed",padding:"0px",display:"inline-block",height:window.innerHeight-20 }}>
      <div style={{backgroundColor: "#6860eb",display:"inline-block",marginBottom:"15px"}}>
        <h1
          style={{
            color: "white",
            padding: "25px 45px 5px 25px",
            display: "block",
          }}
        >
          {props.title1}
        </h1>
        <h1
          style={{
            color: "white",
            padding: "5px 25px 10px 25px",
            display: "block",
          }}
        >
          {props.title2}
        </h1>
      </div>
      <h5 style={{ color: "white"}}>{props.title3}</h5>
      
      <ul style={{ listStyleType: "none",marginTop:"20px" }}>
        <li>
          <MenuItem icon="fas fa-house" title="Home" />
        </li>
        <li>
          <MenuItem icon="fas fa-address-card" title="About" />
        </li>
        <li>
          <MenuItem icon="fas fa-file" title="Pages" />
        </li>
        <li>
          <MenuItem icon="fas fa-briefcase" title="Portfolio" />
        </li>
        <li>
          <MenuItem icon="fas fa-question" title="FAQ" />
        </li>
        <li>
          <MenuItem icon="fas fa-paper-plane" title="Contact" />
        </li>
      </ul>
    </div>
  );
}
