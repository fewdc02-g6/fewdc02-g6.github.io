import Main from './components/Main'
import NavLink from './components/Navbar/NavLink'
import Greeting from './components/MainUp/Greeting'


function App() {
    return (
        <div className="main-container">
            <NavLink />
            <div className="main-content">
                <Greeting />
                <Main />
            </div>
        </div>
    );
}

export default App;
