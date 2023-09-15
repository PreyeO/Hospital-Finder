import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { setDoc, doc } from "firebase/firestore";
import { db, auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleSignUp: FC = () => {
  let navigate = useNavigate();

  const signInWithGoogle = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, provider);
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        registerName: res.user.displayName,
        registerEmail: res.user.email,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className="bg-white border py-2 w-full h-14 rounded-xl flex justify-center items-center gap-2"
      onClick={signInWithGoogle}
    >
      <FcGoogle size="24" />
      Continue with Google
    </button>
  );
};

export default GoogleSignUp;
