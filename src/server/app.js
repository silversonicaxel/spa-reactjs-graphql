const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// graphql schema build with type definitions and resolver
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// graphql server
const app = express();
const port = 3001;

app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, () => console.log(`Express GraphQL Server now running on localhost:${port}/graphql and browserable on localhost:${port}/graphiql`));
