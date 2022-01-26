import React from 'react';
//импорт библиотек
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "'Patrick Hand', cursive",
        margin: theme.spacing(3, 0, 2),
        textAlign: 'center',
        fontSize: '40px',
        textShadow: '1px 1px black'
    },
}));

export const Header = () => {
    //получаем стили
    const styles = useStyles()

    return (
        <Typography className={styles.root} variant="h5" component="h1" >
            React-Hook Form
        </Typography>
    )
};
