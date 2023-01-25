import React from 'react';
import { Outlet } from 'react-router-dom';

import AppLayout from '@layout/AppLayout/AppLayout';

const Dashboard = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default Dashboard;
