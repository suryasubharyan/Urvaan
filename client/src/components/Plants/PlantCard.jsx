import React, { memo } from "react";
import PropTypes from "prop-types";

const PlantCard = memo(({ plant }) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(plant.price);

  const categoriesString = Array.isArray(plant.categories)
    ? plant.categories.join(", ")
    : "";

  return (
    <div style={cardStyle}>
       <h2 style={nameStyle}>{plant.name}</h2>{" "}
      <p style={priceStyle}>💰 {formattedPrice}</p>{" "}
      <p style={infoStyle}>📂 {categoriesString}</p>{" "}
      <span
        style={{
          ...availabilityStyle,
          backgroundColor: plant.available ? "#16a34a" : "#dc2626",
        }}
      >
         {plant.available ? "Available" : "Unavailable"}{" "}
      </span>
     {" "}
    </div>
  );
});

// Adding PropTypes for type-checking and component documentation
PlantCard.propTypes = {
  plant: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    available: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PlantCard;

// ================= STYLES =================
const cardStyle = {
  padding: "24px",
  borderRadius: "16px",
  background: "linear-gradient(145deg, #f0fdf4, #dcfce7)",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "240px",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer", // Cursor is handled by the parent div in Home.js
};

const nameStyle = {
  fontSize: "24px",
  fontWeight: "700",
  marginBottom: "10px",
  color: "#166534",
  textAlign: "center",
};

const priceStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#065f46",
  marginBottom: "6px",
  textAlign: "center",
};

const infoStyle = {
  fontSize: "16px",
  color: "#374151",
  marginBottom: "6px",
  textAlign: "center",
};

const availabilityStyle = {
  color: "#fff",
  fontWeight: "600",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "14px",
  textAlign: "center",
};
