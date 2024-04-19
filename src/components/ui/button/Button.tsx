type Props = {
  buttonText: string;
  buttonClasses?: string;
  buttonPath?: string;
};

const Button = ({ buttonText, buttonClasses = "", buttonPath = "" }: Props) => {
  return (
    <div className={`bg-indigo-700 rounded-md py-2 px-5 ${buttonClasses}`}>
      <a href={buttonPath}>
        <span className="text-white">{buttonText}</span>
      </a>
    </div>
  );
};

export default Button;
