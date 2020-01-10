const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Book {
  title: String,
  author: String
}
type Query {
  books: [Book]
}
`

const books = [
  {
    title: '标题1',
    author: '作者1'
  },
  {
    title: '标题2',
    author: '作者2'
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({typeDefs, resolvers})


server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`)
})