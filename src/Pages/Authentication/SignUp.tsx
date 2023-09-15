import { FC } from "react";
import SignupForm from "../../Components/Forms/SignupForm";
import SignUpImg from "../../assets/SignupImage.png";
import GoogleSignUp from "../../Components/Forms/GoogleSignUp";
import { Link } from "react-router-dom";
import AuthImages from "../../Components/UI/Images/AuthImages";

const SignUp: FC = () => {
  return (
    <main className="flex">
      <AuthImages image={SignUpImg} />
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Sign Up</h1>
        <p className="mt-4 mb-8 text-center">Exceptional Care Close to You</p>
        <GoogleSignUp />
        <p className="text-xs text-[#888] my-4 text-center">
          or Sign Up with Email
        </p>
        <SignupForm />
        <p className="text-sm mt-2">
          Already have an Account?{" "}
          <Link to="/signin" className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
