import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { usePlayerIdCache } from "../../hooks/useCache";
import { useGames } from "../../hooks/useGames";
import { BUTTON_COLOR, BUTTON_SHAPE } from "../../utils/styles";

export const Route = createFileRoute("/GamesList/$")({
  component: Game,
});

function Game() {
  const { _splat } = useParams({ from: "/GamesList/$" });
  const [, , removePlayerId] = usePlayerIdCache();
  const { removePlayerMutation, gameByIdQuery } = useGames();
  const currentGameQuery = gameByIdQuery(_splat || ""); // You may want to use id here to fetch the correct game
  const currentGame = currentGameQuery.data;
  const navigate = useNavigate();

  const handleLeaveGame = () => {
    if (!currentGame) return;
    removePlayerId();
    removePlayerMutation.mutate(currentGame?.gameId);
    navigate({ to: "/GamesList" });
  };

  if (currentGameQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (currentGameQuery.isError) {
    return <div>Error loading game</div>;
  }
  if (!currentGame) {
    return <div>Game not found</div>;
  }
  return (
    <div className="flex flex-col h-full bg-amber-100/30 m-5 items-center justify-center min-h-screen">
      <div className="space-x-5">
        <span>Game Name: {currentGame.gameName}</span>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <span className="text-lg font-semibold">Players:</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-md">
          {currentGame.players.map((player) => (
            <div
              className="flex items-center justify-between border border-amber-900/40 rounded-md p-4 bg-amber-900/80 shadow-lg backdrop-blur-sm"
              key={player.id}
            >
              {/* Name as header on the left */}
              <div className="flex flex-col flex-1">
                <span className="text-xl font-bold text-amber-100">{player.name}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-amber-200">
                  <span>Bonus: <span className="font-semibold">{player.bonus}</span></span>
                  <span>Total: <span className="font-semibold">{player.bonus + player.level}</span></span>
                  <span>Class: <span className="font-semibold">{player.class ?? 'none'}</span></span>
                  <span>Race: <span className="font-semibold">{player.race ?? 'Human'}</span></span>
                </div>
              </div>
              {/* Level on the right with a ring */}
              <div className="flex flex-col items-center ml-4">
                <span className="text-xs text-amber-300 mb-1">Level</span>
                <div className="relative flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full border-4 border-amber-400 flex items-center justify-center text-2xl font-extrabold bg-amber-950 text-amber-100 shadow-md">
                    {player.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleLeaveGame}
        className={`mt-4 ${BUTTON_COLOR} ${BUTTON_SHAPE}`}
        type="button"
      >
        Leave Game
      </button>
    </div>
  );
}
