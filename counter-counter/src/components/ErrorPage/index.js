import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

 function Other() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="error" >
        404 - страница не найдена :(
      </Container>
    </React.Fragment>
  );
}

export default Other;