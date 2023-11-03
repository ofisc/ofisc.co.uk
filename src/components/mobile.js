import React,  { useState } from 'react';

import { Cross as Hamburger } from 'hamburger-react';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'gatsby';

import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import '../css/prime-override.css';

import Logo from '../pages/svg/ofisc_logo_v2.svg';
import { site } from './site';

const MobileMenu = props => {

  const [visible, setVisible] = useState(false);

  return (
    <div>

      <div className="pv1 pure-g bg-blue near-white" style={{height: '4em'}}>
        <div className="pure-u-1-24"></div>
        <div className="pure-u-1-4">
          <Link to={'/'}>
            <Logo className="w4" fill="white"/>
          </Link>
        </div>
        <div className="pure-u-2-3 flex flex-column items-end">
          <Hamburger direction='right' toggled={visible} toggle={setVisible} />
        </div>
        <div className="pure-u-1-24"></div>
      </div>

      <Sidebar visible={visible}
        position="right"
        showCloseIcon={false}
        blockScroll={true}
        onHide={() => setVisible(false)}>
        <div className="near-white">
            {
              site.map(({name, link}) =>
                <div key={name} className="pv2">
                  <Link className="link near-white dib grow hover-mid-gray" to={link}>
                    <div className="f4 ttu">{name}</div>
                  </Link>
                </div>
              )
            }
        </div>
      </Sidebar>

    </div>

  );
}

export default MobileMenu;