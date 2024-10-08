import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submittedName, setSubmittedName] = useState(null);

  const handleRegistration = (data) => {
    console.log(data);
    console.log("Entered Name:", data.name); // Print the entered name
    setSubmittedName(data.name); // Set submitted name to state
  };

  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div>
          <label>Name</label>
          <input name="name" type="text" {...register('name', registerOptions.name) }/>
          <small className="text-danger">
            {errors?.name && errors.name.message}
          </small>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register('email', registerOptions.email)}
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register('password', registerOptions.password)}
          />
          <small className="text-danger">
            {errors?.password && errors.password.message}
          </small>
        </div>
        <button>Submit</button>
      </form>
      {submittedName && (
        <div>
          <p>Thank you for your submission, {submittedName}!</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
