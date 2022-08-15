import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavLabel from './NavLabel';
import NavMenu from './NavMenu';

export default function Nav() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
            main: '#1976d2',
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <NavMenu />
                    <NavLabel />
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};
