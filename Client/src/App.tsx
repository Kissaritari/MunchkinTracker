import { useState } from 'react'
import PlayerCountSelector from './components/PlayerCountSelector'

// Style constants for easy reuse
const BG_GRADIENT = "bg-gradient-to-br from-teal-200 via-amber-100 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col items-center justify-center p-4"
const CARD = "w-full max-w-md rounded-2xl shadow-xl bg-white/80 dark:bg-gray-800/80 p-8 flex flex-col items-center gap-6 border border-amber-200 dark:border-gray-700"
const TITLE = "text-4xl font-extrabold text-teal-700 dark:text-amber-200 drop-shadow mb-2 tracking-tight"
const PLAYER_LABEL = "text-teal-700 dark:text-amber-200 font-semibold"
const FOOTER = "mt-8 text-xs text-gray-500 dark:text-gray-400"
const BUTTON = "px-4 py-2 rounded-lg font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"

function App() {
  const [playerCount, setPlayerCount] = useState<number | null>(null)

  return (
    <div className={BG_GRADIENT}>
      <div className={CARD}>
        <h1 className={TITLE}>Munchkin Tracker</h1>
        <PlayerCountSelector playerCount={playerCount} setPlayerCount={setPlayerCount} />
        <div className="mt-6 w-full flex flex-col items-center">
          {playerCount && <span className={PLAYER_LABEL}>Players: {playerCount}</span>}
          {playerCount && <div className={BUTTON}> Start</div>}
        </div>
      </div>
      <footer className={FOOTER}>&copy; {new Date().getFullYear()} Kissa</footer>
    </div>
  )
}

export default App
