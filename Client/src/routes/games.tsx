import { createFileRoute } from "@tanstack/react-router";
import { useGames } from "../hooks/useGames";
import { usePlayers } from "../hooks/usePlayers";
import { GAME_CARD_STYLE } from "../utils/styles";

export const Route = createFileRoute("/games")({
  component: Games,
});

function Games() {
  const games = useGames();
  const players = usePlayers();
  const allPlayers = players.allPlayersQuery

  return (
    <div className="p-4 m-5 bg-amber-100/10 h-full flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold ">Games</h1>
        <div className="flex flex-col gap-2">
          <div className={GAME_CARD_STYLE}>
            <h2 className="text-xl font-semibold">Create Game</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Game Name"
                className="border p-2 rounded"
              />
              <button className="bg-teal-500 text-white p-2 rounded">
                Create
              </button>
            </div>
          </div>
          {games.allGamesQuery.data?.map((game) => (
            <div key={game.id} className={GAME_CARD_STYLE}>
              <h2 className="text-xl font-semibold">{game.name}</h2>
              <p>Players: </p>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
