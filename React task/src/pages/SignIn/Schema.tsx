import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username cannot exceed 30 characters')
    .required('Username is required.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password cannot exceed 30 characters')
    .required('Password is required.'),
});
