const { gql, ApolloServer } = require('apollo-server-lambda')

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

// Lambda handler

module.exports.graphql = server.createHandler()
