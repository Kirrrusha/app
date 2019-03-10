import React, {Component} from 'react';
import LinkBtn from '../LinkBtn';
import './style.scss';

class Sidebar extends Component {

  state = {
    links: [
      {
        selector: 'fb',
        href: 'https://ru-ru.facebook.com/'
      },
      {
        selector: 'inst',
        href: 'https://www.instagram.com/'
      },
      {
        selector: 'github',
        href: 'https://github.com/'
      },
      {
        selector: 'twitter',
        href: 'https://twitter.com/'
      }
    ]
  };

  render() {
    const {links} = this.state;
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
          <LinkBtn to="/home" label={'home'}/>
          <LinkBtn to="/about" label={'about'}/>
        </nav>

        <div className='sidebar__links'>
          {links.map(link => {
            return (
              <a
                rel="noopener noreferrer"
                href={link.href}
                target="_blank"
                className={`link ${link.selector}`}
                key={link.selector}> </a>
            )
          })}
        </div>
      </aside>
    );
  }
}

export default Sidebar;
