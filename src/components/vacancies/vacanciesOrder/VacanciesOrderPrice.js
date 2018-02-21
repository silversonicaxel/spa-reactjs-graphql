import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class VacanciesOrderPrice extends Component {
    static propTypes = {
        price: PropTypes.number,
        discount: PropTypes.number,
        total: PropTypes.number
    };

    static defaultProps = {
        price: 0,
        discount: 0,
        total: 0
    };

    render() {
        const totalLabelClasses = classNames({
            'vacancies__priceslabel': true,
            'vacancies__prices--bold': true
        });
        const totalAmountClasses = classNames({
            'vacancies__pricesamount': true,
            'vacancies__prices--bold': true
        });

        return (
            <div className="vacancies__prices">
                <div>
                    <div className="vacancies__priceslabel">Prijs</div>
                    <div className="vacancies__pricesamount">{this.props.price} &euro;</div>

                    <div className="vacancies__priceslabel">Korting</div>
                    <div className="vacancies__pricesamount">- {this.props.discount} &euro;</div>

                    <div className={totalLabelClasses}>Totaal</div>
                    <div className={totalAmountClasses}>{this.props.total} &euro;</div>

                    <div className="clearfix"></div>
                </div>

                <hr/>
            </div>
        );
    }
}

export default VacanciesOrderPrice;


