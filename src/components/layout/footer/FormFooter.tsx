"use client";
import { useState } from "react";
import Select from "../../ui/SelectForm";
import InputFooter from "../../ui/InputForm";
import ButtonDefault from "../../ui/ButtonDefault";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  institution_type: string;
  company: string;
  position: string;
  password: string;
  password_confirmation: string;
}

interface FormErrors {
  [key: string]: string;
}

const FooterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    institution_type: "",
    company: "",
    position: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.first_name) {
      newErrors.first_name = "Champs requis";
    }
    if (!data.last_name) {
      newErrors.last_name = "Champs requis";
    }
    if (!data.email) {
      newErrors.email = "Champs requis";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Format email invalide";
    }
    if (!data.company) {
      newErrors.company = "Champs requis";
    }
    if (!data.position) {
      newErrors.position = "Champs requis";
    }
    if (!data.password) {
      newErrors.password = "Champs requis";
    }
    if (!data.password_confirmation) {
      newErrors.password_confirmation = "Champs requis";
    }
    if (data.password !== data.password_confirmation) {
      newErrors.password_confirmation =
        "Les mots de passe ne correspondent pas";
    }
    if (!data.phone) {
      newErrors.phone = "Champs requis";
    } else if (data.phone && !/^\+?[\d\s-]{10,}$/.test(data.phone)) {
      newErrors.phone = "Numéro de téléphone invalide";
    }
    if (!data.institution_type) {
      newErrors.institution_type = "Champs requis";
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (selectedOption: { value: string } | null) => {
    setFormData((prev) => ({
      ...prev,
      institution_type: selectedOption?.value || "",
    }));

    if (errors.institution_type) {
      setErrors((prev) => ({
        ...prev,
        institution_type: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        institution_type: "",
        company: "",
        position: "",
        password: "",
        password_confirmation: "",
      });
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto flex flex-col text-white sm:gap-8"
    >
      <div className="w-full flex flex-col sm:flex-row items-baseline justify-between sm:gap-10">
        <InputFooter
          value={formData.first_name}
          handleInputChange={handleInputChange}
          error={errors.first_name}
          className="w-full overflow-hidden relative"
          label="Nom"
          name="first_name"
          isRequired={true}
        />
        <InputFooter
          value={formData.last_name}
          handleInputChange={handleInputChange}
          error={errors.last_name}
          className="w-full overflow-hidden relative"
          label="Prénom"
          name="last_name"
          isRequired={true}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-10">
        <InputFooter
          value={formData.email}
          handleInputChange={handleInputChange}
          error={errors.email}
          className="w-full overflow-hidden relative"
          label="Email"
          name="email"
          isRequired={true}
        />
        <InputFooter
          value={formData.phone}
          handleInputChange={handleInputChange}
          error={errors.phone}
          className="w-full overflow-hidden relative"
          label="Téléphone"
          name="phone"
          isRequired={true}
        />
      </div>
      <div className="w-full items-baseline justify-between">
        <Select
          formData={formData.institution_type}
          error={errors.institution_type}
          handleInputChange={handleSelectChange}
          className="w-full overflow-hidden relative"
          label="Type d'institution"
          name="institution_type"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-10">
        <InputFooter
          value={formData.company}
          handleInputChange={handleInputChange}
          error={errors.company}
          className="w-full overflow-hidden relative"
          label="Société"
          name="company"
          isRequired={true}
        />
        <InputFooter
          value={formData.position}
          handleInputChange={handleInputChange}
          error={errors.position}
          className="w-full overflow-hidden relative"
          label="Fonction"
          name="position"
          isRequired={true}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-10">
        <InputFooter
          value={formData.password}
          handleInputChange={handleInputChange}
          error={errors.password}
          className="w-full overflow-hidden relative"
          label="Mot de passe"
          name="password"
          isRequired={true}
        />
        <InputFooter
          value={formData.password_confirmation}
          handleInputChange={handleInputChange}
          error={errors.password_confirmation}
          className="w-full overflow-hidden relative"
          label="Confirmation du mot de passe"
          name="password_confirmation"
          isRequired={true}
        />
      </div>
      <div className="w-full flex justify-center sm:justify-end max-sm:mt-5">
        <ButtonDefault type="submit" action={handleSubmit}>
          Envoyer
        </ButtonDefault>
      </div>
    </form>
  );
};

export default FooterForm;
