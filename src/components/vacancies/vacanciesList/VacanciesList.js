import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './VacanciesList.css';
import VacanciesListTable from './VacanciesListTable';

class VacanciesList extends Component {
    static propTypes = {
        list: PropTypes.array
    };

    static defaultProps = {
        list: []
    };

    render() {

        return (
            <div className="vacancies__list">
                <h2>Online vacatures</h2>
                <h5>Introductiepakketten</h5>

                <VacanciesListTable table={this.props.list} />
            </div>
        );
    }
}

export default VacanciesList;
