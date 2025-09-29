import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: "red" | "blue";
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "blue",
}) => {
  const bgColor =
    buttonBackgroundColor === "red"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-blue-500 hover:bg-blue-600";

  return (
    <button
      className={`${bgColor} text-white font-semibold px-4 py-2 rounded-md transition`}
    >
      {buttonLabel}
    </button>
  );
};

// 👇 This is important! Must be a default export
export default Button;
