import React from 'react';

import Button from '@material-ui/core/Button';



const Counter2 = (props) =>(

    <div >
      <h1 className="num">how much?
          <div>={props.numOfCounters}</div>
      </h1>
     <Button  variant="contained" color="primary" onClick={props.counterIncrement} >
        Increment Counter
      </Button>
      <Button  variant="contained" color="secondary" onClick={props.counterDecrement} >
        Decrement Counter
      </Button>
      <Button  variant="contained" color="default" onClick={props.counterReset} >
        Reset Counter
      </Button>

   
     
    </div>
  );


export default Counter2;