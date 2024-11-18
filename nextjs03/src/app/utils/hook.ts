import { use } from "react";
import { AppContext } from "./Provider";
export const useUser = () => {
  const context = use(AppContext);
  return context;
};
