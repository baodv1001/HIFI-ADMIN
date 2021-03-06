import { useAppDispatch } from '@/redux/hooks';
import { logoutUser } from '@/redux/slices/authSlices';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const Content = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('accessToken');
    navigate('login');
  };

  const editProfile = () => {
    navigate('/profile');
  };

  const contents = [
    {
      key: '1',
      icon: <EditOutlined />,
      content: 'Edit Profile',
      onClick: editProfile,
    },
    {
      key: '2',
      icon: <LogoutOutlined />,
      content: 'Log Out',
      onClick: handleLogout,
    },
  ];
  const renderMenu = () => {
    return contents.map((content) => {
      return (
        <Menu.Item
          style={{ padding: '0', fontSize: '14px' }}
          key={content.key}
          onClick={content.onClick}
          icon={content.icon}
        >
          {content.content}
        </Menu.Item>
      );
    });
  };
  const menuRendered = renderMenu();
  return (
    <div>
      <Menu style={{ width: 180 }}>{menuRendered}</Menu>
    </div>
  );
};

export default Content;
