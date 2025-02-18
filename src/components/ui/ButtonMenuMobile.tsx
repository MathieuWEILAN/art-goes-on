"use client";

interface ButtonMobileProps {
  setIsMenuMobile: (value: boolean) => void;
  isMenuMobile: boolean;
  handleMenuMobileClose: () => void;
}
const ButtonMenuMobile = ({
  isMenuMobile,
  setIsMenuMobile,
  handleMenuMobileClose,
}: ButtonMobileProps) => {
  const handleClick = () => {
    if (isMenuMobile) {
      handleMenuMobileClose();
    } else {
      setIsMenuMobile(!isMenuMobile);
    }
  };
  return (
    <button
      className={`h-full`}
      onClick={() => handleClick()}
      role="button"
      name="menu mobile"
    >
      <div
        className={`inset-0 w-10 h-0.5 flex items-center justify-center transition-all duration-500 m-auto rounded ${
          isMenuMobile ? "rotate-45 bg-white" : "bg-black"
        }`}
      ></div>
      <div
        className={`inset-0 w-10 h-0.5 flex items-center justify-center transition-all duration-500 m-auto rounded ${
          isMenuMobile ? " -rotate-45 !-mt-0.5 bg-white" : "mt-1.5 bg-black"
        }`}
      ></div>
    </button>
  );
};

export default ButtonMenuMobile;
