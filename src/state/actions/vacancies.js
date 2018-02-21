import * as types from './vacanciesTypes';
import jsonVacancies from '../data/vacancies.json';

export function receiveVacancies(data) {
    return {
        type: types.RECEIVE_VACANCIES, vacancies: data
    };
}
export function fetchVacancies() {
    return dispatch => {
        dispatch(receiveVacancies(jsonVacancies));
    };
}


export function saveVacancies(data) {
    return {
        type: types.SAVE_VACANCY, vacancyId: data
    };
}
export function setVacancy(vacancyId) {
    return dispatch => {
        dispatch(saveVacancies(vacancyId));
    };
}


export function getVacancy() {
    return {
        type: types.GET_VACANCY
    };
}
export function fetchSelectedVacancy() {
    return dispatch => {
        dispatch(getVacancy());
    };
}