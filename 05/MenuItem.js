import React from "react";
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {
        return <li>
                <a href={this.props.url}>{this.props.text}</a>
            </li>
        }
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default MenuItem;