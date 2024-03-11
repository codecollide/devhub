import React from 'react';
import './header.css'
const Header = (props) => {
    return (
        
            <header className='app-header'>
                <img src={props.logoSrc} className="app-logo" alt='logo'></img>
                <h1 className='app-title'>{props.pageTitle}</h1>
            </header>
        
    );
};

export default Header;