import React from 'react';
import { NavLink } from 'react-router-dom';
import { EditFilled } from '@ant-design/icons';
import { Button } from 'antd';

import { DepartmentJob as DepartmentJobType } from '@appTypes/types';

type DepartmentJobProps = {
  job: DepartmentJobType;
};

const DepartmentJob = ({ job }: DepartmentJobProps) => {
  return (
    <div className="">
      <div className="flex items-center gap-1">
        <span className="font-bold">{job.name}</span>
        <NavLink to={`/d/jobs/${job.id}`}>
          <EditFilled title="Редагувати" className="text-gray-7" />
        </NavLink>
      </div>
      {job.user ? (
        <div className="flex flex-col">
          <NavLink to={`/d/users/${job.user.id}`}>{job.user.fullName}</NavLink>
          <span className="text-gray-7">{job.user.rank}</span>
        </div>
      ) : (
        <div className="text-gray-7">
          <Button type="dashed" className="mt-1.5">
            Назначити
          </Button>
        </div>
      )}
    </div>
  );
};

export default DepartmentJob;
