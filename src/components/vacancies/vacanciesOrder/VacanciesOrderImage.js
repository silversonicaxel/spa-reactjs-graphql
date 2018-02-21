import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VacanciesOrderImage extends Component {
    static propTypes = {
        url: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        url: "",
        type: "Geen Vacature"
    };

    render() {
        const url = `/media/${this.props.url}`,
            type = this.props.type;


        return (
            <div className="vacancies__image">
                <img src={url} alt={type}/>
            </div>
        );
    }
}

export default VacanciesOrderImage;


