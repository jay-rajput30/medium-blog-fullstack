import axios from "axios";
import { BACKEND_URL } from "../../configs/config";
import { useNavigate } from "react-router-dom";

type Props = {};

const SignInForm = (props: Props) => {
  const navigate = useNavigate();

  const signInFormSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const username = formData.get("username");
      const password = formData.get("password");
      console.log({ username, password });

      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        username,
        password,
      });

      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/blog");
    } catch (e: any) {}
  };

  return (
    <form
      className="flex flex-col gap-4 py-4"
      onSubmit={signInFormSubmitHandler}
    >
      <div className="flex flex-col w-full items-start">
        <label htmlFor="username" className="font-bold px-1">
          username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="enter your username"
          className="p-1 border-zinc-300 border-solid border w-full rounded-sm"
        />
      </div>

      <div className="flex flex-col w-full items-start">
        <label htmlFor="password" className="font-bold py-1">
          password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="enter you password"
          className="p-1 border-zinc-300 border-solid border w-full rounded-sm"
        />
      </div>
      <button className="bg-zinc-900 text-zinc-100 p-1 w-full rounded-sm">
        sign in
      </button>
    </form>
  );
};

export default SignInForm;
