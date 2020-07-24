const { ApolloServer, gql } = require('apollo-server-cloudflare')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
})

// Worker handler

const { graphqlCloudflare } = require('apollo-server-cloudflare/dist/cloudflareApollo')

const handler = async request => {
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}

addEventListener('fetch', event => {
  event.respondWith(handler(event.request))
})
