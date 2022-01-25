//основные
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
//файлы библиотек
import Typography from '@material-ui/core/Typography';
import Article from '@mui/icons-material/Article';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
//компоненты
import { MainContainer } from '../components/MainContainer';
import { MyForm } from '../components/MyForm'
import { MyButton } from '../components/MyButton';
//получение данных из контекста
import { useData } from '../DataContext'

export const Result = () => {
    const { data, setData } = useData();
    let navigate = useNavigate();

    const { handleSubmit } = useForm({
        defaultValues: {...data},
    });

    const onSubmit = async (formData) => {
        console.log('sent to server', formData);
        //отправить на сервер (formData)
    };
    const onReset = () => {
        setData({});
        navigate('/');
        console.log('data clear');
    };

    return (
        <MainContainer>
            <Typography
                variant="h5"
                component="h2">
                <Article color='primary'/>
                Form values
            </Typography>
            <TableContainer component={Paper}>
                {/* <TableHead>

                </TableHead>
                <TableBody>

                </TableBody> */}
            </TableContainer>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyButton
                    type='submit'
                    variant="contained">send to server
                </MyButton>
                <MyButton
                    onClick={onReset}
                    variant="outlined"
                    type='reset'
                >Clear and start over
                </MyButton>
            </MyForm>
        </MainContainer>
    )
};
