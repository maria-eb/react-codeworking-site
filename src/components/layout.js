import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import Header from './header';
import { dark, light, withGutters, layoutWrapper, layoutMain, globalSyles } from '../lib/styles';
import ExternalLink from './ExternalLink';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div css={[layoutWrapper]}>
        <Global styles={globalSyles} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main css={[layoutMain]}>
          {children}
        </main>
        <div
          css={{
            backgroundColor: dark,
            padding: '.35rem 0',
            marginTop: '.5rem',
            color: light,
          }}
        >
          <footer
            css={[
              withGutters,
              {
                a: {
                  color: light,
                  textDecoration: 'none',
                  fontStyle: 'italic',

                  '&:hover,&:active,&:visited': {
                    color: light,
                    textDecoration: 'underline',
                  },
                },
              },
            ]}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <ExternalLink href="https://www.gatsbyjs.org">
              Gatsby
            </ExternalLink>{' '}
            | Hosted by{' '}
            <ExternalLink href="https://netlify.com">Netlify</ExternalLink> |
            Contribute on{' '}
            <ExternalLink href="https://github.com/kwelch/react-codeworking-site">
              GitHub
            </ExternalLink>
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
