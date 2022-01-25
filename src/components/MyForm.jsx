import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        width: '100%'
    },
}));

//создаем компонент-обертку над формой, передаем все пропсы, атрибут noValidate отключает стандартные функции для формы
export const MyForm = ({children, ...props}) => {
    //получаем стили
    const styles = useStyles()
    return (
        <form
            className={styles.root}
            noValidate
            {...props}
        >{children}
        </form>
    )
};
