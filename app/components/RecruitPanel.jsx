import React from 'react';
import DeptRow from './DeptRow';
import PositionRow from './PositionRow';

class RecruitPanel extends React.Component {
  constructor(props) {
     super(props);
     this.state = {        
        deptChecked: {}
     };
   }

  onDeptRowClick = (deptName) => {
    return (checked) => {
      let deptChecked = this.state.deptChecked;
      deptChecked[deptName] = checked;
      this.setState({deptChecked: deptChecked});
    }
  }

  componentWillReceiveProps(nextProps) {
    let deptChecked = this.state.deptChecked;
    Object.keys(deptChecked).forEach((e) => {
      deptChecked[e] = false;
    });

    this.setState({deptChecked: deptChecked});    
  }

  render() {
    let rows = [];
    let lastDept = null;   
    this.props.positions.forEach((position) => {
      const checked = this.state.deptChecked[position.deptCode];
      if (position.deptCode !== lastDept) {        
        const depts  = this.props.positions.filter(e => e.deptCode === position.deptCode);
        const cnt = depts.map(d => d.count).reduce((a, b) => a + b, 0);
        rows.push(<DeptRow onDeptClick={ this.onDeptRowClick(position.deptCode) } dept={ position.dept } key={ position.deptCode } count={ cnt } checked={ checked }/>);
      }

      rows.push(<PositionRow position={ position } key={ position.name } checked={ checked }/>);
      lastDept = position.deptCode;
    });

    return (
      <ul>{rows}</ul>
    );
  }
}

RecruitPanel.propTypes = {
  allUnchecked: React.PropTypes.bool
};

export default RecruitPanel;