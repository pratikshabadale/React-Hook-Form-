import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = () => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <div className='container mt-5'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className='mb-3'>
          <label class='mb-2 text-muted' for='name'>
            Name:
          </label>
          <input
            id='name'
            type='text'
            class='form-control'
            name='name'
            autoComplete='current-name'
            {...register("name", registerOptions.name)}
          />
          <div className='text-danger'>
            {errors?.name && errors.name.message}
          </div>
        </div>
        <div className='mb-3'>
          <label class='mb-2 text-muted' for='email'>
            Email:
          </label>
          <input
            id='email'
            type='email'
            class='form-control'
            name='email'
            autoComplete='current-email'
            {...register("email", registerOptions.email)}
          />
          <div className='text-danger'>
            {errors?.email && errors.email.message}
          </div>
        </div>
        <div className='mb-3'>
          <label class='mb-2 text-muted' for='password'>
            Password:
          </label>
          <input
            id='password'
            type='password'
            class='form-control'
            name='password'
            autoComplete='current-password'
            {...register("password", registerOptions.password)}
          />
          <div className='text-danger'>
            {errors?.password && errors.password.message}
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
