import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <main>
                <h2>Pagina niet gevonden</h2>

                <p>
                    Ga naar de <NavLink to="/">Homepage</NavLink>
                </p>
            </main>
        );
    }
}

export default NotFound;
