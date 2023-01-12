import './App.css';
import Login from './components/login/login'
import Grid from '@mui/material/Grid'

const  App = () => {


  return (
    <Grid container>
      <Grid item xs={12}>
          <Login></Login>
      </Grid>
    </Grid>
  );
}

export default App;
