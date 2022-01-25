//основные
import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
//файлы библиотек
import Typography from '@material-ui/core/Typography';
//пакет для валидации
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStep1 } from '../utils/validation';
//компоненты
import { MainContainer } from '../components/MainContainer';
import { MyForm } from '../components/MyForm'
import { MyInput } from '../components/MyInput'
import { MyButton } from '../components/MyButton';


export const Step1 = () => {
    let navigate = useNavigate();
    const { control, register, handleSubmit, } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemaStep1)
    });
    //console.log(watch())

    const { errors } = useFormState({ control });
    const onSubmit = async data => {
        console.log(data);
        navigate('/step2');
    };

    return (
        <MainContainer>
            <Typography
                variant="h5"
                component="h2">Step 1
            </Typography>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyInput {...register("firstName")}
                    id='firstName'
                    type='text'
                    label='First Name'
                    variant="outlined"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <MyInput {...register("lastName")}
                    id='lastName'
                    type='text'
                    label='Last Name'
                    variant="outlined"
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <MyButton
                    type='submit'
                    variant="contained">Next
                </MyButton>
            </MyForm>
        </MainContainer>
    )
};
