import React, { useEffect } from "react";

interface AlertProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  isError: boolean;
  text: string;
  duration: number;
}

const Alert: React.FC<AlertProps> = ({
  isOpen,
  setIsOpen,
  text,
  isError,
  duration,
}) => {
  // States
  // Effects
  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => {
        setIsOpen(false);
      }, duration);
      //   Clean up
      return () => {
        clearTimeout(id);
      };
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed top-5 right-5 flex justify-center items-center p-4 rounded transition-all duration-300 ${
        isError ? "text-white bg-red-600" : "text-white bg-blue-700"
      } ${
        isOpen
          ? "visible scale-100 opacity-100"
          : "invisible scale-50 opacity-0"
      }`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Alert;
