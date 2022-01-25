import * as yup from 'yup';

export const schemaStep1 = yup
    .object()
    .shape({
        firstName: yup
            .string()
            .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
            .required('First name is required'),
        lastName: yup
            .string()
            .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
            .required('Last name is required'),
    })
    .required();

export const schemaStep2 = yup
    .object()
    .shape({
        email: yup
            .string()
            .email('Email should have correct format')
            .required('Email is required'),
        phoneNumber: yup
        .string()
        .matches(/^([^a-zA-zА-Яа-я]*)$/, 'Phone number should not contain letters')
        
    })
    .required();