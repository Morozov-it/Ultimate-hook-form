import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';


//передача реф к дочернему элементу
export const MyInput = forwardRef((props, ref) => {
    return <TextField
        inputRef={ref}
        {...props}
        margin='normal'
        fullWidth
        />
})

