/* eslint-disable camelcase, @typescript-eslint/ban-types */
/**
 * The Address managing API
 */
export interface Address {
  /**
   * The generate id of the Address
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The Address city
   * @example Odesa
   */
  city: 'Odesa' | 'Kherson';

  /**
   * The Address address_line_1
   * @example Portovaia 4
   */
  addressLine1: 'Portovaia 4';

  /**
   * The Address address_line_2
   * @example Kulichkina 22
   */
  addressLine2: 'Kulichkina 22 app 4';

  /**
   * The Address zip
   * @example 81600
   */
  zip: '81600' | '65000';
}

/**
 * The BloodType managing API
 */
export interface BloodType {
  /**
   * The id of the BloodType
   * @example 1
   */
  id?: 1 | 2 | 4;

  /**
   * The BloodType group
   * @example AB
   */
  bloodGroup: 'A' | 'B' | 'AB';

  /**
   * The BloodType rhd
   * @example +
   */
  rhd: '-' | '+';
}

/**
 * The Contact managing API
 */
export interface Contact {
  /**
   * The user id
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  userId: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The user phone
   * @example +38098444567
   */
  phone: string;

  /**
   * The user email
   * @example popodolak@email.com
   */
  email: string;

  /**
   * The user nickname
   * @example Dohlii
   */
  nickname: string;

  /**
   * The user address id
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  addressId: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The user some description
   * @example У єтого юзера очень большие уши, он далеко слишит
   */
  customDescription: string;
}

/**
 * The Degrees managing API
 */
export interface Degrees {
  /**
   * The auto-generated id of the Degrees
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The Degrees city
   * @example Bakalavry
   */
  name: string;
}

/**
 * The Education managing API
 */
export interface Education {
  /**
   * The auto-generated id of the Education
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The userId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  userId: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The facultyId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  facultyId: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The typeId
   * @example College
   */
  typeId: 'College' | 'Training';

  /**
   * The startDate
   * @example 2018-09-01
   */
  startDate: string;

  /**
   * The endDate
   * @example 2022-09-01
   */
  endDate: string;

  /**
   * The degreeId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  degreeId: '0f51a1bc-1196-11ed-861d-0242ac120002' | '1dd00904-1196-11ed-861d-0242ac120002';

  /**
   * The images
   * @example ["fhfhfh-sdfdedsf-dvcxve-cvcvcv","0f51a1bc-1196-11ed-861d-0242ac120002","1dd00904-1196-11ed-861d-0242ac120002 "]
   */
  images: string;
}

/**
 * The EducationType managing API
 */
export interface EducationType {
  /**
   * The EducationType key
   * @example COLLEGE
   */
  key?: 'COLLEGE' | 'TRAINING';

  /**
   * The EducationType value
   * @example College
   */
  value: 'College' | 'Training';
}

/**
 * The Faculties managing API
 */
export interface Faculties {
  /**
   * The auto-generated id of the Faculties
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: string;

  /**
   * The Faculties schoolId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  schoolId: string;

  /**
   * The Faculties name
   * @example Mechnikova
   */
  name: string;
}

/**
 * The Job managing API
 */
export interface Job {
  /**
   * The auto-generated id of the Job
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: string;

  /**
   * The name
   * @example Work workowvich
   */
  name: string;

  /**
   * The statusId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  statusId: string;

  /**
   * The grade
   * @example 22
   */
  grade: number;

  /**
   * The typeId
   * @example 2344432
   */
  militaryProfessionCode: number;
}

/**
 * The JobStatus managing API
 */
export interface JobStatus {
  /**
   * The JobStatus key
   * @example RESERVED
   */
  key?: 'RESERVED' | 'FILLED' | 'TEMPORARY_FILLED' | 'FREE';

  /**
   * The JobStatus value
   * @example Reserved
   */
  value: 'Reserved' | 'Filled' | 'TemporaryFilled' | 'Free';
}

/**
 * The Department managing API
 */
export interface Department {
  /**
   * The auto-generated id of the Department
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: string;

  /**
   * The name
   * @example MVD
   */
  name: string;

  /**
   * The addressId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  addressId: string;
}

/**
 * The Passport managing API
 */
export interface Passport {
  /**
   * The user id
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  userId: string;

  /**
   * The number
   * @example MK444959596
   */
  number: string;

  /**
   * The dateIssued
   * @example 15.11.2005
   */
  dateIssued: string;

  /**
   * The dateValid
   * @example 15.11.2005
   */
  dateValid: string;

  /**
   * The issuedBy
   * @example issuedBy
   */
  issuedBy: string;

  /**
   * The registeredAddressId id
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  registeredAddressId: string;
}

/**
 * The PersonalWeapon managing API
 */
export interface PersonalWeapon {
  /**
   * The auto-generated id of the PersonalWeapon
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: string;

  /**
   * The userId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  userId: string;

  /**
   * The name
   * @example Jovelik
   */
  name: string;

  /**
   * The description
   * @example Jovelik bubuh
   */
  description: string;

  /**
   * The code
   * @example 232
   */
  code: number;
}

/**
 * The Personnel managing API
 */
export interface Personnel {
  /**
   * The Personnel userId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  userId: string;

  /**
   * The Personnel fullName
   * @example Perec Ivanovich
   */
  fullName: string;

  /**
   * The bloodTypeId
   * @example 1
   */
  bloodTypeId: 1 | 2 | 3;

  /**
   * The dateOfBirth
   * @example 02-09-2020
   */
  dateOfBirth: string;

  /**
   * The mainPhoto
   * @example kfjdkjkj48hucvcvcv
   */
  mainPhoto: string;

  /**
   * The ipn
   * @example NHG2889884848
   */
  ipn: string;

  /**
   * The createdOn
   * @example 09-09-2022:22-22
   */
  createdOn: string;

  /**
   * The updatedOn
   * @example 09-09-2022:22-22
   */
  updatedOn: string;

  /**
   * The enlistmentDate
   * @example 04-04-2022
   */
  enlistmentDate: string;

  /**
   * The enlistmentDepartmentId
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  enlistmentDepartmentId: string;

  /**
   * The rankId
   * @example 1
   */
  rankId: 1 | 2 | 3;
}

/**
 * The Rank managing API
 */
export interface Rank {
  /**
   * The auto-generated id of the Rank
   * @example 22
   */
  id?: number;

  /**
   * The name
   * @example капітан
   */
  name: string;

  /**
   * The weight
   * @example 22
   */
  weight?: number;

  /**
   * The type
   * @example REGULAR
   */
  type?: string;
}

/**
 * The School managing API
 */
export interface School {
  /**
   * The auto-generated id of the School
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id?: string;

  /**
   * The School city
   * @example The School city 77
   */
  name: string;
}

/**
 * The User managing API
 */
export interface User {
  /**
   * The auto-generated id of the Department
   * @example fhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  id: string;

  /**
   * The User status
   * @example UserStatus.ACTIVE
   */
  userStatus: 'Active' | 'Inactive';

  /**
   * The User role
   * @example UserRole.SUPERADMIN
   */
  role: 'User' | 'Admin' | 'Superadmin';

  /**
   * The Department createdOn
   * @example 12:00:03:05:2022
   */
  createdOn: string;

  /**
   * The Department updatedOn
   * @example 13:00:03:05:2022
   */
  updatedOn: string;

  /**
   * The User military Status
   * @example мобилизирован
   */
  militaryStatus: 'Мобилизирован' | 'В резерве';
}

/**
 * The UserRole managing API
 */
export interface UserRole {
  /**
   * The UserRole key
   * @example ADMIN
   */
  key?: 'USER' | 'ADMIN' | 'SUPERADMIN';

  /**
   * The UserRole value
   * @example Admin
   */
  value: 'User' | 'Admin' | 'Superadmin';
}

/**
 * The UserStatus managing API
 */
export interface UserStatus {
  /**
   * The UserStatus key
   * @example ACTIVE
   */
  key?: 'ACTIVE' | 'INACTIVE';

  /**
   * The UserStatus value
   * @example Active
   */
  value: 'Active' | 'Inactive';
}

export interface Login {
  /**
   * The username
   * @example user1
   */
  username: string;

  /**
   * The password
   * @example defaultpass
   */
  password: string;
}

export interface Bearer {
  /**
   * The auto-generated bearerAuth
   * @example fhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfh-sdfdedsf-dvcxve-cvcvcv
   */
  bearerAuth: string;
}
