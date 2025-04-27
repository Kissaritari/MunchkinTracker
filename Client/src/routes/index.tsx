import { createFileRoute } from '@tanstack/react-router'
import { BG_GRADIENT_COLOR } from '../utils/styles'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
 // const activeGames = useGames
  return (
    <div className={BG_GRADIENT_COLOR}>
      <h3>Welcome Home!</h3>

    </div>
  )
}