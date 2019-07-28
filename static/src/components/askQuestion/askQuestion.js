import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './askQuestion.css'
export class AskQuestion extends Component {
    render() {
        return (
            <Link to="/create/question">
                <button className='ask-question' alt="Ask Question" title="Ask Question">
                    <span>+</span>
                </button>
            </Link>
        );
    }
}