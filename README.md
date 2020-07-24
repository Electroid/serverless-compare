Workers vs. the competitiors
====================
A hello-world GraphQL function deployed on Cloudflare Workers, AWS Lambda, Azure Functions, and Google Cloud Functions.

```js
const { gql, ApolloServer } = require('apollo-server-${platform}')

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

// Platform-specific handler
// e.g. module.exports.graphql = server.createHandler()
```

Results
=======

Results are collected from each provider's logs, execution times are based on what the platform reports.

Reproduce
=========

1. Run `serverless deploy` (or `wrangler publish` for Cloudflare Workers)
2. Run `artillery run benchmark.yml` to run various benchmarking tests
3. Go to the provider's logging system and export the execution times (this will be different for every platform)
4. Compare the results!
