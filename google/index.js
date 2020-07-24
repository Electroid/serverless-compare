const { gql, ApolloServer } = require('apollo-server-cloud-functions')

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

// Google handler

exports.graphql = server.createHandler()
