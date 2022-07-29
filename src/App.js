import './App.css';
import Header from '../src/header/header'
import Wordle from '../src/wordle/wordle'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <Wordle/>
    </div>
  );
}

export default App;
