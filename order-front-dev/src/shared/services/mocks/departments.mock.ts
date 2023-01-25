import { Department } from '@appTypes/types';

import { jobsMock } from '@services/mocks/jobs.mock';

export const departmentsMock: Department[] = [
  {
    id: '1',
    name: 'Командування',
    description: '',
    parent: null,
    createdOn: '12:00:03:05:2022',
    updatedOn: '13:00:03:05:2022',
    jobs: jobsMock.filter((job) => job.department.id === '1'),
  },
  {
    id: '2',
    name: 'Штаб',
    description: '',
    parent: {
      id: '1',
      name: 'Командування',
    },
    createdOn: '12:00:03:05:2022',
    updatedOn: '13:00:03:05:2022',
    jobs: jobsMock.filter((job) => job.department.id === '2'),
  },
];
