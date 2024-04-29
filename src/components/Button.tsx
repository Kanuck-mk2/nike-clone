interface ButtonProps {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  iconUrl,
  backgroundColor = 'bg-coral-red',
  textColor = 'text-white',
  borderColor = 'border-coral-red',
  fullWidth = false,
}) => {
  const hoverEffect =
    backgroundColor === 'bg-white'
      ? 'hover:bg-gray-300'
      : 'hover:bg-red-500 hover:text-white hover:border-red-500';

  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-2 px-7 py-4 border 
      font-montserrat text-lg rounded-[25px] leading-none duration-200
     ${backgroundColor} ${textColor} ${borderColor} 
     ${fullWidth && 'w-full'}  ${hoverEffect}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="ArrowRight"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
