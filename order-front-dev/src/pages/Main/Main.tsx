import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import authService from '@services/auth/auth.service';

const Main = () => {
  const navigate = useNavigate();
  const isAuth = authService.isAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    } else {
      navigate('/d/users');
    }
  }, [isAuth]);
  return null;
};

export default Main;
