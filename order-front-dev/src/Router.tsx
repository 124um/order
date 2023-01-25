import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import authService from '@services/auth/auth.service';

import Dashboard from '@pages/Dashboard/Dashboard';
import Department from '@pages/Dashboard/Department/Department';
import Departments from '@pages/Dashboard/Departments/Departments';
import Jobs from '@pages/Dashboard/Jobs/Jobs';
import User from '@pages/Dashboard/User/User';
import Users from '@pages/Dashboard/Users/Users';
import Main from '@pages/Main/Main';
import NotFound from '@pages/NotFound/NotFound';
import SignIn from '@pages/SignIn/SignIn';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="d" element={<Dashboard />}>
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<User />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:id" element={<Department />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="*" element={<NotFound to="/app" />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
