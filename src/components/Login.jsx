import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Login = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container w-50 px-5 my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("email", { required: 'Email is required' })}
          />
          {errors.email && (
            <p className="error-message mt-1">{errors.email.message}</p>
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
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors?.password?.type === "required" && (
            <p className="error-message text-danger fw-bold mt-1">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {control && <DevTool control={control} />}
    </div>
  );
}

export default Login;
