import React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../components/layout';

import { FaRegFilePdf } from "@react-icons/all-files/fa/FaRegFilePdf";

const BISPolicy = '/';

const policyD = (link, name) =>
  <a className="link near-black dib grow hover-mid-gray" href={link} target="_blank" rel="noreferrer">
    <div className="pl2 flex items-center">
      <FaRegFilePdf size="1.5em" />
      <div className="pl2">{name}</div>
    </div>
  </a>


const policies = [
  {name: 'BIS Safeguarding Policy', link: '/policy/BIS-Safeguarding-Policy.pdf'},
  {name: 'OFISC Safeguarding Information For Members', link: '/policy/OFISC-Safeguarding-Information-for-Members.pdf'}
];

const Safeguarding = () =>
  <Layout pageTitle='Safeguarding'>
    <h1>Safeguarding</h1>
    
    <p>Figure Club is committed to providing a safe and enjoyable environment for children and young adults, both on and off the ice. It abides by British Ice Skating’s most recently published Safeguarding policies,
      which you can view in the policy section below.</p>

    <p>Safeguard information for children and young adults can also be accessed from the policy section.</p>

    <p>If you have any queries relating to safeguarding, please contact Claire Beveridge (OFISC’s Safeguarding Officer) by sending an email to safe@ofisc.co.uk</p>

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

export default Safeguarding;