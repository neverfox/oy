import React from 'react';


export default React.createClass({
  displayName: 'OyTable',

  propTypes: {
    align: React.PropTypes.string,
    vAlign: React.PropTypes.string,
    bgColor: React.PropTypes.string
  },

  render: function() {
    return (
      <table {...this.props}
        data-align={this.props.align}
        data-bgcolor={this.props.bgColor}
        data-valign={this.props.vAlign}>
        {this.props.children}
      </table>
    );
  }
});
