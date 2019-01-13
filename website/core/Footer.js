/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('get-started.html', this.props.language)}>
              Getting Started
            </a>
          </div>
          <div>
            <h5>Community</h5>
              <a
                  href="https://twitter.com/search?vertical=default&q=captainduckduck&src=typd"
                  target="_blank"
                  rel="noreferrer noopener">
                  Twitter
              </a>
              <a
                  href="https://join.slack.com/t/captainduckduck/shared_invite/enQtNDEwMjc3MjcxNjUzLWQ4YjljN2JiMGU5Nzk5NjcwMDEzNDNiMTNkOTVhNTA4YTYwOThkNDkyMTlkMDFhMzAzOTA5YjcwY2E4NWRkYzk"
                  target="_blank"
                  rel="noreferrer noopener">
                  Slack Group
              </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/githubsaturn/captainduckduck"
               target="_blank">
                GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/githubsaturn/captainduckduck/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>

          <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=UA-121064489-1`}
          />
          <script
              dangerouslySetInnerHTML={{
                  __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'UA-121064489-1');
                            `
              }}/>

      </footer>
    );
  }
}

module.exports = Footer;
