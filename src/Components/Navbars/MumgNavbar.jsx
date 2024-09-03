import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MumgNavbar() {
    return (
        <ul>
            <NavLink className="navbar__block" to="hourMumgReport"><i className="navbar__icon fa-solid fa-pencil"></i>
                <div className="navbar__title">Часовые данные</div>
            </NavLink>
            <NavLink className="navbar__block" to="dayMumgReport"><i className="navbar__icon fa-solid fa-pencil"></i>
                <div className="navbar__title">Суточные данные</div>
            </NavLink>
        </ul>
    );
};

