import { ApolloClient, InMemoryCache, useQuery, gql, ApolloError } from '@apollo/client'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphiql',
})

const FETCH_LATEST_MESSAGES = gql`
  query ($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      id
      text
      userId
      channelId
      datetime
    }
  }
`

export const FETCH_MORE_MESSAGES = gql`
  query ($channelId: String!, $messageId: String!, $old: Boolean!) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
      id
      text
      userId
      channelId
      datetime
    }
  }
`

export const POST_MESSAGE = gql`
  mutation ($channelId: String!, $userId: String!, $text: String!) {
    postMessage(userId: $userId, channelId: $channelId, text: $text) {
      datetime
    }
  }
`

export function FetchLatestMessages(channelId: string): {
  data: any
  loading: boolean
  error: ApolloError | undefined
} {
  const { loading, error, data } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { channelId },
  })

  return { data, loading, error }
}
