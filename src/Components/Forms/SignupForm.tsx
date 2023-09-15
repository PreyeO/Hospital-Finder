import { FC, useState } from "react";
import TextInput from "../UI/Inputs/TextInput";
import SignUpBtn from "../UI/Buttons/SignUpBtn";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "@firebase/firestore";

const SignupForm: FC = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  let navigate = useNavigate();

  const register = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(res);
      
      await updateProfile(res.user, {
        displayName: registerName,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        registerName,
        registerEmail,
      });
      navigate("/");
    } catch (err) {
      //  setError(true);
      console.log(err);
    }
  };

  return (
    <form>
      <TextInput
        placeholder="Enter your name"
        type="text"
        label="First Name"
        onchange={(event) => {
          setRegisterName(event.target.value);
        }}
      />
      <TextInput
        placeholder="Enter your email"
        type="text"
        label="Email"
        onchange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <TextInput
        placeholder="Enter your password"
        type="text"
        label="Password"
        onchange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />
      <SignUpBtn label="Sign Up" onclick={register} />
    </form>
  );
};

export default SignupForm;
