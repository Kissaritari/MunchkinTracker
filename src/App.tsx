import { useState } from 'react'
function App() {
  const [playerCount, setPlayerCount] = useState(0)

  return (
    <div className='bg-teal-50 dark:bg-gray-900 min-h-screen'>
      <h1 className='text-2xl font-bold text-amber-100'>Munchkin Tracker</h1>
      <div>
        <p className='text-gray-700'>Welcome to the Munchkin Tracker app!</p>
        <select>
          <option value="1">1 Player</option>
          <option value="2">2 Players</option>
          <option value="3">3 Players</option>
          <option value="4">4 Players</option>
        </select>
      </div>
    </div>
  )
}

export default App
