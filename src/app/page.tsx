"use client";
import { GameProvider } from "./context/GameProvider";
import { UserProvider } from "./context/UserProvider";

export default function Home() {
  return (
    <UserProvider>
      <GameProvider />
    </UserProvider>
  );
}
