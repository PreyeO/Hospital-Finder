import { FC } from "react";

interface Props {
  placeholder: string;
  type: string;
  label: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  id?: any;
}

const TextInput: FC<Props> = ({ label, id, placeholder, type, onchange }) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <label className="font-bold text-[#444]" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        className="border border-solid border-[#bdc4cd] rounded-lg h-14 w-full p-2"
      />
    </div>
  );
};

export default TextInput;
