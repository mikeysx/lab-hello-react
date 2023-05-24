import logo from './images/ironhack-logo-xs.png';
import logo2 from './images/menu-top-xs.png';
import './App.css';
import MyHeader from './components/MyHeader';
import MyBody from './components/MyBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo2} className="App-logo2" alt="logo2" />
      </header>
      <MyHeader/>
      <MyBody />


    </div>
  );
}

export default App;
