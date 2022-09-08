import './App.css';
import Section from './components/Section';
import ErrBound from './components/ErrBound';

function App() {
  return (
    <div className="App">
      <h1>Err</h1>
      <ErrBound>
        <Section username="Davide"/>
      </ErrBound>
      <ErrBound>
        <Section username="winnie" />
      </ErrBound>


    </div>
  );
}

export default App;
