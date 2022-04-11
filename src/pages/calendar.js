import React from 'react';
import { Layout } from '../components/layout';

const url = 'https://teamup.com/ksq4je5ngoic9fo7jw?view=a&showLogo=0&showSearch=1&showProfileAndInfo=0&showSidepanel=0&showTitle=0&showViewSelector=1&showMenu=1&showAgendaHeader=0&showAgendaDetails=0&showYearViewHeader=1';

const Calendar = ()  => {
  return (
    <Layout pageTitle='Calendar' wide>
      <h1>Club Calendar</h1>

      <iframe src={url}
              className="w-100 ba b--light-gray"
              style={{height: '72rem'}}
              frameborder="0"></iframe>
    </Layout>
  );
}

export default Calendar;