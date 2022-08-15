import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function NavLabel() {
    const label = 'Availity Homework';

    const url = window.location.href;
    const pageName = url.substring(url.lastIndexOf('/') + 1)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {label} - {'Problem ' + capitalizeFirstLetter(pageName)}
        </Typography>
    );
};
