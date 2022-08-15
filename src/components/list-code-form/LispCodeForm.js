import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LispCodeForm(props) {
    const [lispCode, setLispCode] = useState(null);

    const handleSubmitClick = () => {
        props.onSubmitCode(lispCode);
    }

    const setLispCodeInputValue = (event) => {
        setLispCode(event.target.value);
    }

    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h5" component="div">
            Submit lisp code to be checked for parentheses issues
          </Typography>
          <br/>
          <TextField fullWidth label="Lisp Code" id="lispCode" onChange={setLispCodeInputValue}/>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button size="small" variant="contained" onClick={handleSubmitClick}>Submit Code</Button>
        </CardActions>
      </Card>
    );
}