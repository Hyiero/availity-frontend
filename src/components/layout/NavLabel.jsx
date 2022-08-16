import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";


export default function NavLabel() {
    const location = useLocation();
    const [pageLabel, setPageLabel] = React.useState('Availity Homework');

    React.useEffect(() => {
        const pageName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
        const problemNumber = capitalizeFirstLetter(pageName);
        const label = problemNumber ? `Availity Homework - Problem ${problemNumber}` : 'Availity Homework';
        setPageLabel(label);
    }, [location]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {pageLabel}
        </Typography>
    );
};
