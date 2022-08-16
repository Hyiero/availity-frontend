import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { Grid } from '@mui/material';

const formFields = [
    { gridSpacing: 6, name: 'firstName', label: 'First Name', multiline: false },
    { gridSpacing: 6, name: 'lastName', label: 'Last Name', multiline: false },
    { gridSpacing: 12, name: 'npi', label: 'NPI #', multiline: false },
    { gridSpacing: 12, name: 'address', label: 'Business Address', multiline: true },
    { gridSpacing: 6, name: 'phoneNumber', label: 'Phone #', multiline: false },
    { gridSpacing: 6, name: 'email', label: 'Email', multiline: false }
]

export default function UserRegistrationForm(props) {
    const initialUserInfoState = { 
        firstName: null,
        lastName: null,
        npi: null,
        address: null,
        phoneNumber: null,
        email: null
    }
    const initialErrorState = { ...initialUserInfoState };

    const [userInfo, setUserInfo] = useState(initialUserInfoState);
    const [errors, setErrors] = useState(initialErrorState);
    const [formValid, setFormValid] = useState(false);

    const handleSubmitClick = () => {
        props.onSubmit(userInfo);
    }

    const setFieldValue = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    React.useEffect(() => {
        var userInfoCompletelyFilledIn = Object.values(userInfo).filter(x => !x).length === 0;
        var errorsPresent = Object.values(errors).filter(x => x).length > 0;

        setFormValid(Boolean(!errorsPresent && userInfoCompletelyFilledIn));
    }, [userInfo, errors])

    const checkForErrors = (event) => {
        const { name, value } = event.target;
        setErrors(!Boolean(value.trim()) ? { ...errors, [name]: 'Required Field' } : { ...errors, [name]: false })
        if (name === 'email') {
            setErrors(!isValidEmail(value) ? { ...errors, email: 'Email Invalid' } : { ...errors, email: false });
        }

        if (name === 'phoneNumber') {
            setErrors(!isValidPhoneNumber(value) ? { ...errors, phoneNumber: 'Phone # must be 10 digits' } : { ...errors, phoneNumber: false });
        }
    }

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const isValidPhoneNumber = (phoneNumber) => {
        const onlyDigits = /^[0-9\b]+$/.test(phoneNumber);

        return Boolean(onlyDigits && phoneNumber.length === 10)
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 450 }}>
            <CardHeader title={'User Registration'} />
            <CardContent>
                <Grid container>
                    {
                        formFields.map((field) => (
                            <Grid 
                                key={field.name}
                                item 
                                xs={field.gridSpacing} 
                                style={{ padding: '5px'}}
                            >
                                <TextField 
                                    required 
                                    fullWidth={field.gridSpacing === 12} 
                                    error={Boolean(errors[field.name])} 
                                    name={field.name} 
                                    id={field.name}
                                    label={field.label}
                                    multiline={field.multiline}
                                    helperText={errors[field.name]}
                                    onChange={setFieldValue} 
                                    onBlur={checkForErrors}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button id="userRegSubmitButton" disabled={!formValid} variant="contained" onClick={handleSubmitClick}>Submit</Button>
            </CardActions>
        </Card>
    );
}