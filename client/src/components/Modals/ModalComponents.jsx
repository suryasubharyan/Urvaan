import React from "react";

export const ModalOverlay = ({ onClick }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: 1000,
    }}
    onClick={onClick}
  />
);

export const ModalContent = ({ children, width = "400px" }) => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      width,
      zIndex: 1001,
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    }}
  >
    {children}
  </div>
);

export const ModalButton = ({ children, onClick, background = "#2e7d32" }) => (
  <button
    onClick={onClick}
    style={{
      padding: "0.75rem 1.5rem",
      borderRadius: "8px",
      border: "none",
      background,
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    {children}
  </button>
);
