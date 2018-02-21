import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VacanciesListElement from './VacanciesListElement';

class VacanciesListTable extends Component {
    static propTypes = {
        table: PropTypes.array
    };

    static defaultProps = {
        table: []
    };

    displayVacancies() {
        return (
            <div>
                <form name="form__vacancies">
                    <div className="vacancies__headerlong">
                        Abonnement
                    </div>

                    <div className="vacancies__headershort">
                        Periode
                    </div>

                    <div className="vacancies__headershort">
                        Normale prijs
                    </div>

                    <div className="vacancies__headershort">
                        Prijs
                    </div>

                    <div className="clearfix"></div>

                    <ul>
                        {this.props.table.map((vacancy) => (
                            <VacanciesListElement key={vacancy.id} id={vacancy.id} name={vacancy.name} period={vacancy.period} price={vacancy.price} total={vacancy.finalPrice}/>
                        ))}
                    </ul>
                </form>
            </div>
        );
    }

    displayNoVacancies() {
        return(
            <div>
                <p>Geen beschikbaar vacatures</p>
            </div>
        );
    }


    render() {

        return (
            <div>
                {this.props.table ?
                    this.displayVacancies() :
                    this.displayNoVacancies()
                }
            </div>
        );
    }
}

export default VacanciesListTable;


