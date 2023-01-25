import { JobStatus, User, UserRole, UserStatus } from '@appTypes/types';

export const usersMock: User[] = [
  {
    id: '1',
    userStatus: UserStatus.ACTIVE,
    role: UserRole.SUPERADMIN,
    createdOn: '12:00:03:05:2022',
    updatedOn: '13:00:03:05:2022',
    militaryStatus: 'active',

    personal: {
      fullName: 'Білий Сидір Гнатович',
      bloodType: '0+',
      dateOfBirths: '01.12.1988',
      mainPhoto: '/images/avatars/1.png',
      ipn: 2980622014,
      passport: {
        code: 'АР383184',
        date: '15.11.2005',
        department: 'РОУМВС міста Миколаїв',
      },
      residenceAddress: 'м. Миколаїв, вулиця Велика Морська 23, кв. 29',
    },

    contacts: {
      phones: ['38068999555', '38095999111'],
      email: 'sidirbili220@gmail.com',
      personalEmail: 'sidirbili@gmail.com',
      signalNickname: 'SidirBili',
      deltaNickname: 'Sidir220',
      address: 'м. Миколаїв, Велика Морська 1, кв. 13',
    },

    military: {
      enlistmentDate: '24.02.2022',
      enlistmentDepartment: 'Приморський РТЦК м. Одеса',
      rank: 'Полковник',
    },

    jobs: [
      {
        id: '1',
        name: 'Командир частини',
        status: JobStatus.FILLED,
        grade: 21,
        militaryProfessionCode: 2905003,
        department: {
          id: '1',
          name: 'Командування',
        },
      },
      // {
      //   id: '2',
      //   name: 'Начальник штабу',
      //   status: JobStatus.TEMPORARY_FILLED,
      //   department: {
      //     id: '1',
      //     name: 'Командування',
      //   },
      // },
    ],

    personalWeapons: [
      {
        id: '1',
        code: '88439123',
        description: '',
        name: 'АК-74',
      },
      {
        id: '2',
        code: '2241-12',
        description: '',
        name: 'ПМ',
      },
    ],

    education: [
      {
        id: '1',
        startDate: '02.09.2005',
        endDate: '25.06.2010',
        name: 'Академія військово-морських сил імені Павла Степановича Нахімова',
        description: 'Факультет судноводіння та енергетики суден',
        degree: 'Магістр',
        images: [],
      },
    ],

    training: [
      {
        id: '1',
        startDate: '04.04.2022',
        endDate: '25.04.2022',
        name: 'Корегувння артилерії безпілотниками',
        description: '',
        images: [],
      },
      {
        id: '2',
        startDate: '10.06.2022',
        endDate: '30.06.2022',
        name: 'Курси лідерства',
        description: '',
        images: [],
      },
    ],
  },

  {
    id: '2',
    userStatus: UserStatus.ACTIVE,
    role: UserRole.ADMIN,
    createdOn: '12:00:03:05:2022',
    updatedOn: '13:00:03:05:2022',
    militaryStatus: 'mission',

    personal: {
      fullName: 'Хмельницький Богдан',
      bloodType: 'А+',
      dateOfBirths: '20.07.1978',
      mainPhoto: '/images/avatars/2.jpeg',
      ipn: 3180422014,
      passport: {
        code: 'АР552321',
        date: '05.12.2000',
        department: 'РОУМВС міста Київ',
      },
      residenceAddress: 'м. Миколаїв, вулиця Велика Морська 23, кв. 29',
    },

    contacts: {
      phones: ['38068999555'],
      email: 'bohdanhmel@gmail.com',
      personalEmail: '',
      signalNickname: 'Hmel',
      deltaNickname: 'HmelDelta',
      address: 'м. Миколаїв, Велика Морська 1, кв. 13',
    },

    military: {
      enlistmentDate: '24.02.2022',
      enlistmentDepartment: 'Приморський РТЦК м. Одеса',
      rank: 'Майор',
    },

    jobs: [
      {
        id: '2',
        name: 'Заступник командира батальйону',
        status: JobStatus.FILLED,
        grade: 20,
        militaryProfessionCode: 3104022,
        department: {
          id: '1',
          name: 'Командування',
        },
      },
    ],

    personalWeapons: [
      {
        id: '1',
        code: '88439123',
        description: '',
        name: 'АК-74',
      },
      {
        id: '2',
        code: '2241-12',
        description: '',
        name: 'ПМ',
      },
    ],

    education: [
      {
        id: '1',
        startDate: '02.09.2005',
        endDate: '25.06.2010',
        name: 'Академія військово-морських сил імені Павла Степановича Нахімова',
        description: 'Факультет судноводіння та енергетики суден',
        degree: 'Магістр',
        images: [],
      },
    ],

    training: [
      {
        id: '1',
        startDate: '04.04.2022',
        endDate: '25.04.2022',
        name: 'Корегувння артилерії безпілотниками',
        description: '',
        images: [],
      },
      {
        id: '2',
        startDate: '10.06.2022',
        endDate: '30.06.2022',
        name: 'Курси лідерства',
        description: '',
        images: [],
      },
    ],
  },

  {
    id: '3',
    userStatus: UserStatus.ACTIVE,
    role: UserRole.REGULAR,
    createdOn: '12:00:03:05:2022',
    updatedOn: '13:00:03:05:2022',
    militaryStatus: 'vacation',

    personal: {
      fullName: 'Мазепа Іван',
      bloodType: 'B-',
      dateOfBirths: '14.10.1991',
      mainPhoto: '/images/avatars/3.jpeg',
      ipn: 7520422022,
      passport: {
        code: 'АР552321',
        date: '05.12.2000',
        department: 'РОУМВС міста Київ',
      },
      residenceAddress: 'м. Миколаїв, вулиця Велика Морська 23, кв. 29',
    },

    contacts: {
      phones: ['38068111245'],
      email: 'i_mazepa@gmail.com',
      personalEmail: '',
      signalNickname: 'Ivan',
      deltaNickname: 'Ivan',
      address: 'м. Миколаїв, Велика Морська 1, кв. 13',
    },

    military: {
      enlistmentDate: '24.02.2022',
      enlistmentDepartment: 'Приморський РТЦК м. Одеса',
      rank: 'Сержант',
    },

    jobs: [],

    personalWeapons: [
      {
        id: '3',
        code: '75667434534',
        description: '',
        name: 'АК-74',
      },
    ],

    education: [
      {
        id: '1',
        startDate: '02.09.2005',
        endDate: '25.06.2010',
        name: 'Академія військово-морських сил імені Павла Степановича Нахімова',
        description: 'Факультет судноводіння та енергетики суден',
        degree: 'Магістр',
        images: [],
      },
    ],

    training: [],
  },
];
