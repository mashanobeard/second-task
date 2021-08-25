import './App.css';
import CounterContainer from './containers/CounterContainer';
import CounterParent from './containers/CounterParent';

function App() {
  return (
    <div className="app">
      <h1>My counter</h1>
       <CounterParent /> 
      <CounterContainer  />
     
      
      
    </div>
  );
}

export default App;
