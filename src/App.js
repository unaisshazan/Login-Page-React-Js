import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import NavBar from './Navbar';
import ProgressBar from './ProgressBar'
import TextField from '@material-ui/core/TextField';
import BarChart from './chart'
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
  width:300,
  marginTop:'5%',
  margin: '0 auto',
  textAlign: "center",
  padding:'2%',
 

  }
}));

function App() {
  const classes = useStyles();
  return (
   
    <div className>
    <NavBar/>
    <Paper elevation={3} className={classes.paper}>
   
    <h1>Login  </h1>
    <form className={classes.paper} noValidate autoComplete="off">
  <TextField label="Email" /><br/>  <br/> 
  <TextField  label="Password" /><br/>
  <br/>   <br/><Button variant="contained" color="secondary">
        Login
      </Button>

      <br/>
      <br/><ProgressBar/>
</form>


    </Paper>
    <BarChart/>
   
  </div>
  );
}

export default App;
