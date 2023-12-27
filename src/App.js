import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
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
                            <a className="titles-header__title" href="#">Доклады</a>
                            <a className="titles-header__title" href="#">СПОР</a>
                            <a className="titles-header__title" href="#">Режимы</a>
                            <a className="titles-header__title" href="#">Отчёты</a>
                            <a className="titles-header__title" href="#">Объекты</a>
                            <a className="titles-header__title" href="#">Авария</a>
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
                            <img className="logined__avatar" src="avatar.jpg" img />
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
                </header>
                <main className="page">
                    <div className="navbar">
                        <ul>
                            <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-clipboard"></i>
                                <div className="navbar__title">Оперативная сводка</div>
                            </a>
                            <a className="navbar__block" href="#"><i className="navbar__icon fa-regular fa-calendar-days"></i>
                                <div className="navbar__title">Доклад ПНД</div>
                            </a>
                            <a className="navbar__block" href="#"><i className="navbar__icon fa-solid fa-pencil"></i>
                                <div className="navbar__title">Доклад ПТН</div>
                            </a>
                        </ul>
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer__container">
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
