import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Button, PageHeader, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

import { Department, JobStatus } from '@appTypes/types';

import { departmentsMock } from '@services/mocks/departments.mock';

type DepartmentsProps = {};

const Departments = ({}: DepartmentsProps) => {
  const departments = departmentsMock;

  const columns: ColumnsType<Department> = [
    {
      title: 'Назва',
      key: 'id',
      render: (item: Department) => {
        const href = `/d/departments/${item.id}`;
        return <NavLink to={href}>{item.name}</NavLink>;
      },
    },
    {
      title: 'Підпорядковується',
      render: (item: Department) => {
        if (!item.parent) return '';

        const href = `/d/departments/${item.parent.id}`;
        return (
          <NavLink to={href} className="text-gray-7">
            {item.parent?.name}
          </NavLink>
        );
      },
    },

    {
      title: 'Начальник',
      render: (item: Department) => {
        const bossJob = item.jobs.find((job) => job.isBoss);
        if (!bossJob) return <span className="text-gray-7">Визачте посаду начальника</span>;

        if (bossJob.status === JobStatus.FREE)
          return (
            <div className="flex flex-col">
              <span className="flex items-center gap-1">
                <UserOutlined className="text-gray-7 !important" />
                <span className="text-gray-7">Посада вакантна</span>
              </span>
              <span className="flex items-center gap-1">
                <ProfileOutlined className="text-gray-7 !important" />
                <NavLink to={`/d/jobs/${bossJob.id}`}>{bossJob.name}</NavLink>
              </span>
            </div>
          );

        const userHref = `/d/users/${bossJob.user?.id}`;

        return (
          <div className="flex flex-col">
            <span className="flex items-center gap-1">
              <UserOutlined className="text-gray-7 !important" />
              <NavLink to={userHref}>{bossJob.user?.fullName}</NavLink>
            </span>

            <span className="flex items-center gap-1">
              <ProfileOutlined className="text-gray-7 !important" />
              <NavLink to={`/d/jobs/${bossJob.id}`}>{bossJob.name}</NavLink>
            </span>
          </div>
        );
      },
    },

    {
      title: 'ТВО',
      render: (item: Department) => {
        return <span className="text-gray-7">Відсутний</span>;
      },
    },

    {
      title: (
        <span>
          Кількість о/с: <br />
          <span className="font-normal">
            всього <span className="text-gray-7">(за штатом)</span>
          </span>
        </span>
      ),
      render: (item: Department) => {
        const count = item.jobs.reduce(
          (acc, job) => {
            if (job.status !== JobStatus.FREE) {
              acc.all++;
            }
            acc.job++;
            return acc;
          },
          {
            job: 0,
            all: 0,
          }
        );
        return (
          <div className="flex gap-0.5">
            <div>{count.all}</div>
            <div className="text-gray-7">({count.job})</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="">
      <PageHeader
        backIcon={false}
        title="Підрозділи"
        extra={[
          <Button key="1" type="primary" href="/d/departments/add">
            Додати підрозділ
          </Button>,
        ]}
      />
      <Table<Department>
        rowKey="id"
        dataSource={departments}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default Departments;
