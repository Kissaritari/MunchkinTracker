import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllGames, getGameById, createGame } from '../api/gamesApi';
import type { Game } from '../types';

export const useGames = () => {
  const queryClient = useQueryClient();

  // Query for all games
  const allGamesQuery = useQuery<Game[]>({
    queryKey: ['games'],
    queryFn: getAllGames,
  });

  // Query for a single game by id
  const gameByIdQuery = (id: string) =>
    useQuery<Game>({
      queryKey: ['games', id],
      queryFn: () => getGameById(id),
      enabled: !!id,
    });

  // Mutation for creating a game
  const createGameMutation = useMutation({
    mutationFn: createGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['games'] });
    },
  });

  return { allGamesQuery, gameByIdQuery, createGameMutation };
};
