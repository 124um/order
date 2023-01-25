import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Empty, PageHeader, Tabs } from 'antd';

import { departmentsMock } from '@services/mocks/departments.mock';

import DepartmentJob from '@pages/Dashboard/Department/DepartmetnJob/DepartmentJob';

import Card from '@components/Card/Card';

const { TabPane } = Tabs;

const DepartmentComponent = () => {
  const { id } = useParams();

  const department = departmentsMock.find((u) => u.id === id);

  if (!department) return <div />;

  const parentTitle = department.parent ? (
    <span>
      Підпорядковується{' '}
      <NavLink to={`/d/departments/${department.parent.id}`}>{department.parent.name}</NavLink>
    </span>
  ) : (
    ''
  );

  return (
    <div className="flex flex-col gap-4 max-w-256">
      <PageHeader backIcon={false} title={department.name} subTitle={parentTitle} />
      <Tabs defaultActiveKey="1" className="w-full">
        <TabPane tab="Посади" key="1">
          <div className="flex flex-col gap-4">
            <Card>
              {department.jobs.length > 0 ? (
                <div className="flex flex-col gap-8 items-start">
                  <div className="flex flex-col gap-6">
                    {department.jobs.map((dj) => (
                      <DepartmentJob key={dj.id} job={dj} />
                    ))}
                  </div>
                  <Button type="primary" href="/d/departments/add">
                    Додати посаду
                  </Button>
                </div>
              ) : (
                <Empty description="Немає посад" image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </Card>
          </div>
        </TabPane>
        <TabPane tab="Особовий склад" key="2">
          <div className="flex flex-col gap-4">
            <Card>
              <Empty
                description="Військовослужбовці відсутні"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            </Card>
          </div>
        </TabPane>
        <TabPane tab="Служби" key="3">
          <div className="flex flex-col gap-4">
            <Card>
              <Empty description="Немає служб" image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Card>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DepartmentComponent;
