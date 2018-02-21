import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as vacanciesActions from '../../../state/actions/vacancies';

import './VacanciesOrder.css';
import VacanciesOrderImage from './VacanciesOrderImage';
import VacanciesOrderDetail from './VacanciesOrderDetail';
import VacanciesOrderPrice from './VacanciesOrderPrice';

class VacanciesOrder extends Component {
    static propTypes = {
        vacanciesActions: PropTypes.object,
        vacancies: PropTypes.array,
        vacancyId: PropTypes.number
    };

    static defaultProps = {
        vacanciesActions: {},
        vacancies: [],
        vacancyId: 0
    };

    componentWillMount() {
        this.props.vacanciesActions.fetchSelectedVacancy();
    }

    displayVacancy() {
        const selectedVacancyId = this.props.vacancyId;
        const filteredVacancy = this.props.vacancies.filter(vacancy => {
            return vacancy.id === selectedVacancyId;
        })[0];

        const {image, name, features, price, discount, finalPrice} = filteredVacancy;

        return(
            <div>
                <VacanciesOrderImage url={image}/>

                <VacanciesOrderDetail type={name} details={features}/>

                <VacanciesOrderPrice price={price} discount={discount} total={finalPrice}/>

                <button>Bestellen</button>
            </div>
        );
    }

    displayNoSelection() {
        return(
            <div>
                <p>Geen geselecteerd vacature</p>
            </div>
        );
    }

    render() {
        return (
            <div className="vacancies__order">
                <h4>Bestelling</h4>

                {this.props.vacancyId ?
                    this.displayVacancy() :
                    this.displayNoSelection()
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        vacancies: state.vacanciesState.vacancies,
        vacancyId: state.vacanciesState.selectedVacancy,
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
)(VacanciesOrder);
