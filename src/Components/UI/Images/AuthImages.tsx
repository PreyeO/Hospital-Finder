import { FC } from "react";

interface Props {
  image?: string;
}

const SignUp: FC<Props> = ({ image }) => {
  return (
    <figure className="flex-1 hidden md:flex items-center justify-center">
      <img
        src={image}
        alt="books"
        loading="lazy"
        className="w-96 md:block hidden"
      />
    </figure>
  );
};

export default SignUp;
