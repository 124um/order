import React from 'react';
import { Button, PageHeader } from 'antd';

import Card from '@components/Card/Card';

const Reports = () => {
  return (
    <div className="">
      <PageHeader backIcon={false} title="Звіти" />
      <Card title="Звіт наявності особового складу">
        <img src="/images/personnel_list.png" alt="Звіт" />
      </Card>
    </div>
  );
};

export default Reports;
