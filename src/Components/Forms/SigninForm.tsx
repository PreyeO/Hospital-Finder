import { FC, useState } from "react";
import TextInput from "../UI/Inputs/TextInput";
import SignUpBtn from "../UI/Buttons/SignUpBtn";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../firebase-config";

const SignInForm: FC = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();

  const login = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      // console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
      // setError(true);
    }
  };

  return (
    <form>
      <TextInput
        placeholder="Enter your email"
        type="text"
        label="Email"
        onchange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <TextInput
        placeholder="Enter your password"
        type="text"
        label="Password"
        onchange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <SignUpBtn label="Login" onclick={login} />
    </form>
  );
};

export default SignInForm;
