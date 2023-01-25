import React from 'react';
import { Select } from 'antd';

import { MilitaryStatus } from '@appTypes/types';

type MilitaryUserStatusSelectProps = {
  selectedStatus: MilitaryStatus;
  onChange: (value: MilitaryStatus) => void;
  width?: number;
};

const options = [
  { value: 'active', name: 'у строю' },
  { value: 'vacation', name: 'у відпустці' },
  { value: 'dutyIn', name: 'у наряді в межах частини' },
  { value: 'dutyOut', name: 'наряд поза частиною' },
  { value: 'mission', name: 'у відрядженні' },
  { value: 'sickWithoutTraining', name: 'звільнено від занять за хворобою' },
  { value: 'sickInHospital', name: 'хворий в госпіталі' },
  { value: 'sickInUnit', name: 'хворий у лазареті частини' },
];

const MilitaryUserStatusSelect = ({
  selectedStatus,
  onChange,
  width = 200,
}: MilitaryUserStatusSelectProps) => {
  return (
    <Select defaultValue={selectedStatus} style={{ width }} onChange={onChange}>
      {options.map((option, idx) => (
        <Select.Option key={idx} value={option.value}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default MilitaryUserStatusSelect;
