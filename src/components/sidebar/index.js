import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeContainer from '../../containers/HomeContainer';
import About from '../../pages/About';

class Sidebar extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <aside className='sidebar'>
        <div className='sidebar__about'>
          <div className='sidebar__title'>
            My personal blog
          </div>
          <p className='sidebar__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sodales ipsum. Aenean felis nibh,
            dignissim eu tortor ut, pulvinar commodo tortor. Pellentesque gravida sapien velit, in pellentesque sapien
            sagittis nec.
          </p>
        </div>

        <nav className='navigation'>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </nav>

        <div className='sidebar__links'>

        </div>
      </aside>
    );
  }
}

export default Sidebar;
