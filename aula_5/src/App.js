import componenteTeste from './components/ComponenteTeste'
import './index.css'
let nome = 'Enzo'

function App() {
    return (
        <div>
            <h1>Ola {nome}</h1>
        </div>
        <componenteTeste />
    );
}

export default App