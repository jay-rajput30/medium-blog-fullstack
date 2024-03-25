import { Link } from "react-router-dom";
import SignUpCustomerReview from "../components/SignUpCustomerReview/SignUpCustomerReview";
import SignUpForm from "../components/SignUpForm/SignUpForm";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex flex-col justify-between gap-24  h-screen py-10 px-2 lg:flex-row lg:w-3/4 lg:mx-auto lg:items-center">
      <section className="text-center flex-1">
        <h1 className="font-bold text-2xl">create an account</h1>
        <p className="text-zinc-400">
          already have an account? <Link to={"/signin"}>login</Link>
        </p>
        <SignUpForm />
      </section>
      <SignUpCustomerReview />
    </div>
  );
};

export default SignUp;
