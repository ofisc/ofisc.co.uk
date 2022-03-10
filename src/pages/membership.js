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

    <h3>Trial</h3>

    <p>
      You can start a trial for Figure Club on any Friday that is convenient for you.
      The trial is not a test, it is just a way to make sure they enjoy the club before committing.
      The 3 week trial costs £21, payable to the club bank account prior to the first session.
      Once a skater has completed their 3 week trial, should they enjoy the club, we would ask them to become a permanent member.</p>

    <h3>Ice Time</h3>

    <p>
      Figure club runs every Friday from 5.30pm to 6.30pm.
      There will be a 15 minute warm up, followed by 45 minutes of training with professional coaches.
      Socializing and practising routines is possible too.
    </p>

    <h3>Cost</h3>

    <p>
      Club membership costs £28 per month, this covers rink and coach expenses.
      Club runs most Friday's throughout the year, except Easter and Christmas.
      Siblings receive a 10% discount.
    </p>

    <h3>Own Skates</h3>

    <p>In contrast to Skate School, skaters are expected to use their own skates at Figure Club.</p>

    <h3>Membership Form</h3>

    <p>If you would like to join the club, please complete the membership form.</p>

    <Download name='Membership Form' link='/registration/OFISC Membership Form.pdf'/>

    <p>All forms are to be mailed to {email}</p>

    <h3>Parent Consent Form</h3>

    <p>If your child is under the age of 10 years old a responsible adult will need to be inside the building for the entire session, at the end of the sessions a Figure Club member will ensure all children are returned to their parent before releasing them from the rink, if your child is able to leave the rink without supervision, please complete the Parent Consent Form to enable this to happen.</p>

    <Download name='Parent Consent Form' link='/registration/OFISC Parent Consent Form.pdf'/>

    <p>
      In accordance with our NISA Safeguarding Policy, we will not permit photographs, video or other images of young people to be taken without the consent of the parents/carers and the child.
      If you are happy for the club to take photographs purely for club purposes, please complete the following consent form.
    </p>

    <Download name='Photography Consent Form' link='/registration/OFISC Photography Consent Form.pdf'/>

  </Layout>

export default Membership;