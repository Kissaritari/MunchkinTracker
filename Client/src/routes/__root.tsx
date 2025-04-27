import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { BG_GRADIENT_COLOR } from '../utils/styles'

export const Route = createRootRoute({
  component: () => (
    <div className={BG_GRADIENT_COLOR + ' h-screen flex flex-col text-amber-100'}>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/games" className="[&.active]:font-bold">
          Games
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})