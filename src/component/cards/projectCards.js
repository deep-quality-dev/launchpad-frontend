import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  CardBody
} from "reactstrap";

const ProjectCards = () => {
  return (
    <Card>
        <CardBody className="pp-card-body">
            <div className="pp-card-top">
                <Link to={`${process.env.PUBLIC_URL}/project`}>
                <div className="icon-box">
                    <span><img src="https://bscpad.s3-ap-southeast-1.amazonaws.com/projects/greenheart.jpg" alt="#" /></span>
                </div>
                </Link>
                <div className="title-box">
                    <h3 className="d-flex align-items-center">
                        <Link to={`${process.env.PUBLIC_URL}/project`}>
                            <div>Greenheart</div>
                        </Link>
                    </h3>
                    <div className="item-social">
                        <a href="https://t.me/greenheart_cbd"><FontAwesomeIcon icon={faTelegram} /></a>
                        <a href="https://twitter.com/greenheart_cbd"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://greenheartcbd.io"><FontAwesomeIcon icon={faGlobe} /></a>
                    </div>
                    <Link className="items-morex" to={`${process.env.PUBLIC_URL}/projects`}>
                        <span className="pp-status-open"><FontAwesomeIcon icon={faCircle} /> Open</span>
                    </Link>
                </div>
            </div>
            <div className="item-desc mb-1">
                <div className="item-short-desc">Greenheart is a sustainable DeFi token led by Greenheart CBD - one of Europe's leading seed to shelf producers of CBD oil</div>
                <div className="item-learn-more">
                    <a href={`${process.env.PUBLIC_URL}/project`}>Details</a>
                </div>
            </div>
            <Link to={`${process.env.PUBLIC_URL}/project`}>
                <div className="part-prize">
                    <div className="pp-card-info mb-3">
                        <div className="pp-card-col">Swap rate<br /><b className="nowrap">TBA</b></div>
                        <div className="pp-card-col text-center ps-28">Hard Cap<br /><b>TBA</b></div>
                        <div className="pp-card-col text-end">Soft Cap<br /><b>TBA</b></div>
                    </div>
                    <div className="pp-card-info d-block">
                        <div className="pp-card-progress-wrap">
                            <div className="mb-2 d-flex justify-content-between align-items-center pp-card-progress-top">
                                <div className="pp-card-col">Progress</div>
                                <div className="pp-card-col text-end">Participants <b className="text-participants font-12">3797</b></div>
                            </div>
                            <div className="pp-card-progress">
                                <div className="pp-card-progress-percent"></div>
                                <div className="pp-card-progress-label">
                                    <span><b>91.44%</b></span>
                                    <span className="text-allocation"><b>411484.8801/450000</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </CardBody>
    </Card>
  );
};

export default ProjectCards;
