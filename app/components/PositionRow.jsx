import React from 'react';

class PositionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  checkChange = (e) => {
    this.setState({ checked: e.target.checked });
  }

  render() {
    const name = this.props.position.name;
    const count = this.props.position.count;
    return (
      <li className="positionRow">
        <label className="left">
          <input type="checkbox" checked={this.state.checked} onChange={this.checkChange} />{name}
        </label>
        <span className="right">{count}</span>
      </li>
    );
  }
}

PositionRow.propTypes = {
  checked: React.PropTypes.bool
};

export default PositionRow;
