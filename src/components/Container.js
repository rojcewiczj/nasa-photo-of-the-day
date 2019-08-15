import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FixedMenuLayout from './HomePage';
export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
    <Typography component="div"  className ="background-Containter"  > 
         <FixedMenuLayout />   
     </Typography>
      </Container>
    </React.Fragment>
  );
};