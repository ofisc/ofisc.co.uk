import * as React from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';


import { Link } from 'gatsby';

import '../fonts/source-sans-pro/source-sans-pro.css';
import '../css/base-min.css';
import '../css/grids-min.css';
import '../css/grids-responsive-min.css';
import '../css/overlay.css';

import 'tachyons';

import typography from '../utils/typography';

import DesktopMenu from './desktop';
import MobileMenu from './mobile';
import { site } from './site';

const blue = '#4097DE';

export const Layout = ({ pageTitle, children, wide }) => {

  const mdColumnWidth = !wide && 'pure-u-md-1-2';

  return (
    <>
      <Helmet title={`${pageTitle} | OFISC`} />
      <link type="image/x-icon" href="favicon.ico" rel="icon" />

      <style>{`
        .bg-blue {
          background-color: ${blue};
        }
        /*
        Workaround for CSS ordering issue outlined in this README:
        https://purecss.io/grids/#using-grids-with-your-font-family
        Basically what seems to happen is the import of 'grids-min.css'
        overwrites what 'typography' did to the styling, so this is a hack
        to undo the effects of the overwriting.
        */
        html, button, input, select, textarea,
        .pure-g [class *= "pure-u"] {
            font-family: ${typography.options.bodyFontFamily};
        }
      ${typography.toString()}
    `}</style>

      <div className="graph-white">

        <div className="mobile">
          <MobileMenu />
        </div>

        <div className="desktop">
          <DesktopMenu />
        </div>

        <div className="pure-g mt5">
          <div className="pure-u-1-24 pure-u-sm-1-12 pure-u-md-1-8"></div>
          <div className={`pure-u-11-12 pure-u-sm-3-4 ${mdColumnWidth}`}>
            {children}
          </div>
        </div>

        <footer className="bg-blue mt7">
          <div className="pure-u-1-8"></div>
          <div className="pure-u-1-2">
            <div className="mt4">

              {
                site.map(({ name, link }) =>
                  <div className="">
                    <Link className="link near-white dib grow hover-mid-gray" to={link}>
                      <div className="f4">{name}</div>
                    </Link>
                  </div>
                )
              }

              <div className="pv5 near-white">
                Copyright © {moment().format('YYYY')} Oxford Figure Ice Skating Club
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  )}