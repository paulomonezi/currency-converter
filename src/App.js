import logo from './logo.svg';
import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <Converter currencyA="USD" currencyB="BRL"/>
    </div>
  );
}

export default App;
