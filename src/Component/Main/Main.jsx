import React from 'react';
import { makeStyles } from '@material-ui/core';
import Styles from './Main.module.css';
import { NewLogin } from '../Component';

const useStyles = makeStyles(theme => ({
    wrapper: { height: "100vh", width: "100vw" }
}))

const Main = (props) => {
    const classes = useStyles();
    return (
        <>
            <main>
                <div className={classes.wrapper}>
                    <div className={Styles.formContainer}>
                        <NewLogin />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
