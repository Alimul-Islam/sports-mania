import React from 'react';
import image from '../../Assets/stadium.jpeg'
import './Hearder.css'

const Header = () => {
    return (
        <div className = "Header-main"> 

           <div> <img src={image} alt="" srcSet=""/>
           <div className = "heading" >Sports Mania</div>
           </div>

        </div>
    );
};

export default Header;