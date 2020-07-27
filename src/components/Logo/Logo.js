import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return(
        <div className = 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 80, width:90}} >
                <div className="Tilt-inner pa3"><img stlye={{paddingTop:'15px'}} src={brain} alt="not found"/></div>
            </Tilt>
        </div>
    );
}

export default Logo;