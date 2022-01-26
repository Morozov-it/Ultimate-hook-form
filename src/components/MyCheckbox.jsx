import React, { forwardRef } from 'react';
//импорт библиотек
import { Checkbox } from '@material-ui/core';


//передача реф к дочернему элементу
export const MyCheckbox = forwardRef((props, ref) => {
    return <Checkbox
        inputRef={ref}
        {...props}
        color='primary'
    />
})

