import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

// 引入样式
import "./components/home/homePage.less";

// 引入组件
import Home from './components/home/HomePage.jsx';
import Other from './components/other/Other.jsx';

export default class AllPages extends Component {

	render() {
		return (
  <Router>
    <div className="components">
      <div className="container">
        <div className="components_head">
          <Link to="/">首页</Link>
          <Link to="/other">其他页面</Link>
        </div>

        <div className="components_content">
          <Route exact path="/" component={Home} />
          <Route path="/other" component={Other} />
        </div>
      </div>

    </div>
  </Router>
		);
	}
}

// 最终渲染
ReactDOM.render(
  <AllPages />,
    document.getElementById('root'),
);
if (module.hot) {
	module.hot.accept();
}