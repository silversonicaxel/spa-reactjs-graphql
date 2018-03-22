import gql from 'graphql-tag';

export const VACANCIES_QUERY = gql`
    query vacancies {
        vacancies {
            id
            name
            period
            price
            discount
        }
    }
`;
