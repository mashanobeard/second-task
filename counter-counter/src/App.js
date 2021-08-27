import './App.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import About from './components/about';
import CounterParent from './containers/CounterParent';


function App() {
const routes = ["/About","/Counters"];

  return (
      <div className="App">
      <BrowserRouter>
      <Route path = "/">
      <AppBar position="static">
        <Tabs>
          <Tab 
            label="About" 
            value={routes[0]}
            component = {Link}
            to = {routes[0]} />
          <Tab
            label="Counters"
            value={routes[1]}
            component = {Link} 
            to = {routes[1]}/>
        </Tabs>
      </AppBar>
      </Route>

      <Switch>
      <Route path="/About" component ={About} />
      <Route path="/Counters" component ={CounterParent} />


      </Switch>
      </BrowserRouter>
      </div>
  
  );
}

export default App;
