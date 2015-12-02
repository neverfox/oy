/**
 * OyElement:
 * TODO: Once React allows more graceful custom attributes, this shouldn't be necessary.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OyImg = require('./OyImg');

var _OyImg2 = _interopRequireDefault(_OyImg);

var _OyTable = require('./OyTable');

var _OyTable2 = _interopRequireDefault(_OyTable);

var _OyTD = require('./OyTD');

var _OyTD2 = _interopRequireDefault(_OyTD);

// HTML4 elements with attributes deprecated in HTML5.
// Necessary for now because React does not render custom attributes.
var OY_COMPONENTS = {
  'img': _OyImg2['default'],
  'table': _OyTable2['default'],
  'td': _OyTD2['default']
};

exports['default'] = _react2['default'].createClass({
  displayName: 'OyElement',

  propTypes: {
    type: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props = this.props;
    var type = _props.type;

    var other = _objectWithoutProperties(_props, ['type']);

    var element = OY_COMPONENTS.hasOwnProperty(type) ? OY_COMPONENTS[type] : type;
    return _react2['default'].createElement(element, other, this.props.children);
  }
});
module.exports = exports['default'];