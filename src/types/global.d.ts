// src/types/global.d.ts
interface Window {
  electron: {
    login: (credentials: { username: string; password: string }) => Promise<{ success: boolean; error?: string }>;
  };
}
