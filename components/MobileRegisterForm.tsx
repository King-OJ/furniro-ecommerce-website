"use client";
import FormRow from "./FormRow";
import FormSubmitBtn from "./FormSubmitBtn";

export default function MobileRegisterForm({
  setIsNewMember,
  isNewMember,
}: {
  setIsNewMember: (isNewMember: boolean) => void;
  isNewMember: boolean;
}) {
  return (
    <form action="" className="mb-8  w-full" id="mobile_register">
      <h5 className="mb-6 text-center">Sign Up</h5>
      <div className="grid w-full grid-cols-2 gap-4">
        <FormRow
          name="firstName"
          type="text"
          title="first name"
          required
          id="mobile_first_name"
        />
        <FormRow
          name="lastName"
          type="text"
          title="last name"
          required
          id="mobile_last_name"
        />
      </div>
      <FormRow
        name="address"
        type="text"
        title="address"
        required
        id="mobile_address"
      />
      <FormRow
        name="phone"
        type="number"
        title="phone number"
        required
        id="mobile_phone"
      />
      <FormRow
        name="email"
        type="email"
        title="email"
        required
        id="mobile_email"
      />
      <FormRow
        name="password"
        type="password"
        title="password"
        required
        id="mobile_password"
      />

      <div className="my-4 text-sm">
        Already a member?
        <button
          type="button"
          className="ml-1 font-semibold"
          onClick={() => setIsNewMember(!isNewMember)}
        >
          Login
        </button>
      </div>
      <FormSubmitBtn className=" w-full bg-primaryColor text-white">
        Submit
      </FormSubmitBtn>
    </form>
  );
}
