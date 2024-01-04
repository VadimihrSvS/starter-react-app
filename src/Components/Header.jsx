import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__logo logo" href="#">
                    <div className="logo__image"></div>
                    <div className="logo__name">Диспетчерская <br /> группа САВР</div>
                </a>
                <a className="header__date date" href="#">
                    <div className="date__weekday"></div>
                    <div className="date__year"></div>
                    <div className="date__time"></div>
                </a>
                <div className="header__titles titles-header">
                    <NavLink className="titles-header__title" to='/reports'>Доклады</NavLink>
                    <NavLink className="titles-header__title" to='/SPOR'>СПОР</NavLink>
                    <NavLink className="titles-header__title" to='/schedule'>Режимы</NavLink>
                    <NavLink className="titles-header__title" to='/replies'>Отчёты</NavLink>
                    <NavLink className="titles-header__title" to='/objects'>Объекты</NavLink>
                    <NavLink className="titles-header__title" to='/accident'>Авария</NavLink>
                </div>


                <select name="form[]" className="form" data-show-selected="true">
                    <option value="1" selected>Доклады</option>
                    <option value="2">СПОР</option>
                    <option value="3">Режимы</option>
                    <option value="4">Отчёты</option>
                    <option value="5">Объекты</option>
                    <option value="6">Авария</option>
                </select>

                <div className="header__logined logined">
                    <img className="logined__avatar" src="avatar.jpg" />
                    <div className="logined__info">Пупкин Василий</div>
                    <div className="logined__actions">
                        <a className="logined__icon fa-solid fa-caret-down" href="#"></a>
                        <div className="logined__popup popup-elements">
                            <div className="popup-elements__element">Какая-то строка</div>
                            <div className="popup-elements__element">Ещё одна строка</div>
                            <div className="popup-elements__br"></div>
                            <div className="popup-elements__element">Настройки</div>
                            <div className="popup-elements__br"></div>
                            <div className="popup-elements__element">Выйти</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
}

export default Header;
