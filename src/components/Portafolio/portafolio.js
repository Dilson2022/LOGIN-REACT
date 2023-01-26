import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#B0B0B0',
  color: '#DA4168',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: '#6F6F6F',
    color: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));


const Portafolio = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Item>
                <Typography variant="h3" gutterBottom>
                    Full-Stack Developer
                </Typography> 
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <Item2>
                            <Typography variant="h5" gutterBottom>
                                <p>Yo soy un desarrollador full stack que maneja las siguientes tecnologias</p>
                                <JavascriptIcon />
                                <CodeIcon />
                            </Typography>   
                        </Item2>
                    </Grid>
                </Grid>
                <Grid container mt={2}>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <Item2>
                            <Typography variant="h5" gutterBottom>
                                <p>En estas redes me pueden encontrar</p>
                                <a href="https://www.linkedin.com/feed/" target={"_blank"}>
                                    <LinkedInIcon />
                                </a>
                                <a href="https://www.linkedin.com/feed/" target={"_blank"}>
                                    <InstagramIcon />
                                </a>
                                <a href="https://www.linkedin.com/feed/" target={"_blank"}>
                                    <FacebookIcon />
                                </a>
                            </Typography>   
                        </Item2>
                    </Grid>
                </Grid>
            </Item>
            </Grid>
            <Grid item xs={6}>
            <Item>xs=4</Item>
            </Grid>
      </Grid>
    )
}

export default Portafolio