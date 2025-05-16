// Service for handling game API requests
import ky from "ky";
import type { Player, PlayerDto } from "../types";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE = `${baseUrl}player`;

export const getAllPlayers = async (gameId: string): Promise<Player[]> => {
  return ky.get(`${API_BASE}/${gameId}`).json();
};
export const getPlayerById = async (
  gameId: string,
  playerId: string
): Promise<Player> => {
  return ky.get(`${API_BASE}/${gameId}/${playerId}`).json();
};
export const addPlayer = async (
  playerDto: PlayerDto
): Promise<Player> => {
  return ky.post(`${API_BASE}`, { json: playerDto }).json();
};
export const updatePlayer = async (
  gameId: string,
  player: Player
): Promise<Player> => {
  return ky.put(`${API_BASE}/${gameId}/${player.id}`, { json: player }).json();
};
