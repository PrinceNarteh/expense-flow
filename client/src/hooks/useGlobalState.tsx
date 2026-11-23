import { GlobalState } from "@/context/GlobalContext";
import { useContext } from "react";

export const useGlobalState = () => {
  return useContext(GlobalState);
};
