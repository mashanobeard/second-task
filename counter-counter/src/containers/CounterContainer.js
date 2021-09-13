import React, {useState} from 'react';
import Counter from '../views/Counter/index';
import PropTypes from 'prop-types';


const CounterContainer = (props) => {
   const [count, setCount] = useState (0)
   console.log(props)
   
    const handleIncrement = () => {
        setCount(count => count + 1);  
    } 
        
    const handleDecrement = () => {
        setCount(count => count - 1);
    }
   
    const handleReset = () => {
         setCount (0)
 
    }
      
      return(
          <Counter 
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
          count={count}
          />
      )  

      }
      CounterContainer.ropTypes ={
        handleIncrement: PropTypes.func,
        handleDecrement: PropTypes.func,
        handleReset: PropTypes.func,
        count: PropTypes.number
      }
     

export default CounterContainer;