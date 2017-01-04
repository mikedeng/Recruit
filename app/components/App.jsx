import React from 'react';

require('./App.css');

class DeptRow extends React.Component {
  render() {
    return (<tr className="deptRow"><td>{this.props.dept}</td><td>{this.props.count}</td></tr>);
  }
}

class PositionRow extends React.Component {
  render() {
    const name = this.props.position.name;
    const count = this.props.position.count;
      
    return (
      <tr className="positionRow"><td><input type="checkbox"/>{name}</td><td>{count}</td></tr>
    );
  }
}

class PositionTable extends React.Component {
  render() {
    let rows = [];
    let lastDept = null;
    this.props.positions.forEach((position) => {
      if (position.dept !== lastDept) {      	
      	const depts  = this.props.positions.filter(e => e.dept === position.dept);
      	const cnt = depts.map(d => d.count).reduce((a, b) => a + b, 0);
        rows.push(<DeptRow dept={position.dept} key={position.dept} count={cnt} />);
      }

      rows.push(<PositionRow position={position} key={position.name} />);
      lastDept = position.dept;
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>招聘职位
        	<a href="#">清空</a>
        </h1>
        <PositionTable positions={this.props.positions} />
      </div>
    );
  }
}

export default App;
