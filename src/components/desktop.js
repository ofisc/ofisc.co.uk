import React from 'react';

import { Link } from 'gatsby';

import Logo from '../pages/svg/ofisc_logo_v2.svg';
import { site } from './site';

const white = '#FFFFFF';

const DesktopMenu = props => {

  return (
    <div className="pure-g bg-blue flex items-center pv3">
      <div className="pure-u-1-12"></div>
      <div className="pure-u-1-6">
        <div className="grow">
          <Link to={'/'}>
            <Logo fill={white} />
          </Link>
        </div>
      </div>
      <div className="pure-u-1-24"></div>
      <div className="pure-u-5-8 flex justify-between">
        {
          site.map(({name, link}) =>
            <div key={name} className="">
              <Link className="link near-white dib grow hover-mid-gray" to={link}>
                <div className="f4 ttu">{name}</div>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DesktopMenu;