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