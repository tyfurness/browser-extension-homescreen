import * as React from 'react';
import { toAbsoluteUrl } from '@browser-extension/utility-url';

interface NavbarLink {
  class: string;
  href: string;
}

const navbarLinks: Array<NavbarLink> = [
  {
    class: 'fas fa-envelope',
    href: 'https://mail.google.com/',
  },
  {
    class: 'fab fa-google-drive',
    href: 'https://drive.google.com/',
  },
  {
    class: 'fas fa-calendar-minus',
    href: 'https://calendar.google.com/',
  },
  {
    class: 'fab fa-youtube',
    href: 'https://www.youtube.com/',
  },
  {
    class: 'fab fa-twitch',
    href: 'https://www.twitch.tv/',
  },
  {
    class: 'fas fa-ticket-alt',
    href: 'https://www.netflix.com/browse',
  },
  {
    class: 'fas fa-toilet-paper',
    href: 'https://www.crunchyroll.com/',
  },
  {
    class: 'fab fa-soundcloud',
    href: 'https://soundcloud.com/discover',
  },
  {
    class: 'fab fa-reddit-alien',
    href: 'https://www.reddit.com/',
  },
  {
    class: 'fab fa-twitter',
    href: 'https://twitter.com/home',
  },
  {
    class: 'fab fa-github-alt',
    href: 'https://github.com/',
  },
  {
    class: 'fab fa-amazon',
    href: 'https://www.amazon.ca/',
  },
];

export default class Header extends React.Component {
  render(): JSX.Element {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={toAbsoluteUrl('/build/resources/hub-logo.svg')} width="112" height="28" />
          </div>
        </div>
        {navbarLinks.map((link: NavbarLink, index: number) => {
          return (
            <a className="navbar-item" href={link.href} key={index}>
              <i className={link.class} />
            </a>
          );
        })}
      </nav>
    );
  }
}
