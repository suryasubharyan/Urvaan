import { createContext, useState, useEffect, useCallback } from "react";
import API from "../utils/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");
  const [plantsData, setPlantsData] = useState({
    plants: [],
    loading: false,
    hasMore: true,
  });
  const [categories, setCategories] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    if (token) {
      setIsAuthenticated(true);
      setRole(storedRole || "");
    }
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await API.get("/plants/categories");
        setCategories(res.data.categories || []);
      } catch (err) {
        console.error("Fetch categories failed:", err);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setRole("");
  };

  const fetchPlants = useCallback(
    async ({
      name = "",
      category = "",
      page = 1,
      limit = 6,
      append = false,
    }) => {
      setPlantsData((prev) => ({ ...prev, loading: true }));
      try {
        const res = await API.get("/plants", {
          params: { name, category, page, limit },
        });

        setPlantsData((prev) => ({
          ...prev,
          plants: append
            ? [...prev.plants, ...res.data.plants]
            : res.data.plants,
          hasMore: page < res.data.totalPages && res.data.plants.length > 0,
        }));
      } catch (err) {
        console.error("Fetch plants failed:", err);
      } finally {
        setPlantsData((prev) => ({ ...prev, loading: false }));
      }
    },
    []
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        role,
        setRole,
        logout,
        plants: plantsData.plants,
        loading: plantsData.loading,
        hasMore: plantsData.hasMore,
        categories,
        refreshFlag,
        setRefreshFlag,
        fetchPlants,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
