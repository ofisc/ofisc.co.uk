import React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../components/layout';

import { FaRegFilePdf } from "@react-icons/all-files/fa/FaRegFilePdf";

const email = 'club@ofisc.co.uk';
const mandate = 'https://pay.gocardless.com/AL0005G1D8K022';
const gocardless = 'https://gocardless.com/';
const dd_guarantee = 'https://gocardless.com/guides/posts/dd-guarantee-in-plain-english/';
const membership_form = 'https://airtable.com/appds0YxM7WfBSSJK/shrlsGFlsrbcEaXRG';
const unaccompanied_form = 'https://airtable.com/appds0YxM7WfBSSJK/shrVomFAMpRE2MrfY';

const forms = [
  {name: 'Parent Consent Form', link: '/registration/OFISC Parent Consent Form.pdf'},
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
    <h2>Joining The Club</h2>
    <p>
        All skaters are welcome to join once they have achieved their Skate UK bronze level.
        To join the club, please complete the membership form.
    </p>

    <p>
      <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue" href={membership_form}>Submit Membership Form</a>
    </p>

    <p>
      Once you have completed the membership form, you are free to start a 3 week trial.
      After the trial, if you want to become a full member, please register for a direct debit membership (details below).
    </p>

    <h3>Ice Time</h3>

    <p>
      Figure club runs every Friday from 5.30pm to 6.30pm.
      There will be a 15 minute warm up, followed by 30 minutes of training with professional coaches.
      Socializing and practising routines is possible too.
    </p>

    <h3>Trial Period</h3>

    <p>
      You can start a trial for Figure Club on any Friday that is convenient for you.
      The trial is not a test, it is just a way to make sure they enjoy the club before committing.
      The 3 week trial is free, but we do require you fill out the membership form so that we have your details on file prior to getting on the ice.
    </p>
    <p>
      Once a skater has completed their 3 week trial, should they enjoy the club, we would ask them to become a permanent member.
      Should you decide to join, we request you set up the direct debit to cover membership fees.
    </p>

    <h3>Cost</h3>

    <p>
      Membership from March 2023 costs £38 per month, this covers rink and coach expenses.
      The club runs most Friday's throughout the year, except Easter and Christmas.
      Siblings receive a 10% discount.
    </p>

    <h3 id="payment">Payment</h3>

    <p>
      Membership fees are due on a monthly rolling basis.
      When you join, we ask for you to set up a direct debit mandate that will be used to collect the membership fee each month.
    </p>

    <p>
      The direct debit is managed on behalf of the club by <Link className="link dim dark-blue" to={gocardless}>GoCardless</Link>.
      You are protected by the <Link className="link dim dark-blue" to={dd_guarantee}>Direct Debit Guarantee</Link>.
      Payment details are collected securely by GoCardless and they are not shared with the club.
    </p>

    <p>
      Once you have setup up the direct debit mandate, the club will contact you to arrange the most suitable day of the month for collection. 
    </p>

    <p>
      <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue" href={mandate}>Setup Direct Debit</a>
    </p>

    <h3>Unaccompanied Consent</h3>

    <p>
      If your child is under the age of 10 years old a responsible adult will need to be inside the building for the entire session.
      At the end of the sessions a Figure Club member will ensure all children are returned to their parent before releasing them from the rink.
      If your child is able to leave the rink without supervision, please complete the Parent Consent Form to enable this to happen.
    </p>

    <p>
      <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue" href={unaccompanied_form}>Provide Unaccompanied Consent</a>
    </p>

    <h3>Own Skates</h3>

    <p>In contrast to Skate School, skaters are expected to use their own skates at Figure Club.</p>

    <h3>Club Jackets</h3>

    <p>
      All members are encouraged to wear a personalized club jackets, which are available to purchase for £35.
      Please send an email specifying the desired size (the jackets use an age-based sizing scheme).
      You should also state which name you prefer to have on the front of the jacket.
    </p>

    <h3>Notice Period</h3>

    <p>
      Should you decide to leave the club, we ask you to advise us one month in advance.
      Based on when you give notice, the club will advise you of your effetive membership end date.
      Depending on the effective end membership end date, the club will pro-rate any membership fees that become due.
      This pro rata monthly fee will be collected via direct debit as the final amount to be paid to the club.
    </p>


  </Layout>

export default Membership;