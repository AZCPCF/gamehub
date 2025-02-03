interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: Partial<ButtonProps>) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
