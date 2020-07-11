import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: "#f2f2ff",  
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper:{
  height:500,
  width:400,
  margin: '0 auto',
  textAlign: "center",
 

  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

    <Paper elevation={3} className={classes.paper}>
    
    <h1>Login </h1>
    <form className={classes.paper} noValidate autoComplete="off">
  <TextField label="Email" /><br/> <br/> 
  <TextField  label="Password" /><br/>
  <br/>   <br/><Button variant="contained" color="secondary">
        Login
      </Button>

</form>

    </Paper>
  </div>
  );
}

export default App;
