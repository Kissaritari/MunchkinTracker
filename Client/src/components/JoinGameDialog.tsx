import React from "react";
import { CARD_COLOR, CARD_SHAPE } from "../utils/styles";

interface JoinGameDialogProps {
  open: boolean;
  playerName: string;
  setPlayerName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
  isPending: boolean;
}

const JoinGameDialog: React.FC<JoinGameDialogProps> = ({
  open,
  playerName,
  setPlayerName,
  gender,
  setGender,
  onCancel,
  onSubmit,
  isPending,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className={CARD_SHAPE+ CARD_COLOR}>
        <h2 className="text-lg font-semibold">Enter your <span className="text-2xl text-amber-50">name</span> & <span className="text-2xl text-amber-50">gender</span> to join!</h2>
        <input
          type="text"
          placeholder="Player Name"
          className="border p-2 rounded w-1/2"
          value={playerName}
          onChange={e => setPlayerName(e.target.value)}
          autoFocus
        />
        <select
          className="border p-2 rounded w-1/2 bg-gray-700"
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="none">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className="flex gap-2 justify-end">
          <button className="p-2 rounded bg-gray-700 hover:bg-red-900 duration-100" onClick={onCancel}>Cancel</button>
          <button
            className="bg-teal-700 text-white p-2 rounded hover:bg-teal-500 duration-100"
            onClick={onSubmit}
            disabled={isPending || !playerName.trim()}
          >
            {isPending ? "Joining..." : "Join"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinGameDialog;
