type Props = {
  buttonText: string;
  buttonClasses?: string;
  buttonPath?: string;
};

const Button = ({ buttonText, buttonClasses = "", buttonPath = "" }: Props) => {
  return (
    <div className={`indigo-bg rounded-md py-3 px-5 ${buttonClasses}`}>
      <a href={buttonPath}>
        <span className="text-white">{buttonText}</span>
      </a>
    </div>
  );
};

export default Button;
