import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUser = create(
  persist(
    (set) => ({
      isAuth: false,
      bearerKey: "",
      user: {},
      changeAuth: (authStatus) =>
        set((state) => ({
          isAuth: authStatus,
        })),

      changeUser: (user) =>
        set((state) => ({
          user: user,
        })),

      changeBearer: (bearer) =>
        set((state) => ({
          bearerKey: bearer,
        })),
    }),
    {
      name: "user-storage",
    }
  )
);
