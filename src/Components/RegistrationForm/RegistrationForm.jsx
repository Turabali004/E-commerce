import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Features/user/userSlice";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(registerUser(values));
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/product-listing");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 text-center">
      <div className="w-full max-w-md p-8 bg-gray-400 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700 text-left">Username</label>
                <Field
                  name="username"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-950 sm:text-sm"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-blue-950 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-left">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-left">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-950  sm:text-sm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-950 text-white font-bold rounded-md shadow-sm hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-transform transform hover:scale-105"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;