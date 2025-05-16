import { Game } from "../types";
import { GAME_CARD_STYLE } from "../utils/styles";

export interface GameCardProps {
  game: Game;
  handleJoinGame: (gameId: string) => void;
}

const GameCard = ({ game, handleJoinGame }: GameCardProps) => {
  return (
    <div onClick={()=> handleJoinGame(game.gameId)} key={game.gameId} className={GAME_CARD_STYLE + `duration-150 ${game.isGameStarted ? " hover:bg-green-100/20" : ""}`}>
      <h2 className="text-xl font-semibold border-b">{game.gameName}</h2>
      <p>Players: </p>
      {game.players.map((player) => (
        <div key={player.id} className="grid grid-cols-4 gap-2 items-center">
          <span className="text-sm border px-2 py-1 rounded-md bg-amber-50/10">{player.name}</span>
        </div>
      ))}
    </div>
  );
};
export default GameCard;
