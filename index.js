const {graphiqlExpress,ApolloServer,gql} = require('apollo-server-express');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const express = require('express');

const PORT = 4000;
const app = express();


const server = new ApolloServer({typeDefs,resolvers});
server.applyMiddleware({app});

app.use('/graphql',() => {
    console.log(`Server listening on port : 4000`);
})
// server.listen({port : PORT},() => {
//     console.log(`Server listening at http://localhost:4000${server.graphqlPath}`);
// })
