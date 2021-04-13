import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import Canvas from './canvas'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Canvas/>
        <Clock />
        
      </header>
    </div>
  );
}

export default App;
