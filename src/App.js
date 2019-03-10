import React, {Component} from 'react';
import HomeContainer from './containers/HomeContainer';
import Sidebar from './components/Sidebar';
import {Redirect, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import ArticlePage from './components/routes/ArticlePage';

class App extends Component {
  render() {
    return (
      <main>
        <Sidebar/>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={HomeContainer}/>
          <Route exact path="/about" component={About}/>
          <Route path="/article" component={ArticlePage} />
        </Switch>
      </main>
    );
  }
}

export default App;
