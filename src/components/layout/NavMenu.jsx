import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../routes';
import { Typography } from '@mui/material';

export default function NavMenu() {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  
    const openMenu = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };
  
    const closeMenu = (e) => {
        setMenuAnchorEl(null);
    };
  

    return (
        <div>
            <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu" 
                sx={{ mr: 2 }}
                onClick={openMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={menuAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(menuAnchorEl)}
                onClose={closeMenu}
            >
                {
                    routes.map((route) => (
                        <MenuItem 
                            component={RouterLink}
                            to={route.path}
                            key={route.name}
                            onClick={closeMenu}
                            sx={{ my: 1, color: 'white', display: 'block' }}
                        >
                            <Typography style={{textDecoration: 'none', color: 'white'}} sx={{ fontSize: 16 }}>
                                {route.name}
                            </Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
};
