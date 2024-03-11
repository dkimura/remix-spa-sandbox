import { Container, Title } from '@mantine/core'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Todoist' },
    { name: 'description', content: 'your todo list...' },
  ]
}

export default function Index() {
  return (
    <Container size="xs">
      <Title>Todoist</Title>
    </Container>
  )
}
