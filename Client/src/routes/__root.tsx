import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { BG_GRADIENT_COLOR } from '../utils/styles'
import { usePlayerIdCache } from '../hooks/useCache'
import { useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useSignalR } from '../hooks/useSignalR'

function RootComponent() {
  const navigate = useNavigate()
  const [playerId] = usePlayerIdCache()
  useSignalR()

  useEffect(() => {
    if (playerId) {
      navigate({ to: '/game' })
    } else {
      navigate({ to: '/gamesList' })
    }
  }, [playerId, navigate])

  return (
    <div className={BG_GRADIENT_COLOR + ' h-screen flex flex-col text-amber-100 overflow-clip'}>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
