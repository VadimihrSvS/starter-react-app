import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ReportsNavbar() {
    return (
        <ul>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-clipboard"></i>
                <div className="navbar__title">Оперативная сводка</div>
            </a>
            <NavLink className="navbar__block" to="dailyReport"><i className="navbar__icon fa-solid fa-pencil"></i>
                <div className="navbar__title">Ежедневный доклад ГИ</div>
            </NavLink>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-calendar-days"></i>
                <div className="navbar__title">Доклад ПНД</div>
            </a>
            <a className="navbar__block" href="#"><i className="navbar__icon fa-solid fa-pencil"></i>
                <div className="navbar__title">Доклад ПТН</div>
            </a>
        </ul>
    );
};

