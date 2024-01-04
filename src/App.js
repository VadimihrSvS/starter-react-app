import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <Main />
                <footer className="footer">
                    <div className="footer__container">
                    </div>
                </footer>
            </div>
        </div >
    );
}

export default App;
