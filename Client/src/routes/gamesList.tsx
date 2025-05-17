import { createFileRoute } from "@tanstack/react-router";
import { useGames } from "../hooks/useGames";
import { usePlayers } from "../hooks/usePlayers";
import { GAME_CARD_STYLE } from "../utils/styles";
import { useState } from "react";
import GameCard from "../components/GameCard";
import JoinGameDialog from "../components/JoinGameDialog";

export const Route = createFileRoute("/gamesList")({
  component: GamesList,
});

function GamesList() {
  const games = useGames();
  const { createGameMutation } = games;
  const { addPlayerMutation } = usePlayers();

  // Add state for the game name input
  const [gameName, setGameName] = useState("");
  // State for join dialog
  const [joinDialog, setJoinDialog] = useState<{ open: boolean; gameId: string | null }>({ open: false, gameId: null });
  const [playerName, setPlayerName] = useState("");
  const [gender, setGender] = useState("none");

  // Persistent player ID
  function getOrCreatePlayerId() {
    let id = localStorage.getItem("playerId");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("playerId", id);
    }
    return id;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(e.target.value);
  };

  const handleCreateGame = () => {
    if (gameName.trim()) {
      createGameMutation.mutate(gameName);
      setGameName("");
    }
  };

  const handleJoinGame = (gameId: string) => {
    setJoinDialog({ open: true, gameId });
  };

  const handleJoinDialogClose = () => {
    setJoinDialog({ open: false, gameId: null });
    setPlayerName("");
    setGender("none");
  };

  const handleJoinSubmit = () => {
    if (playerName.trim() && joinDialog.gameId) {
      const playerId = getOrCreatePlayerId();
      addPlayerMutation.mutate({
        GameId: joinDialog.gameId,
        PlayerId: playerId,
        PlayerName: playerName,
        Gender: gender,
        Level: 1, // Default starting level
        Bonus: 0, // Default starting bonus
      });
      handleJoinDialogClose();
    }
  };

  const allGames = games.allGamesQuery.data || [];
  return (
    <div className="p-4 m-5 bg-amber-100/10 h-full flex flex-col gap-4">
      <div className="flex flex-col gap-4 max-h-screen">
        <h1 className="text-2xl font-bold ">Games</h1>
        <div className="flex flex-col gap-2">
          <div className={GAME_CARD_STYLE}>
            <h2 className="text-xl font-semibold">Create Game</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Game Name"
                className="border p-2 rounded"
                value={gameName}
                onChange={handleInputChange}
              />
              <button
                className="bg-teal-500 text-white p-2 rounded hover:bg-teal-700 duration-100"
                onClick={handleCreateGame}
                disabled={createGameMutation.isPending}
              >
                {createGameMutation.isPending ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-2 auto-rows-max">
            {allGames.map((game) => (
              <GameCard game={game} key={game.gameId} handleJoinGame={handleJoinGame} />
            ))}
          </div>
        </div>
      </div>
      {/* Join Game Dialog */}
      <JoinGameDialog
        open={joinDialog.open}
        playerName={playerName}
        setPlayerName={setPlayerName}
        gender={gender}
        setGender={setGender}
        onCancel={handleJoinDialogClose}
        onSubmit={handleJoinSubmit}
        isPending={addPlayerMutation.isPending}
      />
    </div>
  );
}
