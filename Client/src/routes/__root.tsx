import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { BG_GRADIENT_COLOR } from '../utils/styles'

import { useNavigate } from '@tanstack/react-router'

import { useSignalR } from '../hooks/useSignalR'


function RootComponentInner() {
  const navigate = useNavigate();

  useSignalR();


  return (
    <div className={BG_GRADIENT_COLOR + ' h-screen flex flex-col text-amber-100 overflow-clip'}>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}

function RootComponent() {
  return (
      <RootComponentInner />
  );
}

export const Route = createRootRoute({
  component: RootComponent,
})
