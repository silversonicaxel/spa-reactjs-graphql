const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const vacanciesData = require('../data/vacancies');

// graphql type definitions
const typeDefs = `
    type Vacancy {
        id: Int
        name: String
        period: Int
    },
    type Query {
        vacancy(id: Int!): Vacancy
        vacancies(period: Int): [Vacancy]
    }
`;


// graphql resolvers
const getVacancy = (args) => {
    var id = args.id;
    return vacanciesData.filter(vacancy => {
            return vacancy.id == id;
})[0];
};
const getVacancies = (args) => {
    if (args && args.period) {
        var period = args.period;
        return vacanciesData.filter(vacancy => vacancy.period === period);
    } else {
        return vacanciesData;
    }
};

const resolvers = {
    Query: {
        vacancies: getVacancies,
        vacancy: getVacancy
    }
}

// graphql schema build with type definitions and resolver
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// graphql server
const app = express();
const port = 3000;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));
app.listen(port, () => console.log(`Express GraphQL Server now running on localhost:${port}/graphql and browserable on localhost:${port}/graphiql`));
