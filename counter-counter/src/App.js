import React from 'react';
import './App.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './components/About';
import CounterParent from './containers/CounterParent';
import Other from './components/ErrorPage';
import Login from "./components/Login";
import LoginSuccess from './components/LoginRedux/loginSuccess';
import LoginReduxContainer from './containers/LoginReduxContainer';
import LoginReduxFormContainer from './containers/LoginReduxFormContainer';


function App() {
const routes = ["/About","/Counters", "/Login","/Login-Redux",'/404', '/Login-Redux/Success', '/Login-Redux-Form'];
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
            //value={routes[0]}
            component = {Link}
            to = {routes[0]} />

          <Tab
            label="Counters"
           // value={routes[1]}
            component = {Link} 
            to = {routes[1]}/>

          <Tab
            label="Login"
           // value={routes[2]}
            component = {Link} 
            to = {routes[2]}/>

          <Tab
            label="Login-Redux"
           // value={routes[3]}
            component = {Link} 
            to = {routes[3]}/>

          <Tab
            label="Login-Redux-Form"
           // value={routes[3]}
            component = {Link} 
            to = {routes[6]}/>

      
          </Tabs>
      </AppBar>
       )} />

      <Switch>
      
      <Route path="/About" component ={About} />
      <Route path="/Counters" component ={CounterParent} />
      <Route path="/Login" component ={Login} />
      <Route exact path="/Login-Redux" component ={LoginReduxContainer} />
      <Route path="/Login-Redux/Success" component ={LoginSuccess} />
      <Route path="/Login-Redux-Form" component ={LoginReduxFormContainer} />
      <Route path="/404"component ={Other} />
      
      </Switch>
      
      </Router>
      </div>
  
  );
}

export default App;
