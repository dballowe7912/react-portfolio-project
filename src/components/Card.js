import React, { Component } from 'react';
import './css/Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <h2>Somewhere</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div className="image" alt="picture"><img className='image1' src='./cameron-venti-vahwUn0Uh0E-unsplash.jpg'/></div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        )
    }
}

export default Card;