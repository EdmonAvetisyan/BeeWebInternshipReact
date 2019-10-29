/* jshint ignore:start */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '100px'
  },
  paper: {
    padding: theme.spacing(0, 1),
  },
  button:{
    margin: '8px 0'
  }
}));

function LoginForm() {
  const classes = useStyles();

  return (
    <Grid 
      className={classes.root} 
      container 
      direction="row" 
      alignItems="center" 
      justify="center"
    >
      <Grid item xs={12} sm={5}>
        <Paper className={classes.paper} component='section'>
          <form noValidate autoComplete="off">
            <TextField
              label="Login"
              margin="dense"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Password"
              margin="dense"
              variant="outlined"
              type="password"
              fullWidth
            />

            <Button
              className={classes.button} 
              variant="contained" 
              margin="dense"
              color="primary" 
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
/* jshint ignore:end */
