import { useState } from "react";

export default function useForm(initialState) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const resetForm = () => setForm(initialState);

  return { form, setForm, errors, setErrors, handleChange, resetForm };
}
