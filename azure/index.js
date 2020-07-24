const { gql, ApolloServer } = require('apollo-server-azure-functions')

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

// Azure handler

module.exports.graphql = server.createHandler()
