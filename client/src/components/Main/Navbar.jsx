import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';

const Navbar = () => {
  const [user,setUser] = useUserContext()
  
    const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Auth
          </Typography>
          {user ? (
            <>
            <Button>
              <Link to="/admin">Admin</Link>
            </Button>
              <Button color="inherit">
                {user.username}
              </Button>
              <Button onClick={async()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                await setUser(null);
                navigate('/login')
                // navigate("http://localhost:3000/admin")
              }} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <> 
              <Button color="inherit">
                <Link style={{color:'white', textDecoration:'none'}} to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white', textDecoration:'none'}} to="/register">Register</Link>
              </Button>
            </>
          )}
          {/* <Button color="inherit">
                <Link style={{color:'white', textDecoration:'none'}} to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link style={{color:'white', textDecoration:'none'}} to="/register">Register</Link>
              </Button> */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar