import React from 'react';
import './App.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './components/about';
import CounterParent from './containers/CounterParent';
import Other from './Other';
import Login from "./components/login/LoginForm";


function App() {
const routes = ["/About","/Counters", "/Login"];
const [value, setValue] = React.useState(0)
const handleTabs=(e,val)=>{
  setValue(val)
}

  return (
      <div className="App">
      <Router>
      <Route
       path = "/"
       render={(history) => (

      
      <AppBar position="static">
        <Tabs value= {value} onChange={handleTabs}>
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
          <Tab
            
            label="Login"
            value={routes[2]}
            component = {Link} 
            to = {routes[2]}/>

        </Tabs>
      </AppBar>
       )} />

      <Switch>
      
      <Route path="/About" component ={About} />
      <Route path="/Counters" component ={CounterParent} />
      <Route path="/Login" component ={Login} />
      <Route path="*"component ={Other} />
      

    
      </Switch>
      
      </Router>
      </div>
  
  );
}

export default App;
