import { FC } from "react";
import SignInForm from "../../Components/Forms/SigninForm";
import SignInImg from "../../assets/SigninImage.png";
import GoogleSignUp from "../../Components/Forms/GoogleSignUp";
import { Link } from "react-router-dom";
import AuthImages from "../../Components/UI/Images/AuthImages";

const SignUp: FC = () => {
  return (
    <main className="flex">
      <AuthImages image={SignInImg} />
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Login</h1>
        <p className="mt-4 mb-8 text-center">Changing Health Care for Good</p>
        <GoogleSignUp />
        <p className="text-xs text-[#888] my-4 text-center">
          or Login with Email
        </p>
        <SignInForm />
        <p className="text-sm mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
