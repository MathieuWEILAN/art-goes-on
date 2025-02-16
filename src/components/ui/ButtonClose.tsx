"use client";

interface ButtonCloseProps {
  setIsModalOpen: (value: true | false) => void;
  isModalOpen: true | false;
}
const ButtonClose = ({ isModalOpen, setIsModalOpen }: ButtonCloseProps) => {
  return (
    <button
      onClick={() => {
        setIsModalOpen(!isModalOpen);
      }}
      role="button"
      name="menu mobile"
    >
      <div
        className={`inset-0 w-6 h-0.5 flex items-center justify-center transition duration-600 m-auto rounded bg-white ${
          isModalOpen ? "rotate-45" : ""
        }`}
      ></div>
      <div
        className={`inset-0 w-6 h-0.5 flex items-center justify-center transition duration-600 m-auto rounded bg-white ${
          isModalOpen ? " -rotate-45 !-mt-0.5" : "mt-1.5"
        }`}
      ></div>
      <div
        className={`inset-0 w-6 flex items-center justify-center transition duration-600 m-auto rounded bg-white ${
          isModalOpen ? " -rotate-45 !-mt-0.5 h-0" : "mt-1.5 h-0.5"
        }`}
      ></div>
    </button>
  );
};
export default ButtonClose;
