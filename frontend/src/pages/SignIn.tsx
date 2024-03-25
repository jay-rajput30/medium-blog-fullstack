import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm/SignInForm";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <div className="text-center my-4">
      <h1 className="font-bold text-2xl">Login into your account</h1>
      <p className="text-zinc-400">
        Do not have an account? <Link to={"/signup"}>sign up</Link>
      </p>
      <SignInForm />
    </div>
  );
};

export default SignIn;
