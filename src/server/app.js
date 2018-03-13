const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');
const vacanciesData = require('../data/vacancies');

// graphql schema
const schema = buildSchema(`
    type Vacancy {
        id: Int
        name: String
        period: Int
    },
    type Query {
        vacancy(id: Int!): Vacancy
        vacancies(topic: String): [Vacancy]
    }
`);

// graphql resolvers
const getVacancy = (args) => {
    var id = args.id;
    return vacanciesData.filter(vacancy => {
        return vacancy.id == id;
    })[0];
};
const getVacancies = (args) => {
    if (args.period) {
        var period = args.period;
        return vacanciesData.filter(vacancy => vacancy.period === period);
    } else {
        return vacanciesData;
    }
};
const root = {
    vacancy: getVacancy,
    vacancies: getVacancies
};

// graphql server
const app = express();
const port = 3000;
app.use('/graphql', expressGraphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`));
