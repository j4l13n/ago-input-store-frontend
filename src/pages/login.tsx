import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";

const Login: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    // Perform login action here
    setSubmitting(false);
  };

  return (
    <>
      <div className="min-h-screen z-20 flex justify-center items-center bg-gradient-to-br from-green-600 to-green-800">
        <div className="bg-white rounded-lg shadow-lg p-8 flex justify-between items-center w-full max-w-2xl">
          {/* Left side - Login Form */}
          <div className="w-1/2 pr-4">
            <Link href="/" className="">
              <Image
                src="/ago-input-logo-green.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={50}
                height={24}
                priority
              />
            </Link>
            <h2 className="text-2xl font-bold my-4">Login</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button> */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                    <Link
                      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      href="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="text-center pt-4">
              <span className="inline-block align-baseline font-semibold text-sm">
                Don&apos;t have an account?{" "}
              </span>{" "}
              <Link
                href="/register"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Register
              </Link>
            </div>
          </div>
          {/* Right side - SVG Image */}
          <div className="w-1/2 pl-4 relative border-1 border-green-200">
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src="/farmer-using-smart-farm-application.svg"
                alt="Login Image"
                // layout="fill"
                objectFit="cover"
                className="rounded-lg"
                width={700}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
