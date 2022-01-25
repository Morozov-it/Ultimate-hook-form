//основные
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
//файлы библиотек
import Typography from '@material-ui/core/Typography';
//компоненты
import { MainContainer } from '../components/MainContainer';
import { MyForm } from '../components/MyForm'
import { MyButton } from '../components/MyButton';
import { FileInput } from '../components/FileInput';
//получение данных из контекста
import { useData } from '../DataContext'




export const Step3 = () => {
    const { data, setValues } = useData();
    let navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: {file: data.file}
    });

    const onSubmit = async (formData) => {
        //console.log(formData);
        setValues(formData);
        navigate('/result');
    };

    return (
        <MainContainer>
            <Typography
                variant="h5"
                component="h2">Step 3
            </Typography>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <FileInput control={control} name='file'/>
                <MyButton
                    type='submit'
                    variant="contained">Next
                </MyButton>
                <MyButton
                    onClick={() => navigate('/step2')}
                    variant="outlined"
                    //type='reset'
                >Back
                </MyButton>
            </MyForm>
        </MainContainer>
    )
};
