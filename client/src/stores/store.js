import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUser = create(
  persist(
    (set) => ({
      isAuth: false,
      bearerKey: "",
      user: {},
      userCards: [],
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
      changeUserCards: (cards) =>
        set((state) => ({
          userCards: cards,
        })),
    }),
    {
      name: "user-storage",
    }
  )
);
