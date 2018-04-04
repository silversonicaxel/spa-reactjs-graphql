const vacanciesData = require('../data/vacancies');

const getVacancy = (obj, args) => {
  const id = args.id;
  return vacanciesData.filter(vacancy => {
      return vacancy.id == id;
  })[0];
};
const getVacancies = (obj, args) => {
  if (args && args.id) {
      const id = args.id;
      return vacanciesData.filter(vacancy => vacancy.id === id);
  } else {
      return vacanciesData;
  }
};

const resolvers = {
  Query: {
      vacancies: getVacancies,
      vacancy: getVacancy
  }
};

module.exports = {
  resolvers
}
