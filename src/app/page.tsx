'use client';
import { GameProvider } from './context/GameProvider';
import { ToastProvider } from './context/ToastProvider';
import { UserProvider } from './context/UserProvider';

export default function Home() {
  return (
    <ToastProvider>
      <UserProvider>
        <GameProvider />
      </UserProvider>
    </ToastProvider>
  );
}
