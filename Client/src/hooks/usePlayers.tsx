import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import type { Player, PlayerDto } from "../types";
import { getAllPlayers, getPlayerById, addPlayer, updatePlayer } from "../api/playersApi";


export const usePlayers = () => {
  const queryClient = useQueryClient();

  // Query for all players
  const allPlayersQuery = (gameId: string) =>
    useQuery<Player[]>({
      queryKey: ["players",gameId],
      queryFn: ()=> getAllPlayers(gameId),
    });

  // Query for a single player by id
  const playerByIdQuery = (gameId: string, id: string) =>
    useQuery<Player>({
      queryKey: ["players", id,gameId],
      queryFn: () => getPlayerById(gameId, id),
      enabled: !!id,
    });

  // Mutation for adding a player
  const addPlayerMutation = useMutation({
    mutationFn: (playerDto: PlayerDto) =>
      addPlayer(playerDto),
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
