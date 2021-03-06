//основное
import React from 'react';
//импорт библиотек
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export const MainContainer = ({ children, ...props }) => {
    const styles = useStyles();
    return (
        <Container
            className={styles.root}
            component='main'
            maxWidth="sm"
            {...props}
        >{children}</Container>
    )
};
