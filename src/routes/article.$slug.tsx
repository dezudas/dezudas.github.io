import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/article/$slug')({
  component: ArticleRedirect,
})

function ArticleRedirect() {
  const { slug } = Route.useParams()
  return <Navigate to="/articles/$slug" params={{ slug }} replace />
}
