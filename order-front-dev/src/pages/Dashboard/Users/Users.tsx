import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, PageHeader, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

import { User } from '@appTypes/types';

import { usersMock } from '@services/mocks/users.mock';

import MilitaryUserStatusSelect from '@components/UserStatus/UserStatus';

type UsersProps = {};

const Users = ({}: UsersProps) => {
  const users = usersMock;
  const columns: ColumnsType<User> = [
    {
      title: 'Військовослужбовець',
      key: 'id',
      render: (user: User) => {
        const href = `/d/users/${user.id}`;
        return (
          <div className="flex gap-4">
            <div className="flex shrink-0 w-12 h-16 rounded-lg overflow-hidden">
              <img alt="Фото" className="w-full object-cover" src={user.personal.mainPhoto} />
            </div>
            <div>
              <NavLink to={href}>{user.personal.fullName}</NavLink>
              <div>{user.military.rank}</div>
            </div>
          </div>
        );
      },
    },

    {
      title: 'Підрозділ та посада',
      render: (user: User) => {
        if (user.jobs.length === 0) {
          return <span className="text-gray-7">Без підрозділа</span>;
        }
        return (
          <div>
            {user.jobs.map((job) => (
              <div key={job.id} className="flex flex-col">
                <NavLink to={`/d/departments/${job.department.id}`}>{job.department.name}</NavLink>
                <NavLink to={`/d/jobs/${job.id}`}>{job.name}</NavLink>
              </div>
            ))}
          </div>
        );
      },
    },

    {
      title: 'Телефон',
      render: (user: User) => (
        <div className="flex flex-col">
          {user.contacts.phones.map((phone, idx) => (
            <span key={phone + idx}>+{phone}</span>
          ))}
        </div>
      ),
    },

    {
      title: 'Email',
      render: (user: User) => <a href={`mailto:${user.contacts.email}`}>{user.contacts.email}</a>,
    },

    {
      title: 'Signal',
      render: (user: User) => user.contacts.signalNickname,
    },

    // {
    //   title: 'Статус користувач',
    //   render: (userStatus: User['userStatus']) => {
    //     if (userStatus === UserStatus.ACTIVE) {
    //       return <Tag color="green">{userStatus}</Tag>;
    //     }
    //     if (userStatus === UserStatus.INACTIVE) {
    //       return <Tag color="default">{userStatus}</Tag>;
    //     }
    //   },
    // },

    {
      title: 'Статус військовослужбовця',
      render: (user: User) => {
        const handleChangeStatus = (status: string) => {
          console.log(status);
        };

        return (
          <MilitaryUserStatusSelect
            selectedStatus={user.militaryStatus}
            onChange={handleChangeStatus}
          />
        );
      },
    },
  ];

  return (
    <div className="">
      <PageHeader
        backIcon={false}
        title="Особовий склад"
        extra={[
          <Button key="1" type="primary" href="/d/users/add">
            Додати військовослужбовця
          </Button>,
        ]}
      />
      <Table<User> rowKey="id" dataSource={users} columns={columns} pagination={false} />
    </div>
  );
};

export default Users;
