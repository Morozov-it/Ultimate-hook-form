import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 0, 0),
    },
}));

export const MyButton = ({ children, ...props }) => {
    const styles=useStyles()
    return <Button
        className={styles.root}
        type='submit'
        margin='normal'
        fullWidth
        color="primary"
        variant="contained">{children}</Button>
}

