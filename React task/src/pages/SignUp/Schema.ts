import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  name: yup.string().required('Name is requiered.'),
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters.')
    .max(30, 'Username cannot exceed 30 characters.')
    .required('Username is requiered.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(50, 'Password cannot exceed 50 characters.')
    .required('Password is requiered.'),
});
