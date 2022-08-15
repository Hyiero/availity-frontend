import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SimpleCard(props) {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 800 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {props.text}
            </Typography>
        </CardContent>
        { 
            props.action &&
            <CardActions>
                <Button href={props.action.link} target='_blank'>{props.action.text}</Button>
            </CardActions>
        }
        </Card>
      );
}