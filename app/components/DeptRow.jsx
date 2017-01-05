import React from 'react';

class DeptRow extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        checked: this.props.checked
     };
   }

   checkChange = (e) => {     
     let checked = e.target.checked;
     this.setState({checked: checked});
     this.props.onDeptClick(checked);     
   }

   componentWillReceiveProps(nextProps){
     this.setState({checked: nextProps.checked});
   }

  render() {
    return (<li className="deptRow">
              <span className="left">
                <label>
                  <input                   
                    type="checkbox" 
                    checked={ this.state.checked } 
                    onChange={ this.checkChange } />
                    {this.props.dept}
                  </label>
                    <span className="arrow">&#8964;</span>
              </span>
              <span className="right">{this.props.count}</span>
            </li>);
  }
}

DeptRow.propTypes = {
  checked: React.PropTypes.bool
};

export default DeptRow;