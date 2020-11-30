import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <img src='https://www.brandcrowd.com/gallery/brands/pictures/picture15119696991530.png'/>
            <div className={s.loginBlock}>
              <NavLink to={'/login'}>Login</NavLink>
            </div>
        </div>
    );
};

export default Header;
