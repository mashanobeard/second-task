import React, {useState} from 'react';
import Counter2 from '../views/Counter/bigCounter';
import CounterContainer from './CounterContainer';


const CounterParent = (props) => {
   const [counter, setCount] = useState (1)
   
    const counterIncrement = () => {
            return setCount(counter => counter +1)  
    } 
    const counterDecrement = () => {
        if(counter > 1) {
        setCount(counter => counter - 1);
        }  
    }
    const counterReset = () => {
         setCount (1)
    }

    const Counters = [];
    for (var i = 0; i < counter; i += 1) {
     Counters.push(<CounterContainer key={i} />);
    }

      return(
          <div>
          <Counter2
          counterIncrement={counterIncrement}
          counterDecrement={counterDecrement}
          counterReset={counterReset}
          counter={counter}
          /> {Counters}
          </div>
      )  

      }

export default CounterParent;