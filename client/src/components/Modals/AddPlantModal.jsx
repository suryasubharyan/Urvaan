import React, { useState } from "react";
import API from "../../utils/api";
import Notification from "../Layout/Notification";
import CreatableSelect from "react-select/creatable";
import { useAuth } from "../../hooks/useAuth";
import { ModalOverlay, ModalContent, ModalButton } from "./ModalComponents";

const formatCategories = (options) => {
  return (options || []).map(
    (opt) =>
      opt.value.charAt(0).toUpperCase() + opt.value.slice(1).toLowerCase()
  );
};

export default function AddPlantModal({ onClose, onAdd }) {
  const { categories: allCategories } = useAuth();
  const [form, setForm] = useState({
    name: "",
    price: "",
    categories: [],
    available: true,
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSelectChange = (selectedOptions) => {
    const formatted = formatCategories(selectedOptions);
    setForm({ ...form, categories: formatted });
    setErrors({ ...errors, categories: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name required";
    if (!form.price || Number(form.price) <= 0)
      newErrors.price = "Price must be positive";
    if (!form.categories || !form.categories.length)
      newErrors.categories = "Category required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = async () => {
    if (!validateForm()) return;

    try {
      await API.post("/plants", form);
      setNotification({
        message: "Plant added successfully! 🌱",
        type: "success",
      });
      onAdd();
      onClose();
    } catch (err) {
      setNotification({
        message: err.response?.data?.message || "Add failed",
        type: "error",
      });
    }
  };

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContent width="400px">
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Add Plant
        </h2>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Plant Name"
          style={inputStyle}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          style={inputStyle}
        />
        {errors.price && <div style={errorStyle}>{errors.price}</div>}

        <CreatableSelect
          isMulti
          placeholder="Select or create categories"
          value={(form.categories || []).map((c) => ({ value: c, label: c }))}
          onChange={handleSelectChange}
          options={allCategories.map((c) => ({ value: c, label: c }))}
          styles={{
            menu: (base) => ({ ...base, zIndex: 9999 }),
            menuList: (base) => ({
              ...base,
              maxHeight: "150px",
              overflowY: "auto",
            }),
          }}
        />
        {errors.categories && <div style={errorStyle}>{errors.categories}</div>}

        <label
          style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
        >
          Available
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>

        <ModalButton onClick={handleAdd}>Add Plant</ModalButton>
      </ModalContent>

      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: "", type: "success" })}
        />
      )}
    </>
  );
}

// Styles
const inputStyle = {
  padding: "0.75rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  width: "100%",
  marginBottom: "8px",
};
const errorStyle = {
  color: "#ef4444",
  fontSize: "0.85rem",
  marginBottom: "4px",
};
