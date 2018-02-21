import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VacanciesOrderDetail extends Component {
    static propTypes = {
        type: PropTypes.string,
        details: PropTypes.array
    };

    static defaultProps = {
        type: "",
        details: []
    };

    render() {
        return (
            <div className="vacancies__detail">
                <h5>{this.props.type}</h5>

                <ul>
                    {this.props.details.map((detail, index) => (
                        <li key={index}>&gt; {detail}</li>
                    ))}
                </ul>

                <hr/>
            </div>
        );
    }
}

export default VacanciesOrderDetail;


