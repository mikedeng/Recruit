import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var POSITIONS = [
  { dept: '工程研发部门', name: 'Mac 开发工程师',  count: 9 },
  { dept: '工程研发部门', name: 'iOS App 测试工程师',   count: 17 },
  { dept: '工程研发部门', name: 'Android 远程控制工程师',  count: 61 },
  { dept: '工程研发部门', name: 'Web 前端工程师',  count: 31 },
  { dept: '工程研发部门', name: 'Android 多媒体软件开发工程师',  count: 2 },
  { dept: '产品设计部门', name: '网页设计师', count: 47 },
  { dept: '产品设计部门', name: 'ID/工业设计师', count: 39 },
  { dept: '产品设计部门', name: '视觉设计师/GUI 界面设计师', count: 42 },
  { dept: '产品设计部门', name: '平面设计师', count:  8}
];

ReactDOM.render(
  <App positions={POSITIONS} />,
  document.body.appendChild(document.createElement('div'))
);
