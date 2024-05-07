"use client";
import { useState } from "react";
import FormRow from "./FormRow";
import FormSubmitBtn from "./FormSubmitBtn";

export default function SignInForm() {
  const [isNewMember, setIsNewMember] = useState(false);

  return (
    <form action="" className="mb-8 w-full">
      <h5 className="mb-6 text-center">{isNewMember ? "Sign Up" : "Log In"}</h5>
      {isNewMember && (
        <>
          <div className="grid w-full grid-cols-2 gap-4">
            <FormRow name="firstName" type="text" title="first name" required />
            <FormRow name="lastName" type="text" title="last name" required />
          </div>
          <FormRow name="address" type="text" title="address" required />
          <FormRow name="phone" type="number" title="phone number" required />
        </>
      )}
      <FormRow name="email" type="email" title="email" required />
      <FormRow name="password" type="password" title="password" required />
      <div className="my-4 text-sm">
        {isNewMember ? "Already a member?" : "Don't have an account yet? "}
        <button
          type="button"
          className="ml-1 font-semibold"
          onClick={() => setIsNewMember(!isNewMember)}
        >
          {isNewMember ? "Login" : "Create Account"}
        </button>
      </div>
      <FormSubmitBtn className=" w-full bg-primaryColor text-white">
        Submit
      </FormSubmitBtn>
    </form>
  );
}
