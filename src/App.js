
import React from 'react';
import {Container, Row, Col } from "reactstrap";
import Slidebar from "./Slidebar";
import Navi from "./Navi";
import Main from "./Main";
function App() {
  return (
    <section style={{width:"100%",display:"inline-block"}}>
      <Container fluid  style={{backgroundColor:"whitesmoke",padding:"20px",height:window.innerHeight}}>
        <Row  width="100%">
        <Col lg="3">
          <Slidebar title1="Bootstrap" title2="Sidebar" title3="Dummy Heading"></Slidebar>
        </Col>
        <Col lg="6">
          <Row lg="10">
            <Navi></Navi>
          </Row>
          <Row lg="10">
            <Main>
            </Main>
          </Row>
        </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
