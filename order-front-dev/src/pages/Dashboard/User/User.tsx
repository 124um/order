import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Descriptions, Empty, Tabs, Typography } from 'antd';

import { JobStatus, UserJob } from '@appTypes/types';

import { usersMock } from '@services/mocks/users.mock';

import Card from '@components/Card/Card';
import MilitaryUserStatusSelect from '@components/UserStatus/UserStatus';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const UserComponent = () => {
  const { id } = useParams();

  const user = usersMock.find((u) => u.id === id);

  if (!user) return <div />;

  let mainJob: UserJob | null = null;
  let otherJobs: UserJob[] = [];
  if (user.jobs.length > 0) {
    mainJob = user.jobs.find((j) => j.status === JobStatus.FILLED) || null;
    otherJobs = user.jobs.filter((j) => j.status !== JobStatus.FILLED);
  }

  const handleChangeTab = (key: string) => {
    console.log(key);
  };

  const handleChangeStatus = (status: string) => {
    console.log(status);
  };

  return (
    <div className="flex flex-col gap-4 max-w-256">
      <div className="flex gap-4">
        {user.personal.mainPhoto && (
          <div className="flex shrink-0 w-30 h-40 rounded-lg overflow-hidden drop-shadow-md">
            <img alt="Фото" className="w-full object-cover" src={user.personal.mainPhoto} />
          </div>
        )}

        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between mb-1">
            <Title className="m-0" level={2}>
              {user.personal.fullName}
            </Title>

            <MilitaryUserStatusSelect
              selectedStatus={user.militaryStatus}
              width={280}
              onChange={handleChangeStatus}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Text strong>{user.military.rank}</Text>
              {mainJob && (
                <>
                  <NavLink to={`/d/departments/${mainJob.department.id}`}>
                    {mainJob.department.name}
                  </NavLink>
                  <NavLink to={`/d/jobs/${mainJob.id}`}>{mainJob.name}</NavLink>
                </>
              )}
            </div>
            {otherJobs.length > 0 && (
              <div>
                {otherJobs.map((j) => (
                  <div key={j.id}>
                    <Text> ТВО</Text>
                    <Text type="secondary"> {j.department.name}</Text>
                    <Text type="secondary"> • {j.name}</Text>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <div className="flex shrink-0 max-w-55">
          <Card title="Контакти">
            <div className="flex flex-col gap-1">
              {user.contacts.phones.map((phone, idx) => (
                <div className="flex gap-3 items-center" key={phone + idx}>
                  <PhoneOutlined />
                  <span>+{phone}</span>
                </div>
              ))}
              <div className="flex gap-3 items-center">
                <MailOutlined />
                <a href={`mailto:${user.contacts.email}`}>{user.contacts.email}</a>
              </div>
              <div className="flex gap-3 items-top">
                <HomeOutlined className="mt-1" />
                <span>{user.contacts.address}</span>
              </div>
              <div className="flex gap-3 items-center">
                <b>Signal</b>
                <span>{user.contacts.signalNickname}</span>
              </div>
              <div className="flex gap-3 items-center">
                <b>Delta</b>
                <span>{user.contacts.deltaNickname}</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-1">
          <Tabs defaultActiveKey="1" className="w-full" onChange={handleChangeTab}>
            <TabPane tab="Персональна інформація" key="1">
              <div className="flex flex-col gap-4">
                <Card title="Дані громадянина">
                  <Descriptions column={1} size="small">
                    <Descriptions.Item label="ПІБ">{user.personal.fullName}</Descriptions.Item>
                    <Descriptions.Item label="РНОКПП (ІПН)">{user.personal.ipn}</Descriptions.Item>
                    <Descriptions.Item label="Паспорт">
                      {user.personal.passport.code}, виданий {user.personal.passport.department}{' '}
                      {user.personal.passport.date}
                    </Descriptions.Item>
                    <Descriptions.Item label="Дата народження">
                      {user.personal.dateOfBirths}
                    </Descriptions.Item>
                    <Descriptions.Item label="Адреса реєстрації">
                      {user.personal.residenceAddress}
                    </Descriptions.Item>
                    <Descriptions.Item label="Група крові">
                      {user.personal.bloodType}
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </div>
            </TabPane>
            <TabPane tab="Освіта" key="2">
              <div className="flex flex-col gap-4">
                <Card title="Освіта">
                  <div className="flex flex-col gap-2">
                    {user.education.map((ed) => (
                      <div key={ed.id} className="flex flex-col gap-0">
                        <b>{ed.name}</b>
                        <span>{ed.description}</span>
                        <span>{ed.degree}</span>
                        <div className="text-gray-7">
                          <span>{ed.startDate} - </span>
                          <span>{ed.startDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card title="Курси та сертіфікати">
                  <div className="flex flex-col gap-2">
                    {user.training.map((ed) => (
                      <div key={ed.id} className="flex flex-col gap-0">
                        <b>{ed.name}</b>
                        <span>{ed.description}</span>
                        <div className="text-gray-7">
                          <span>{ed.startDate} - </span>
                          <span>{ed.startDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabPane>
            <TabPane tab="Служба" key="3">
              <div className="flex flex-col gap-4">
                <Card className="flex flex-col" title="Посада">
                  <Descriptions column={1} size="small">
                    <Descriptions.Item label="Військове звання">
                      {user.military.rank}
                    </Descriptions.Item>
                    {mainJob && (
                      <>
                        <Descriptions.Item label="Підрозділ">
                          <NavLink to={`/d/departments/${mainJob.department.id}`}>
                            {mainJob.department.name}
                          </NavLink>
                        </Descriptions.Item>
                        <Descriptions.Item label="Посада">
                          <NavLink to={`/d/jobs/${mainJob.id}`}>{mainJob.name}</NavLink>
                        </Descriptions.Item>
                        <Descriptions.Item label="ВОС">
                          {mainJob.militaryProfessionCode}
                        </Descriptions.Item>
                        <Descriptions.Item label="Тарифний розряд">
                          {mainJob.grade}
                        </Descriptions.Item>
                      </>
                    )}
                  </Descriptions>
                </Card>

                <Card className="flex flex-col" title="Призов">
                  <Descriptions column={1} size="small">
                    <Descriptions.Item label="Призваний">
                      {user.military.enlistmentDepartment} {user.military.enlistmentDate}
                    </Descriptions.Item>
                  </Descriptions>
                </Card>

                <Card className="flex flex-col" title="Попереднє проходження служби">
                  <Empty description="Немає даних" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </Card>
              </div>
            </TabPane>
            <TabPane tab="Майно" key="4">
              <div className="flex flex-col gap-4">
                <Card className="flex flex-col" title="Персональна зброя">
                  <Descriptions column={1} size="small">
                    {user.personalWeapons.map((pw) => (
                      <Descriptions.Item key={pw.id} label={pw.name}>
                        {pw.code}
                        {pw.description && <span>({pw.description})</span>}
                      </Descriptions.Item>
                    ))}
                  </Descriptions>
                </Card>
              </div>
            </TabPane>
            <TabPane tab="Медичні дані" key="5">
              <Card>
                <Empty description="Немає даних" image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </Card>
            </TabPane>
            <TabPane tab="Документи" key="6">
              <Card>
                <Empty description="Немає даних" image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </Card>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
