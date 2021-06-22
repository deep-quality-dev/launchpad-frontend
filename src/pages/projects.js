import React, { Fragment } from "react";

import Breadcrumb from "../component/common/breadcrumb/breadcrumb";
import ProjectCards from "../component/cards/projectCards";
import {
  Container,
  Col,
  Row
} from "reactstrap";

const { useState } = React;

const Projects = (props) => {

  const [tabIdx, setTabIdx] = useState(0);

  return (
    <Fragment>
      <Breadcrumb parent="Forms / Form Controls" title="Projects" />
      <Container fluid={true}>
        <Row className="project-tabs">
          <div className={tabIdx===0? 'project-tab-item active' : 'project-tab-item'} onClick={()=>setTabIdx(0)}>Ongoing</div>
          <div className={tabIdx===1? 'project-tab-item active' : 'project-tab-item'} onClick={()=>setTabIdx(1)}>Upcoming</div>
          <div className={tabIdx===2? 'project-tab-item active' : 'project-tab-item'} onClick={()=>setTabIdx(2)}>Ended</div>
        </Row>
        {
          tabIdx === 0?
          <Row>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
          </Row>
          :""
        }
        {
          tabIdx === 1?
          <Row>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
          </Row>
          :""
        }
        {
          tabIdx === 2?
          <Row>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
            <Col sm="12" md="6" xl="4">
              <ProjectCards></ProjectCards>
            </Col>
          </Row>
          :""
        }
      </Container>
    </Fragment>
  );
};

export default Projects;
