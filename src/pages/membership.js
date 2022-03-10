import React from 'react';

import { Layout } from '../components/layout';

import { FaRegFilePdf } from "@react-icons/all-files/fa/FaRegFilePdf";

const email = 'oxfordfisc@gmail.com';

const forms = [
  {name: 'Membership Form', link: '/registration/OFISC Membership Form.pdf'},
  {name: 'Parent Consent Form', link: '/registration/OFISC Parent Consent Form.pdf'},
  {name: 'Photography Consent Form', link: '/registration/OFISC Photography Consent Form.pdf'},
];

const Download = ({name, link}) =>
  <div className="pb4">
    <a className="link near-black dib grow hover-mid-gray" href={link} target="_blank" rel="noreferrer">
      <div className="pl2 flex items-center">
        <FaRegFilePdf size="1.5em" />
        <div className="pl2">{name}</div>
      </div>
    </a>
  </div>

const Membership = () =>
  <Layout pageTitle='Membership'>
    <h1>Membership</h1>
    <h2>Become a Member</h2>
    <p>
        All Skaters taking classes at the Oxford Ice rink are welcome to join once they have achieved their Skate UK bronze level.
    </p>

    <p>If you would like to join the club, please complete the membership form.</p>

    <Download name='Membership Form' link='/registration/OFISC Membership Form.pdf'/>

    <p>All children aged 10 or below must be accompanied by a parent/guardian. Children aged 11 or above may go home on their own only if the parent/guardian has given written consent by completing the parent consent form.</p>

    <Download name='Parent Consent Form' link='/registration/OFISC Parent Consent Form.pdf'/>

    <p>
      In accordance with our NISA Safeguarding Policy, we will not permit photographs, video or other images of young people to be taken without the consent of the parents/carers and the child.
      If you are happy for the club to take photographs purely for club purposes, please complete the following consent form.
    </p>

    <Download name='Photography Consent Form' link='/registration/OFISC Photography Consent Form.pdf'/>

    <p>All forms are to be mailed to {email}</p>
  </Layout>

export default Membership;