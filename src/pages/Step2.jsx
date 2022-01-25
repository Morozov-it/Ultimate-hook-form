//основные
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
//файлы библиотек
import Typography from '@material-ui/core/Typography';
import { FormControlLabel } from '@material-ui/core';
//пакет для валидации
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStep2 } from '../utils/validation';
import { normalizePhoneNumber } from '../utils/normalizePhoneNumber'
//компоненты
import { MainContainer } from '../components/MainContainer';
import { MyForm } from '../components/MyForm'
import { MyInput } from '../components/MyInput'
import { MyButton } from '../components/MyButton';
import { MyCheckbox } from '../components/MyCheckbox';


export const Step2 = () => {
    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemaStep2)
    });
    //console.log(watch())

    const havePhone = watch('havePhone');
    function changePhone(event) {
        event.target.value = normalizePhoneNumber(event.target.value)
    }

    const onSubmit = async data => {
        console.log(data);
        navigate('/step2');
    };

    return (
        <MainContainer>
            <Typography
                variant="h5"
                component="h2">Step 2
            </Typography>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <MyInput
                    {...register("email")}
                    id='email'
                    type='email'
                    label='email'
                    required
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <FormControlLabel
                    control={<MyCheckbox {...register("havePhone")} />}
                    label="Have a phone?" />
                {havePhone &&
                <MyInput
                    {...register("phoneNumber")}
                    id='phoneNumber'
                    type='tel'
                    label='Phone number'
                    onChange={changePhone}
                    variant="standard"
                    error={!!errors.phoneNumber}
                    helperText={errors?.phoneNumber?.message}
                />}
                <MyButton
                    type='submit'
                    variant="contained">Next
                </MyButton>
                <MyButton
                    onClick={() => navigate('/')}
                    variant="outlined"
                    type='reset'>Back
                </MyButton>
            </MyForm>
            
        </MainContainer>
    )
};
