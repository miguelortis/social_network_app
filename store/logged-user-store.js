import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import axios from "../config/axios";

export const useLoggedUserStore = create(
  devtools(
    persist(
      (set, get) => {
        return {
          loadingUserLogged: false,
          userLoggedData: {},

          getLoggedUserData: (userLoggedData) => {
            set({ userLoggedData });
          },

          reset: () => {
            set({ userLoggedData: {} });
          },
        };
      },
      {
        name: "loggedUser",
      }
    )
  )
);
