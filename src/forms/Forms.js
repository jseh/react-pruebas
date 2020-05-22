import React from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Forms</h1>

      <input name="example" defaultValue="test" ref={register} />
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />


    </form>
  );
}