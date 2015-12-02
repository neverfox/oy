/**
 * OyElement:
 * TODO: Once React allows more graceful custom attributes, this shouldn't be necessary.
 */

import React from 'react';

import OyImg from './OyImg';
import OyTable from './OyTable';
import OyTD from './OyTD';


// HTML4 elements with attributes deprecated in HTML5.
// Necessary for now because React does not render custom attributes.
const OY_COMPONENTS = {
  'img': OyImg,
  'table': OyTable,
  'td': OyTD
};


export default React.createClass({
  displayName: 'OyElement',

  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render: function() {
    const { type, ...other } = this.props;
    const element = OY_COMPONENTS.hasOwnProperty(type) ? OY_COMPONENTS[type] : type;
    return React.createElement(element, other, this.props.children);
  }
});
