import axios from 'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { saveAs } from 'file-saver';


export default function ProblemSixPage() {
    const [selectedFile, setSelectedFile] = React.useState('');

    const handleFileImport = (event) => {
        if (event.target.files.length > 0) {
            const formData = new FormData();
            formData.append( 
                'file', 
                event.target.files[0], 
                event.target.files[0].name 
            );
            
            uploadFile(formData);
        }
    }

    const uploadFile = (file) => {
        const config = { headers: { 'Content-Type': 'multipart/form-data'} };

        axios.post(`${process.env.REACT_APP_BASEURL}api/enrollment/split?groupBy=InsuranceCompany`, file, config)
        .then(response => {
            setSelectedFile('');
            for(var prop in response.data) {
                var blob = new Blob([response.data[prop]], {type: "text/csv;charset=utf-8"});
                saveAs(blob, `${prop}.csv`);
            }
        });
    }

    return (
        <div className='main-content'>
            <Card sx={{ minWidth: 275, maxWidth: 800 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Please choose a enrollment csv to import which contains the following fields: User Id, Name, Version, and Insurance Company.
                        We will split these files by Insurance Company and remove any duplicate users with the same insurance retaining the greatest version
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept=".csv" multiple type="file" onChange={handleFileImport} value={selectedFile} />
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}