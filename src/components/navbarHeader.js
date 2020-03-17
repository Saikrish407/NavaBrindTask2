import React, { Component } from 'react';
import Dashboard from '../Home/Dashboard/index';
import { NavLink } from 'react-router-dom'

export default class NavbarHeader extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: false,
        };

    }
    onSearch = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-primary fixed-top bg-dark">
                    <ul className=" navbar nav ">
                        <li className="nav-item">
                            {this.state.isVisible ?
                                <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12 p-0">

                                    <div className="col-md-4 col-xs-4 col-sm-4 col-lg-4 p-0">
                                        <nav className="navbar-dark bg-dark sidenav">
                                            <div className="pl-2" role="button" onClick={this.onSearch}>
                                                <span class="navbar-toggler-icon"></span>
                                            </div>

                                            <ul class="nav flex-column text-center">
                                                <li class="nav-item align-self-center mt-5">
                                                    <i className="fa fa-home text-white text-center" aria-hidden="true"></i>
                                                    <h6 className="text-white text-center">Home</h6>
                                                </li>
                                                <li class="nav-item align-self-center mt-4">
                                                    <i className="fa fa-rss-square text-white text-center" aria-hidden="true"></i>
                                                    <h6 className="text-white text-center">Service</h6>
                                                </li>
                                                <li class="nav-item align-self-center mt-4">
                                                    <i className="fa fa-address-book-o text-white text-center" aria-hidden="true"></i>
                                                    <h6 className="text-white text-center">Contact</h6>
                                                </li>
                                                <li class="nav-item align-self-center mt-4">
                                                    <i className="fa fa-users text-white text-center" aria-hidden="true"></i>
                                                    <h6 className="text-white text-center">Profile</h6>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div> :
                                <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12 p-0">

                                    <div className="col-md-4 col-xs-4 col-sm-4 col-lg-4 p-0">
                                        <nav className="navbar-dark bg-dark sidenav1">
                                            <div className="pl-2" role="button" onClick={this.onSearch}>
                                                <span class="navbar-toggler-icon"></span>
                                            </div>
                                            <ul class="nav flex-column text-center">
                                                <li class="nav-item align-self-center mt-5">
                                                    <i className="fa fa-home text-white text-center" aria-hidden="true"></i>
                                                </li>
                                                <li class="nav-item align-self-center mt-5">
                                                    <i className="fa fa-rss-square text-white text-center" aria-hidden="true"></i>
                                                </li>
                                                <li class="nav-item align-self-center mt-5">
                                                    <i className="fa fa-address-book-o text-white text-center" aria-hidden="true"></i>
                                                </li>
                                                <li class="nav-item align-self-center mt-5">
                                                    <i className="fa fa-users text-white text-center" aria-hidden="true"></i>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>}
                        </li>

                    </ul>

                    <ul className=" navbar nav ml-auto">

                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-white">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/profile' className="nav-link text-white">
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white">
                                Contact
                            </a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}
