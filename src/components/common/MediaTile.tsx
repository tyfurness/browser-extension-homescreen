import * as React from 'react';

export interface MediaTileProps {
  thumbnailHref: string;
  thumbnail: string;
  href: string;
}

export default class MediaTile extends React.Component<MediaTileProps> {
  render(): JSX.Element {
    return (
      <div className="tile--parent">
        <div className="box is-marginless tile--content">
          <article className="media">
            <a className="dark" href={this.props.thumbnailHref}>
              <div className="media-left">
                <figure className="image is-64x64 is-square">
                  <img className="thumbnail" src={this.props.thumbnail || '/resources/anchor.svg'} alt="Image" />
                </figure>
              </div>
            </a>

            <div className="media-content">
              <a className="dark" href={this.props.href}>
                <div className="content">{this.props.children}</div>
              </a>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="dark" href={this.props.href}>
                  <span className="icon is-small dark">
                    <i className="fad fa-external-link" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </nav>
          </article>
        </div>
      </div>
    );
  }
}
