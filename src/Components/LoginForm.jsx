import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser, setError } from '../Features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === values.email && storedUser.password === values.password) {
            dispatch(loginUser(storedUser));
            navigate('/admin-panel');
        } else {
            dispatch(setError('Invalid email or password'));
        }
    };

    const handleClick = () => {
        navigate('/register');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-orange-600 text-white font-bold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-transform transform hover:scale-105"
                            >
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
                    <button onClick={handleClick}><span className='flex items-center justify-center mt-8 w-full'>Not registerd ? Click Here</span></button>
            </div>
        </div>
    );
};

export default LoginForm;