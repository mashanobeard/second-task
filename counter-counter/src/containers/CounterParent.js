import React from 'react';
import PropTypes from 'prop-types';
import CounterContainer from './CounterContainer';
import Counter2 from '../views/Counter/index2';


class CounterParent  extends React.Component{
    constructor(props){
        super(props)
  
    this.state = {
        numOfCounters: 1
    };
    this.counterIncrement = this.counterIncrement.bind(this)
    this.counterDecrement = this.counterDecrement.bind(this)
    this.counterReset = this.counterReset.bind(this)
    this.evenValue = this.evenValue.bind(this)

   } 
 
    counterIncrement () {
        this.setState((state) =>({
            numOfCounters: this.state.numOfCounters + 1 ,
            evenValue(){
                
            }
        }))
    }

    counterDecrement(){
        if(this.state.numOfCounters > 1){
            this.setState((state) =>({
            numOfCounters: this.state.numOfCounters - 1 ,
        }))
    }
}
    counterReset(){
        this.setState((state) =>({
            numOfCounters: 1,
        }))
    }

    evenValue(){
        if (this.state.count %2 === 0 ){
            this.setState((state) =>({
                count: this.state.count + 1,
            }))
        }
    }
        
    
  
   // oddValue{

   // }

    componentDidMount(){
        console.log('did mount')
    }

    render(){
       const Counters = [];
      for (var i = 0; i < this.state.numOfCounters; i += 1) {
       Counters.push(<CounterContainer key={i} />);
     };

     const props ={
        numOfCounters: this.state.numOfCounters,
        counterIncrement: this.counterIncrement,
        counterDecrement: this.counterDecrement,
        counterReset: this.counterReset,
        evenValue: this.evenValue
      
      }
        return(
            <div>
            <Counter2 {...props}/>{Counters}
            </div>
        );
    }
}
    CounterParent.propTypes ={
        counterIncrement: PropTypes.func,
        numOfCounters: PropTypes.number,
        counterDecrement: PropTypes.func,
        counterReset: PropTypes.func,
        evenValue: PropTypes.func
    
    }


export default CounterParent;
