import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, PageHeader, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

import { DepartmentJob } from '@appTypes/types';

import { jobsMock } from '@services/mocks/jobs.mock';

const Jobs = () => {
  const jobs = jobsMock;

  const columns: ColumnsType<DepartmentJob> = [
    {
      title: 'Назва',
      key: 'id',
      render: (item: DepartmentJob) => {
        const href = `/d/jobs/${item.id}`;
        return <NavLink to={href}>{item.name}</NavLink>;
      },
    },

    {
      title: 'Підрозділ',
      render: (item: DepartmentJob) => {
        const href = `/d/departments/${item.department.id}`;
        return <NavLink to={href}>{item.department.name}</NavLink>;
      },
    },

    {
      title: 'Військове звання посади',
      dataIndex: 'rank',
    },

    {
      title: 'Посада начальника',
      render: (item: DepartmentJob) => {
        return item.isBoss ? 'Так' : 'Ні';
      },
    },

    {
      title: 'Військовослужбовець',
      render: (item: DepartmentJob) => {
        if (!item.user) return <span className="text-gray-7">Вакантна</span>;
        const href = `/d/users/${item.user.id}`;
        return (
          <div className="flex flex-col">
            <NavLink to={href}>{item.user.fullName}</NavLink>
            <span className="text-gray-7">{item.user.rank}</span>
          </div>
        );
      },
    },

    {
      title: 'ВОС',
      dataIndex: 'militaryProfessionCode',
    },

    {
      title: 'Тарифний розряд',
      dataIndex: 'grade',
    },
  ];

  return (
    <div className="">
      <PageHeader
        backIcon={false}
        title="Посади"
        extra={[
          <Button key="1" type="primary" href="/d/jobs/add">
            Додати посаду
          </Button>,
        ]}
      />
      <Table<DepartmentJob> rowKey="id" dataSource={jobs} columns={columns} pagination={false} />
    </div>
  );
};

export default Jobs;
