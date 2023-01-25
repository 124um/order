import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import authService from '@services/auth/auth.service';

import AppLayoutMain from '@layout/AppLayout/AppLayoutMain/AppLayoutMain';
import AppLayoutSidebar from '@layout/AppLayout/AppLayoutSidebar/AppLayoutSidebar';

type AppLayoutProps = {} & React.ComponentProps<'div'>;

const AppLayout = ({ children, className }: AppLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const isAuth = authService.isAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    } else {
      setIsLoading(false);
    }
  }, [isAuth]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const classes = clsx('flex w-full bg-gray-3', className);

  const handleSidebarMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) return <div />;

  return (
    <div className={classes}>
      <AppLayoutSidebar isOpen={isSidebarOpen} onSidebarMenuClick={handleSidebarMenuClick} />
      <AppLayoutMain isSidebarOpen={isSidebarOpen}>{children}</AppLayoutMain>
    </div>
  );
};

export default AppLayout;
