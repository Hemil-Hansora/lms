import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const startLoading = (message = "Loading...") => {
    setLoadingMessage(message);
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
    setLoadingMessage("");
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        loadingMessage,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }

  return context;
};