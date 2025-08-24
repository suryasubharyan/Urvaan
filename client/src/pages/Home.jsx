import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { AuthContext } from "../context/AuthContext";
import PlantCard from "../components/Plants/PlantCard";
import SearchInput from "../components/Search/SearchInput";
import DropdownFilter from "../components/Plants/DropdownFilter";
import AddPlantModal from "../components/Modals/AddPlantModal";
import EditPlantModal from "../components/Modals/EditPlantModal";
import useDebounce from "../hooks/useDebounce";

// ...imports remain the same

export default function Home() {
  const {
    role,
    isAuthenticated,
    plants,
    categories,
    loading,
    hasMore,
    refreshFlag,
    setRefreshFlag,
    fetchPlants,
  } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [page, setPage] = useState(1);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalPlant, setEditModalPlant] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const observer = useRef();

  // Infinite Scroll
  const lastPlantRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Fetch first page
  useEffect(() => {
    if (!isAuthenticated) return;
    setPage(1);
    fetchPlants({
      name: debouncedSearchTerm,
      category: categoryFilter,
      page: 1,
      append: false,
    });
  }, [debouncedSearchTerm, categoryFilter, refreshFlag, isAuthenticated, fetchPlants]);

  // Fetch subsequent pages
  useEffect(() => {
    if (page === 1) return;
    fetchPlants({
      name: debouncedSearchTerm,
      category: categoryFilter,
      page,
      append: true,
    });
  }, [page, debouncedSearchTerm, categoryFilter, fetchPlants]);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🌱 Our Plants</h1>

      {role === "admin" && (
        <button onClick={() => setAddModalOpen(true)} style={addButtonStyle}>
          Add Plant
        </button>
      )}

      {addModalOpen && (
        <AddPlantModal
          onClose={() => setAddModalOpen(false)}
          onAdd={() => setRefreshFlag(!refreshFlag)}
        />
      )}

      {editModalPlant && (
        <EditPlantModal
          plant={editModalPlant}
          onClose={() => setEditModalPlant(null)}
          onUpdate={() => setRefreshFlag(!refreshFlag)}
        />
      )}

      <div style={filterContainerStyle}>
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search plants by name..."
          style={searchInputStyle}
        />
        <DropdownFilter
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          options={categories}
          style={dropdownStyle}
        />
      </div>

      <div style={gridContainerStyle}>
        {plants.map((plant, i) => (
          <div
            key={plant._id}
            ref={i === plants.length - 1 ? lastPlantRef : null}
            onClick={() => role === "admin" && setEditModalPlant(plant)}
            style={tiltCardWrapperStyle}
            className="tilt-card"
          >
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>

      {loading && (
        <div style={loaderContainerStyle}>
          <div style={loaderStyle}></div>
          <style>{`@keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}`}</style>
        </div>
      )}

      {/* 3D Tilt CSS */}
      <style>{`
        .tilt-card {
          perspective: 1000px;
        }
        .tilt-card > div {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform-style: preserve-3d;
        }
        .tilt-card:hover > div {
          transform: rotateX(8deg) rotateY(8deg) scale(1.05);
          box-shadow: 0 20px 30px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

// ===== STYLES =====
const containerStyle = {
  padding: "32px",
  background: "linear-gradient(to bottom, #f0fff4, #e0f7e9)",
  minHeight: "100vh",
  fontFamily: "'Poppins', sans-serif",
};

const titleStyle = {
  fontSize: "36px",
  fontWeight: "800",
  color: "#1b5e20",
  marginBottom: "24px",
  textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
};

const addButtonStyle = {
  padding: "0.75rem 1.5rem",
  background: "#43a047",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
  marginBottom: "24px",
};

const filterContainerStyle = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  marginBottom: "32px",
};

const searchInputStyle = {
  flex: 1,
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid #c8e6c9",
  background: "rgba(255,255,255,0.85)",
  boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.05)",
  fontSize: "16px",
};

const dropdownStyle = {
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid #c8e6c9",
  background: "rgba(255,255,255,0.85)",
  boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.05)",
  fontSize: "16px",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "24px",
};

const tiltCardWrapperStyle = {
  cursor: "pointer",
  borderRadius: "16px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "32px",
};

const loaderStyle = {
  border: "6px solid #f3f3f3",
  borderTop: "6px solid #43a047",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: "spin 1s linear infinite",
};
