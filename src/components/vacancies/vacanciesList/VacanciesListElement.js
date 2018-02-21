import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setVacancy } from '../../../state/actions/vacancies';

class VacanciesListElement extends Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        discount: PropTypes.number,
        price: PropTypes.number,
        total: PropTypes.number
    };

    static defaultProps = {
        id: 0,
        name: "",
        discount: 0,
        price: 0,
        total: 0
    };

    static contextTypes = {
        store: PropTypes.object.isRequired
    }

    constructor (props) {
        super(props);

        this.saveVacancyOnClick = this.saveVacancyOnClick.bind(this);
    }

    saveVacancyOnClick() {
        const vacancyId = this.props.id;

        this.inputRadio.checked = true;

        this.context.store.dispatch(
            setVacancy(vacancyId)
        );
    }

    render() {
        const inputId = `vacancy_${this.props.id}`;
        return (
            <li onClick={this.saveVacancyOnClick}>
                <div className="vacancies__elementtype">
                    <input type="radio" id={inputId} name="form__vacancytype"  ref={(input) => this.inputRadio = input}/>
                    {this.props.name}
                </div>

                <div className="vacancies__elementperiod">
                    {this.props.period}
                </div>

                <div className="vacancies__elementprice">
                    &euro; {this.props.price}
                </div>

                <div className="vacancies__elementtotal">
                    &euro; {this.props.total}
                    <span><br/>&euro; {this.props.price}</span>
                </div>

                <div className="clearfix"></div>
            </li>
        );

    }
}

export default VacanciesListElement;


