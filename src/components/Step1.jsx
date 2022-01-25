import React from 'react';
import { MainContainer } from './MainContainer';
import Typography from '@material-ui/core/Typography';
import { useForm, useFormState } from 'react-hook-form';
import { Form } from './Form'
import { Input } from './Input'

export const Step1 = () => {
    const { control, register, watch, handleSubmit, } = useForm({
        mode: 'onBlur'
    })
    console.log(watch())
    //взаимодействие с состоянием формы, необходимо передать объект control из хука useForm
    const { errors } = useFormState({ control })
    

    return (
        <MainContainer>
            <Typography
                variant="h5"
                component="h2">Step 1
            </Typography>
            <Form>
                <Input {...register("firstName")}
                    id='firstName'
                    type='text'
                    label='First Name'
                />
                <Input {...register("lastName")}
                    id='lastName'
                    type='text'
                    label='Last Name'
                />
                
            </Form>
        </MainContainer>
    )
};
