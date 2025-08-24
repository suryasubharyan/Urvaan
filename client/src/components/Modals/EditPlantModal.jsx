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

function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <>
      <ModalOverlay onClick={onCancel} />
      <ModalContent width="350px">
        <p style={{ marginBottom: "1.5rem" }}>{message}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          <ModalButton onClick={onConfirm} background="#ef4444">
            Delete
          </ModalButton>
          <ModalButton onClick={onCancel} background="#6b7280">
            Cancel
          </ModalButton>
        </div>
      </ModalContent>
    </>
  );
}

export default function EditPlantModal({ plant, onClose, onUpdate }) {
  const { categories: allCategories } = useAuth();
  const [form, setForm] = useState({
    ...plant,
    categories: plant?.categories || [],
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
  });
  const [confirmOpen, setConfirmOpen] = useState(false);

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
    if (!form.name?.trim()) newErrors.name = "Name required";
    if (!form.price || Number(form.price) <= 0)
      newErrors.price = "Price must be positive";
    if (!form.categories || form.categories.length === 0)
      newErrors.categories = "Category required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async () => {
    if (!validateForm()) return;
    try {
      const { _id, ...payload } = form;
      await API.put(`/plants/${_id}`, payload);
      setNotification({
        message: "Plant updated successfully! 🌱",
        type: "success",
      });
      onUpdate();
      onClose();
    } catch (err) {
      setNotification({
        message: err.response?.data?.message || "Update failed",
        type: "error",
      });
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/plants/${form._id}`);
      setNotification({
        message: "Plant deleted successfully! 🌱",
        type: "success",
      });
      onUpdate();
      onClose();
    } catch (err) {
      setNotification({
        message: err.response?.data?.message || "Delete failed",
        type: "error",
      });
    }
  };

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContent width="400px">
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Edit Plant
        </h2>
        <input
          type="text"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          placeholder="Plant Name"
          style={inputStyle}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}
        <input
          type="number"
          name="price"
          value={form.price || ""}
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
          styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
        />
        {errors.categories && <div style={errorStyle}>{errors.categories}</div>}
        <label
          style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
        >
          Available
          <input
            type="checkbox"
            name="available"
            checked={form.available || false}
            onChange={handleChange}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <div style={{ display: "flex", gap: "12px", marginTop: "1rem" }}>
          <ModalButton onClick={handleUpdate}>Update</ModalButton>
          <ModalButton
            onClick={() => setConfirmOpen(true)}
            background="#ef4444"
          >
            Delete
          </ModalButton>
          <ModalButton onClick={onClose} background="#6b7280">
            Cancel
          </ModalButton>
        </div>
      </ModalContent>
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: "", type: "success" })}
        />
      )}
      {confirmOpen && (
        <ConfirmModal
          message={`Are you sure you want to delete "${form.name}"?`}
          onConfirm={handleDelete}
          onCancel={() => setConfirmOpen(false)}
        />
      )}
    </>
  );
}

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  width: "100%",
  fontSize: "1rem",
  marginBottom: "8px",
};

const errorStyle = {
  color: "#ef4444",
  fontSize: "0.85rem",
  marginBottom: "4px",
};
