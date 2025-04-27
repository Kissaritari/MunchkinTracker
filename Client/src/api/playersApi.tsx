// Service for handling game API requests
import ky from "ky";
import type { Player } from "../types";

const API_BASE = "/api/player";

export const getAllPlayers = async (gameId: string): Promise<Player[]> => {
  return ky.get(`API_BASE/${gameId}`).json();
};
export const getPlayerById = async (
  gameId: string,
  playerId: string
): Promise<Player> => {
  return ky.get(`${API_BASE}/${gameId}/${playerId}`).json();
};
export const addPlayer = async (
  gameId: string,
  player: Partial<Player>
): Promise<Player> => {
  return ky.post(`API_BASE/${gameId}`, { json: player }).json();
};
export const updatePlayer = async (
  gameId: string,
  player: Player
): Promise<Player> => {
  return ky.put(`${API_BASE}/${gameId}/${player.id}`, { json: player }).json();
};
