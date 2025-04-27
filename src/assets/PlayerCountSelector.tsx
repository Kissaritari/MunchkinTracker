// PlayerCountSelector.tsx
import React from 'react'

interface PlayerCountSelectorProps {
  playerCount: number |null
  setPlayerCount: (count: number) => void
}

const PlayerCountSelector: React.FC<PlayerCountSelectorProps> = ({ playerCount, setPlayerCount }) => (
  <div className="w-full flex flex-col items-center gap-2">
    <label htmlFor="playerCount" className="text-base font-medium text-teal-800 dark:text-amber-100">Select number of players:</label>
    <select
      id="playerCount"
      className="w-40 px-4 py-2 rounded-lg border border-teal-300 dark:border-amber-300 bg-white dark:bg-gray-900 text-teal-900 dark:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
      value={playerCount ?? 1}
      onChange={(e) => setPlayerCount(Number(e.target.value))}
    >
      <option value="1">1 Player</option>
      <option value="2">2 Players</option>
      <option value="3">3 Players</option>
      <option value="4">4 Players</option>
    </select>
  </div>
)

export default PlayerCountSelector
