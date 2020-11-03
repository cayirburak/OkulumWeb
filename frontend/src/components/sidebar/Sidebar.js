import React,{Component} from "react";
import './Sidebar.css';
import {Link} from 'react-router-dom';

export class Sidebar extends Component {

    render(){
        return(
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/appInfo">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                            OKULUM
                            </span>
                        </Link>
                    </li>
                    <br/>
                    <li className="has-subnav">
                        <Link to="/studentInfo">
                            <i className="fa fa-laptop fa-2x"></i>
                            <span className="nav-text">
                            Öğrenci Bilgileri
                            </span>
                        </Link>
                    </li>
                    <li className="has-subnav">
                        <Link to="/studentAdd">
                            <i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">
                            Öğrenci Ekle
                            </span>
                        </Link>
                    </li>
                    {/*<li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-folder-open fa-2x"></i>
                            <span className="nav-text">
                            Pages
                        </span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-bar-chart-o fa-2x"></i>
                            <span className="nav-text">
                            Graphs and Statistics
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-font fa-2x"></i>
                            <span className="nav-text">
                           Quotes
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-table fa-2x"></i>
                            <span className="nav-text">
                            Tables
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-map-marker fa-2x"></i>
                            <span className="nav-text">
                            Maps
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-info fa-2x"></i>
                            <span className="nav-text">
                            Documentation
                        </span>
                        </a>
                    </li>*/}
                </ul>

                <ul className="logout">
                    <li>
                        <a href="#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                            Logout
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}