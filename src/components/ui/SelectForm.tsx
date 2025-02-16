import Select from "react-select";
import { useEffect, useState } from "react";
import { StylesConfig, GroupBase } from "react-select";

interface SelectComponentProps {
  formData: string;
  handleInputChange: (value: { value: string; label: string } | null) => void;
  error: string | undefined;
  className?: string;
  label: string;
  name: string;
}

const SelectComponent = ({
  formData,
  handleInputChange,
  error,
}: SelectComponentProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const options = [
    {
      value: "Hotel & Palace",
      label: "Hotel & Palace",
    },
    {
      value: "Secteur public",
      label: " Secteur public",
    },
    {
      value: "Événementiel / Corporate / Immobilier d'exception",
      label: "Événementiel / Corporate / Immobilier d'exception",
    },
    { value: "Particulier", label: "Particulier" },
  ];

  const colourStyles: StylesConfig<
    { value: string; label: string },
    false,
    GroupBase<{ value: string; label: string }>
  > = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "black",
      boxShadow: "none",
      padding: 4,
      paddingLeft: 0,
      minHeight: "unset",
      borderBottom: "1px solid white",
      borderColor: error ? "black" : "black",
      borderRadius: 0,
      cursor: "pointer",
      "&:hover": {
        borderColor: "none",
      },
      textAlign: "left",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
    }),
    input: (styles) => ({
      ...styles,
      color: "white",
      padding: 0,
      margin: 0,
    }),
    dropdownIndicator: (
      styles,
      { selectProps }: { selectProps: { menuIsOpen: boolean } }
    ) => ({
      ...styles,
      padding: 0,
      color: "white",
      transition: "transform 0.3s ease",
      transform: selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
      "&:hover": {
        color: "white",
      },
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? "#696969" : "white",
      fontWeight: isSelected ? "bold" : "normal",
      color: isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#696969",
        color: "white",
      },
      "&:active": {
        backgroundColor: "black",
        opacity: 0.9,
        color: "white",
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: "16px",
      color: "white",
      backgroundColor: "black",
      fontFamily: "Satoshi",
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: "18px",
      color: "white",
      backgroundColor: "transparent",
      borderBottom: "0px solid #FDE5CA",
      padding: "0",
      paddingBottom: "-5px",
      margin: 0,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (styles) => ({
      ...styles,
      marginTop: 0,
      padding: 0,
      borderRadius: 0,
      backgroundColor: "white",
      zIndex: 9999,
    }),
    menuList: (styles) => ({
      ...styles,
      padding: 0,
      borderRadius: 0,
      textAlign: "left",
      cursor: "pointer",
    }),
  };

  return (
    <div className="max-sm:w-full sm:flex-1">
      <Select
        options={options}
        styles={colourStyles}
        isSearchable={false}
        isMulti={false}
        isClearable={false}
        placeholder="Vous êtes: *"
        value={options.find((option) => option.value === formData) || null}
        onChange={handleInputChange}
      />
      {error && (
        <span className="text-white text-sm block mt-1 text-left italic">
          {error}
        </span>
      )}
    </div>
  );
};

export default SelectComponent;
