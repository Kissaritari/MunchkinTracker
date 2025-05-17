import { createFileRoute } from '@tanstack/react-router'
import { usePlayerIdCache } from '../hooks/useCache';

export const Route = createFileRoute('/game')({
  component: RouteComponent,
})

function RouteComponent() {
  const [, , removePlayerId] = usePlayerIdCache();
  
  return (
    <div>
      Hello "/game"!
      <div onClick={removePlayerId} style={{ cursor: 'pointer' }}>
        <p>Leave Game</p>
        
      </div>
    </div>
  );
}
