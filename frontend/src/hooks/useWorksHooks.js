import { workContext } from "../context/worksContext";
import { useContext } from "react";

export const useWorksContext = () => {
  const context = useContext(workContext);

  if (!context) {
    throw new Error("useWorksContext must be used within a WorkProvider");
  }

  return context;
};
