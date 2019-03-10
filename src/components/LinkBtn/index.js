import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class LinkBtn extends Component {

  static propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
    selector: PropTypes.string
  };

  render() {
    const {to, label, selector} = this.props;
    return (
      <NavLink exact to={to} className={`nav-link ${selector || ''}`} activeClassName="">
        {label}
      </NavLink>
    );
  }
}

export default LinkBtn;
