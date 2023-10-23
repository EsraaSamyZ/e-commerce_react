import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

function Register() {
  const { control, register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container w-50 px-5 my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter your username"
            {...register("username", { required: 'Username is required' })}
          />
          {errors.username && (
            <p className="error-message mt-1">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", { required: 'Email is required', pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
          />
          {errors.email && (
            <p className="error-message text-danger fw-bold mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", { required: 'Password is required', minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },})}
          />
          {errors.password && (
            <p className="error-message text-danger fw-bold mt-1">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      {control && <DevTool control={control} />}
    </div>
  );
}

export default Register;
