import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as vacanciesActions from '../../state/actions/vacancies';

import './Vacancies.css';
import VacanciesList from './vacanciesList/VacanciesList';
import VacanciesOrder from './vacanciesOrder/VacanciesOrder';

class Vacancies extends Component {
    static propTypes = {
        vacanciesActions: PropTypes.object,
        vacancies: PropTypes.array
    };

    componentWillMount() {
        this.props.vacanciesActions.fetchVacancies();
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

let mapStateToProps = (state) => {
    return {
        vacancies: state.vacanciesState.vacancies
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        vacanciesActions: bindActionCreators(vacanciesActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vacancies);
