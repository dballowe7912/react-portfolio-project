import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className="header">
                    <h1>Freelance Web Developer</h1>
                    <p className='subtitle'>Hi, my name is Donald Ballowe. I'm a freelance web devolper out of East Texas.</p>
                </div>

                <div className="topnav">
                    {/* <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a> 
        <a href="./aboutMe.html" style="float:right">About</a>*/}
                </div>
            </div>
        )
    }
}

export default Header;