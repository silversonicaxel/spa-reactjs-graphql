import initialState from './initialState';
import {RECEIVE_VACANCIES, SAVE_VACANCY, GET_VACANCY} from '../actions/vacanciesTypes';

export default function vacancies(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_VACANCIES:
            const updateVacancies = action.vacancies.map(vacancy => {
                return Object.assign({}, vacancy, {
                    finalPrice: vacancy.price - vacancy.discount
                });
            });
            return Object.assign({}, state, {
                vacancies: updateVacancies
            });


        case SAVE_VACANCY:
            return Object.assign({}, state, {
                selectedVacancy: action.vacancyId
            });

        case GET_VACANCY:
            return state;

        default:
            return state;
    }
}
