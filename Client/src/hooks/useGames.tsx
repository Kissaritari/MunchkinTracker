import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllGames,
  getGameById,
  createGame,
  removePlayer,
} from "../api/gamesApi";
import type { Game } from "../types";
import { usePlayerIdCache } from "./useCache";

export const useGames = () => {
  const queryClient = useQueryClient();
  const [playerId, ,] = usePlayerIdCache(); // Assuming you have a hook to get playerId
  // Query for all games
  const allGamesQuery = useQuery<Game[]>({
    queryKey: ["games"],
    queryFn: getAllGames,
  });

  // Query for a single game by id
  const gameByIdQuery = (id: string) =>
    useQuery<Game>({
      queryKey: ["games", id],
      queryFn: () => getGameById(id),
      enabled: !!id,
    });

  // Mutation for creating a game
  const createGameMutation = useMutation({
    mutationFn: createGame,
    onSuccess: (createdGame) => {
      queryClient.invalidateQueries({ queryKey: ["games"] });
      if (createdGame?.gameId) {
        queryClient.invalidateQueries({
          queryKey: ["games", createdGame.gameId],
        });
      }
    },
  });

  const removePlayerMutation = useMutation({
    mutationFn: (GameId: string) => {
      return removePlayer(GameId, playerId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });

  return {
    allGamesQuery,
    gameByIdQuery,
    createGameMutation,
    removePlayerMutation,
  };
};
