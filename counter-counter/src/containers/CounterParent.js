import React from 'react';
import PropTypes from 'prop-types';
import CounterContainer from './CounterContainer';
import Counter2 from '../views/Counter/index2';


class CounterParent  extends React.Component{
    constructor(props){
        super(props)
  
    this.state = {
        counter: 0
    };
    this.counterIncrement = this.counterIncrement.bind(this)
   } 
 
    counterIncrement () {
        this.setState((state) =>({
            counter: this.state.counter + 1 ,
        }))
    }

    render(){
       const Counters = [];
      for (var i = 0; i < this.state.counter; i += 1) {
       Counters.push(<CounterContainer key={i} />);
     }
     const props ={
          counter: this.state.counter,
          counterIncrement: this.counterIncrement,
      
      }
        return(
            <Counter2 {...props}/>
        );
    }
}
    CounterParent.propTypes ={
        counterIncrement: PropTypes.func,
        counter: PropTypes.number,
    
    }


export default CounterParent;
