import Main from './components/Main'
import NavbLink from './components/NavbLink'

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '15vw', backgroundColor: '#DAF7A6' }}>
                <NavbLink />
            </div>
            <div>
                <h1>Welcome User!</h1>
                <Main />
            </div>
        </div>
    );
}

export default App;
