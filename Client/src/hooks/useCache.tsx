import { useState, useEffect } from "react";

/**
 * usePlayerIdCache - React hook to persist player ID in localStorage
 * @param {string} key - The localStorage key to use (default: 'playerId')
 * @returns {[string, (id: string) => void]} [playerId, setPlayerId]
 */
export function usePlayerIdCache(key: string = "playerId") {
  const [playerId, setPlayerIdState] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) setPlayerIdState(stored);
  }, [key]);

  const setPlayerId = (id: string) => {
    setPlayerIdState(id);
    localStorage.setItem(key, id);
  };

  const removePlayerId = () => {
    setPlayerIdState("");
    localStorage.removeItem(key);
  };

  return [playerId, setPlayerId, removePlayerId] as const;
}