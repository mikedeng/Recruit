import React from 'react';
import RecruitPanel from './RecruitPanel';

require('./css/App.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  clearAll = () => {
    this.setState({ checked: false });
  }

  render() {
    return (
      <div className="container">
        <h1><span>招聘职位</span>
          <span className="right">
            <a onClick={this.clearAll} className="clearAll" href="#">清空</a>
          </span>
        </h1>
        <RecruitPanel positions={this.props.positions} allUnchecked={this.state.checked} />
      </div>
    );
  }
}

export default App;
