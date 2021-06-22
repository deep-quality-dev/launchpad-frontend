import React, { Fragment } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Breadcrumb from "../component/common/breadcrumb/breadcrumb";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  Button,
  Input,
} from "reactstrap";

const { useState } = React;

const Projects = (props) => {
  const [copied, setCopied] = useState(0);

  function setCopyClipboard() {
    setCopied(1);
    setTimeout(() => {
      setCopied(0);
    }, 1000);
  }

  return (
    <Fragment>
      <Breadcrumb parent="Forms / Form Controls" title="Project" />
      <Container fluid={true}>
        <Row>
          <Col className="project-token" md="6">
            <Card>
              <CardBody>
                <h1>XXX Project</h1>
                <div className="copy-clipboard">
                  <h2>Token Contact Address: <span>0x000000872676</span></h2>
                  <CopyToClipboard text="0x000000872676"
                    onCopy={() => setCopyClipboard()}>
                    <button>
                      {copied===1 ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCopy} />}  
                    </button>
                  </CopyToClipboard>
                </div>
              </CardBody>
            </Card>
            
          </Col>
          <Col className="project-progress" md="6">
            <Card>
              <CardBody>
                <h2>Sale Progress</h2>
                <div className="project-progress-bar"></div>
                <div className="progress-percent">
                  <h2>Completed: <span>50%</span></h2>
                  <h2>80 / 100 ETH</h2>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6" className="project-token info">
            <Card>
              <CardBody>
                <h3>Price: <span>0.002 ETH</span></h3>
                <h4>Min: <span>0.1 ETH</span> | Max: <span>3 ETH</span></h4>
                <div className="project-price">
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="0"
                  />
                  <div>Max</div>
                </div>
                <Button color="primary">BUY</Button>
              </CardBody>
            </Card>
          </Col>
          
          <Col md="6" className="project-progress info">
            <Card>
              <CardBody>
                <h2><span>0</span>Tokens You Bought</h2>
                <h2><span>0</span>ETH You Invested</h2>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="project-buttons">
              <CardBody>
                <Row>
                  <Button color="primary">Claim Tokens</Button>
                  <Button color="primary">Get Refund</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="project-info-title">
          <h1>Sale Details</h1>
        </Row>

        <Row>
          <Col>
            <Card className="project-info">
              <CardBody>
                <Row>
                  <Col md="6">
                    <h2>Starts: <span>2021-01-18 17:00 UTC</span></h2>
                    <h2>Ends: <span>2021-01-20 17:00 UTC</span></h2>
                    <h2>Token Price: <span>0.002 ETH</span></h2>
                    <h2>Hard Cap: <span>500 ETH</span></h2>
                    <h2>Soft Cap: <span>200 ETH</span></h2>
                    <h2>Tokens For Sale: <span>1 500 000 XFF</span></h2>
                  </Col>
                  <Col md="6">
                    <h2>Access: <span>Public / Whitelist</span></h2>
                    <div className="copy-clipboard">
                      <h2>Sale Contract: <span>0x0000000</span></h2>
                      <CopyToClipboard text="0x0000000"
                        onCopy={() => setCopyClipboard()}>
                        <button>
                          {copied===1 ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCopy} />}  
                        </button>
                      </CopyToClipboard>
                    </div>
                    <div className="copy-clipboard">
                      <h2>Token Contract Address: <span>0x000000</span></h2>
                      <CopyToClipboard text="0x000000"
                        onCopy={() => setCopyClipboard()}>
                        <button>
                          {copied===1 ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCopy} />}  
                        </button>
                      </CopyToClipboard>
                    </div>
                    <h2>Token Symbol: <span>XFF</span></h2>
                    <h2>Total Supply: <span>550 000 XFF</span></h2>
                    <h2>Listing: <span>TBA</span></h2>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Projects;
