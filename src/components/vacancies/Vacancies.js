import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Vacancies.css';
import VacanciesList from './vacanciesList/VacanciesList';
import VacanciesOrder from './vacanciesOrder/VacanciesOrder';

class Vacancies extends Component {
    static propTypes = {
        vacanciesActions: PropTypes.object,
        vacancies: PropTypes.array
    };

    componentWillMount() {

    }

    render() {
        return (
            <div className="vacancies">
                <VacanciesList list={this.props.vacancies}/>

                <VacanciesOrder/>

                <div className="clearfix"></div>
            </div>
        );
    }
}

export default Vacancies;
