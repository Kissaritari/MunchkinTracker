// Service for handling game API requests
import ky from "ky";
import type { Game } from "../types";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE = `${baseUrl}game`;

export const getAllGames = async (): Promise<Game[]> => {
  return ky.get(API_BASE).json();
};
export const getGameById = async (id: string): Promise<Game> => {
  return ky.get(`${API_BASE}/${id}`).json();
};
export const createGame = async (name: string): Promise<Game> => {
  return ky.post(API_BASE, { json: name }).json();
};
