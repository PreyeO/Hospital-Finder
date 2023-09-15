import { FC } from "react";

interface Props {
  label: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}

const GoogleSignUp: FC<Props> = ({ label, onclick }) => {
  return (
    <button
      className={`py-2 px-4 mt-4 text-white rounded-md text-center ${
        label === "Sign Up" ? "bg-[#238A78]" : "bg-[#4D75A5]"
      }`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default GoogleSignUp;
