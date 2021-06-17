import React, { useState } from 'react';
import { Card, FormControl, InputLabel, OutlinedInput, FormHelperText, FormGroup, CardContent, Typography, Box, Link, Button, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import validateEmail, { validatePsw } from '../Validation/Validation';
import { FetchLoginData } from '../../actions/index';
// import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles(theme => ({
    margin: { margin: theme.spacing(1) },
    form: { padding: "1rem 2rem" },
    errorMsg: { color: theme.palette.error.main }
}))

const NewLogin = () => {
    const classes = useStyles();
    const [data, setData] = useState({ email: "", psw: "" });
    const [errorMsg, setErrorMsg] = useState({ emailError: "", pswError: "" });
    const dispatch = useDispatch();
    const storeData = useSelector(state => { return state; });

    const userInput = (e) => {
        const { name, value } = e.target;
        setData((prev) => { return { ...prev, [name]: value } })
    }

    const validateAndSubmit = (e) => {
        e.preventDefault();
        const emailValidationStatus = validateEmail(data.email);
        if (!emailValidationStatus) {
            setErrorMsg((prev) => { return { ...prev, emailError: "Invalid email" } });
        } else {
            setErrorMsg("");
        }

        const pswValidationStatus = validatePsw(data.psw);
        if (!pswValidationStatus) {
            setErrorMsg((prev) => { return { ...prev, pswError: "Invalid password" } })
        } else {
            setErrorMsg("");
        }

        if (emailValidationStatus && pswValidationStatus) {
            dispatch(FetchLoginData(data));
        }

        const loginEmail = storeData.LoginData.data[0].email;
        // const loginPsw = storeData.LoginData.data[0].psw;
        const { email, firstName, lastName } = storeData.ReceivedData.data[0]

        if (email === loginEmail) {
            alert(`Welcome ${firstName} ${lastName}`);
            window.location.href = "https://nexotto.com/"
        }

    }

    return (
        <>
            <Box>
                <Card>
                    <CardContent>
                        <Box>
                            <Box>
                                <Typography align="center" variant="h4" gutterBottom>Google</Typography>
                                <Typography align="center" variant="h5" gutterBottom>Sign in</Typography>
                                <Typography align="center" variant="subtitle1">to continue to Gmail</Typography>
                            </Box>
                            <Box mt={2}>
                                <form className={classes.form} onSubmit={validateAndSubmit}>
                                    <FormGroup style={{ marginBottom: ".2rem" }}>
                                        <FormControl className={classes.margin} fullWidth variant="outlined">
                                            <InputLabel htmlFor="outlined-email">Email or phone</InputLabel>
                                            <OutlinedInput labelWidth={115} type="text" name="email" onChange={userInput} />
                                            <FormHelperText className={classes.errorMsg}>{errorMsg.emailError}</FormHelperText>
                                        </FormControl>
                                    </FormGroup>
                                    <FormGroup style={{ marginBottom: ".2rem" }}>
                                        <FormControl className={classes.margin} fullWidth variant="outlined">
                                            <InputLabel htmlFor="outlined-password">Enter your password</InputLabel>
                                            <OutlinedInput labelWidth={160} type="password" name="psw" onChange={userInput} />
                                            <FormHelperText className={classes.errorMsg}>{errorMsg.pswError}</FormHelperText>
                                        </FormControl>
                                    </FormGroup>
                                    <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Link href="#">Create account</Link>
                                        <Button type="submit" color="primary" variant="contained">Next</Button>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default NewLogin
