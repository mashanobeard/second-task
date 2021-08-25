import React from 'react';

import Button from '@material-ui/core/Button';



const Counter2 = (CounterIncrement) =>(

    <div >

     <Button variant="contained" color="primary" onClick={CounterIncrement} >
        Increment Counter
      </Button>
   
     
    </div>
  );


export default Counter2;