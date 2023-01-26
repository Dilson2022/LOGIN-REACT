import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid'
import { Link  } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Grid container >
        <Grid item xs={4}/>
            <Grid item xs={4}>
            <Link to='/landing'>
                <Button
                    id="basic-button"
                    onClick={handleClick}
                >
                    Landing
                </Button>
            </Link>
            <Link to='/portafolio'>
                <Button
                    id="basic-button"
                    onClick={handleClick}
                >
                    Portafolio
                </Button>
            </Link>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Usuarios
            </Button>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Home
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Link to='/inicioSesion'>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Link>
            </Menu>
        </Grid>
        </Grid>
  );
}