// graphql type definitions
const typeDefs = `
    type SelectedVacancy { 
        id: Int,
        vacancyId: Int
    }

    type Vacancy {
        id: Int
        name: String
        period: Int
        price: Int
        discount: Int
        image: String
        features: [String]
    },
    type Query {
        vacancy(id: Int!): Vacancy
        vacancies(id: Int): [Vacancy]
    }
`;

module.exports = {
  typeDefs
}
