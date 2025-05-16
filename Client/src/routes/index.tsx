import { createFileRoute } from '@tanstack/react-router'
import { BG_GRADIENT_COLOR } from '../utils/styles'

export const Route = createFileRoute('/')({
  component: () => (
    <div>
      <h3>Redirecting...</h3>
    </div>
  ),
})