"use client";
import FormRow from "./FormRow";
import FormSubmitBtn from "./FormSubmitBtn";

export default function LoginForm({
  setIsNewMember,
  isNewMember,
}: {
  setIsNewMember: (isNewMember: boolean) => void;
  isNewMember: boolean;
}) {
  return (
    <form action="" className="mb-8  w-full" id="login" name="login">
      <h5 className="mb-6 text-center">Log In</h5>
      <FormRow
        name="login_email"
        id="login_email"
        type="email"
        title="email"
        required
      />

      <FormRow
        name="login_password"
        id="login_password"
        type="password"
        title="password"
        required
      />

      <div className="my-4 text-sm">
        Don't have an account yet?
        <button
          type="button"
          className="ml-1 font-semibold"
          onClick={() => setIsNewMember(!isNewMember)}
        >
          Create Account
        </button>
      </div>
      <FormSubmitBtn className=" w-full bg-primaryColor text-white">
        Submit
      </FormSubmitBtn>
    </form>
  );
}
