import React, { Component } from 'react';
import "./styles.css";
import Logo from "../../images/ILOGO.png"
import NavbarHeader from '../../components/navbarHeader';
import Ads from '../../components/ads';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavbarHeader />
                <Ads />
                <section className="home">
                    <div className="home-cover">
                        <div className="home-content-box">
                            <div className="home-content-box-inner">
                                <div className="home-heading">
                                    <h4>Easy Coustomization Theme</h4>
                                    <p className="content-data"> Bizwrap theme built with modern and easy to use frameworks</p>
                                </div>
                                <div className="home-btn ">
                                    <a className="btn btn-outline-primary btn-border btn-white btn-sm" href="#work" role="button" title="view our work">View Our Work</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service">
                    <div className="content-box">
                        <div className="content-title">
                            <h4>Services</h4>
                            <div className="content-title-underline">

                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-desktop fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>web Development</h4>
                                        </div>
                                        <div className="service-item-designation">
                                        <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-android fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>Android App</h4>
                                        </div>
                                        <div className="service-item-designation">
                                        <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-tablet fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>React Native App </h4>
                                        </div>
                                        <div className="service-item-designation">
                                        <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-window-restore fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>Responsive Design</h4>
                                        </div>
                                        <div className="service-item-designation">
                                            <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-codiepie fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>Clean Coding</h4>
                                        </div>
                                        <div className="service-item-designation">
                                            <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-server fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>Great Ui/Ux Designs</h4>
                                        </div>
                                        <div className="service-item-designation">
                                            <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-upload fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>Upgradation</h4>
                                        </div>
                                        <div className="service-item-designation">
                                            <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-film fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>Web Api</h4>
                                        </div>
                                        <div className="service-item-designation">
                                        <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                            <i className="fa fa-asterisk fa-3x" />
                                        </div>
                                        <div className="service-item-title">
                                            <h4>DevOps</h4>
                                        </div>
                                        <div className="service-item-designation">
                                            <p>During our DevOps Agile Cycle, the Testing Team picks up the Jira.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <div className="contact-heading">
                            <h4>Need any help? Contact us now!</h4>
                            <h5> Contact Us</h5>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">

                                <div className="contact-Logo">
                                    <img src={Logo} />
                                    <h6>
                                        Copyright © 2020 INNOVAPATH INC.,
                                    </h6>
                                    <div>
                                        info@innova-path.com
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-Logo">
                                <h6>
                                    Copyright © 2020 INNOVAPATH INC.,
                                </h6>
                                <div>
                                    info@innova-path.com
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="contact-Logo">
                                <h6>
                                    Copyright © 2020 INNOVAPATH INC.,
                                </h6>
                                <div>
                                    info@innova-path.com
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="main-footer">
                    <p>Hotel BT &amp; Copy; 2020, All Copy Rights Reserved</p>
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-2">
                            <div className="contact-Icon">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col-md-5"></div>
                    </div>
                </footer>
            </div>
        );
    }
}
