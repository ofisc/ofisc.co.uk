import React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../components/layout';

import { FaRegFilePdf } from "@react-icons/all-files/fa/FaRegFilePdf";

import { safeguarding } from '../components/site';

const committee = [
  {role: 'Treasurer', name: 'TBC'},
  {role: 'Secretary', name: 'Debbie Aston'},
  {role: 'Safeguarding Officer', name: 'Claire Beveridge'},
  {role: 'Competition Secretary', name: 'Theresa Harper'},
  {role: 'Chair', name: 'Ben Hood'},
];

const policies = [
  {name: 'Anti-bullying Policy', link: '/policy/OFISC Anti-bullying Policy.pdf'},
  {name: 'Code Of Conduct', link: '/policy/OFISC-Code-Of-Conduct.pdf'},
  {name: 'Parents Code Of Conduct', link: '/policy/OFISC-Parents-code-of-conduct.pdf'},
  {name: 'OFISC Constitution', link: '/policy/OFISCConstitution-December2015.pdf'},
];

const Club = () =>
  <Layout pageTitle='Club'>
    <h1>About Figure Club</h1>
    <div>Club ice is every Friday from 5:30 - 6:30 pm at the Oxford Ice Rink.</div>

    <div>
      <h2>Safeguarding</h2>
      <div>All information about safeguarding policies and procedures is available on our</div>
      <Link className="dim" to={safeguarding.link}>safeguarding page</Link>
    </div>

    <div>
      <h2>Club Committee</h2>
      <div>
        {
          committee.map(({ name, role }) =>
            <div className="pure-g shadow-5 pl1 pv3">
              <div className="pure-u-1-2 pure-u-md-5-12 ba b--light-gray">{role}</div>
              <div className="pure-u-1-2 pure-u-md-7-12 ba b--light-gray">{name}</div>
            </div>
          )
        }
      </div>
    </div>
    <div>
      <h2>Policies</h2>
      <div>
        {
          policies.map(({ name, link }) =>
            <div className="shadow-5 pl1 pv3">
              <a className="link near-black dib grow hover-mid-gray" href={link} target="_blank" rel="noreferrer">
                <div className="pl2 flex items-center">
                  <FaRegFilePdf size="1.5em"/>
                  <div className="pl2">{name}</div>
                </div>
              </a>
            </div>
          )
        }
      </div>
    </div>

  </Layout>

export default Club;