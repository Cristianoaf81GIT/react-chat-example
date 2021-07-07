import React from 'react';
import logo from '../logo.svg';
const Header = props => {

    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Do zero ao chatbot</h1>
        </header> 
    )
}

export default Header;