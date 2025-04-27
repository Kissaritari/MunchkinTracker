import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import type { Player } from "../types";
import { getAllPlayers, getPlayerById, addPlayer, updatePlayer } from "../api/playersApi";


export const usePlayers = () => {
  const queryClient = useQueryClient();

  // Query for all players
  const allPlayersQuery = (gameId: string) =>
    useQuery<Player[]>({
      queryKey: ["players"],
      queryFn: ()=> getAllPlayers(gameId),
    });

  // Query for a single player by id
  const playerByIdQuery = (gameId: string, id: string) =>
    useQuery<Player>({
      queryKey: ["players", id],
      queryFn: () => getPlayerById(gameId, id),
      enabled: !!id,
    });

  // Mutation for adding a player
  const addPlayerMutation = useMutation({
    mutationFn: ({ gameId, player }: { gameId: string; player: Partial<Player> }) =>
      addPlayer(gameId, player),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });

  // Mutation for updating a player
  const updatePlayerMutation = useMutation({
    mutationFn: ({ gameId, player }: { gameId: string; player: Player }) =>
      updatePlayer(gameId, player),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });

  return {
    allPlayersQuery,
    playerByIdQuery,
    addPlayerMutation,
    updatePlayerMutation,
  };
};
