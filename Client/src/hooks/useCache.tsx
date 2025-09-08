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

/**
 * useGameIdCache - React hook to persist game ID in localStorage
 * @param {string} key - The localStorage key to use (default: 'gameId')
 * @returns {[string, (id: string) => void, () => void]} [gameId, setGameId, removeGameId]
 */
export function useGameIdCache(key: string = "gameId") {
  const [gameId, setGameIdState] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) setGameIdState(stored);
  }, [key]);

  const setGameId = (id: string) => {
    setGameIdState(id);
    localStorage.setItem(key, id);
  };

  const removeGameId = () => {
    setGameIdState("");
    localStorage.removeItem(key);
  };

  return [gameId, setGameId, removeGameId] as const;
}