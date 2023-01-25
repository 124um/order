import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Menu, Tooltip } from 'antd';
import clsx from 'clsx';

import authService from '@services/auth/auth.service';

import useAppLayoutSidebar from '@layout/AppLayout/AppLayoutSidebar/useAppLayoutSidebar';

type AppLayoutSidebarProps = {
  isOpen: boolean;
  onSidebarMenuClick: () => void;
} & React.ComponentProps<'nav'>;

const AppLayoutSidebar = ({ isOpen, onSidebarMenuClick, className }: AppLayoutSidebarProps) => {
  const navigate = useNavigate();

  const closeSidebar = () => {
    if (isOpen) {
      onSidebarMenuClick();
    }
  };

  const { selectedMenuItem, items } = useAppLayoutSidebar(closeSidebar);

  const classes = clsx(
    'fixed flex flex-col z-40 h-full  pr-1 flex-shrink-0 bg-gray-11 text-white',
    isOpen ? 'w-48' : 'w-16',
    className
  );

  const handleLogoutClick = () => {
    authService.logOut();
    navigate('/sign-in');
  };

  return (
    <div className={classes}>
      <div className="flex px-4 py-2">
        <Button
          shape="circle"
          type="text"
          icon={<MenuOutlined className="text-gray-1 !important" />}
          onClick={onSidebarMenuClick}
        />
      </div>
      <nav className="flex-1 overflow-auto scrollbar">
        <Menu defaultSelectedKeys={[selectedMenuItem]} mode="inline" theme="dark" items={items} />
      </nav>
      <div className="flex px-4 py-2 mt-auto">
        <Tooltip placement="right" title="Вийти із системи">
          <Button
            shape="circle"
            type="text"
            icon={<LogoutOutlined className="text-gray-1 !important" />}
            onClick={handleLogoutClick}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default AppLayoutSidebar;
