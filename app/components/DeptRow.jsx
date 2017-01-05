import React from 'react';

class DeptRow extends React.Component {
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
    const checked = e.target.checked;
    this.setState({ checked });
    this.props.onDeptClick(checked);
  }

  render() {
    return (
      <li className="deptRow">
        <label className="left" >
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.checkChange} />{this.props.dept}
          <span className="arrow">&#8964;</span>
        </label>
        <span className="right">{this.props.count}</span>
      </li>
    );
  }
}

DeptRow.propTypes = {
  checked: React.PropTypes.bool
};

export default DeptRow;
