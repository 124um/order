import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ApartmentOutlined,
  HddOutlined,
  ProfileOutlined,
  SettingOutlined,
  TableOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const useAppLayoutSidebar = (closeSidebar: () => void) => {
  const navigate = useNavigate();

  function getItem(
    label: React.ReactNode,
    link: string,
    icon: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    const onClick = () => {
      closeSidebar();
      navigate(link);
    };

    return {
      key: link,
      icon,
      label,
      children,
      onClick,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Підрозділи', '/d/departments', <ApartmentOutlined />),
    getItem('Особовий склад', '/d/users', <TeamOutlined />),
    getItem('Посади', '/d/jobs', <ProfileOutlined />),
    getItem('Служби', '/d/services', <HddOutlined />),
    getItem('Звіти', '/d/reports', <TableOutlined />),
    getItem('Налаштування', '/d/settings', <SettingOutlined />),
  ];

  // TODO: add match between menu item and page
  // const selectedMenuItem = (items.find((item) => item?.key === router.pathname)?.key ||
  //   '') as string;
  const selectedMenuItem = '';

  return {
    items,
    selectedMenuItem,
  };
};

export default useAppLayoutSidebar;
