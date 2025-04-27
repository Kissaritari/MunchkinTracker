// Service for handling game API requests
import ky from "ky";
import type { Game } from "../types";

const API_BASE = "/api/games";

export const getAllGames = async (): Promise<Game[]> => {
  return ky.get(API_BASE).json();
};
export const getGameById = async (id: string): Promise<Game> => {
  return ky.get(`${API_BASE}/${id}`).json();
};
export const createGame = async (game: Partial<Game>): Promise<Game> => {
  return ky.post(API_BASE, { json: game }).json();
};
