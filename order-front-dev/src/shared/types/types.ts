export type User = {
  id: string;
  userStatus: UserStatus;
  role: UserRole;
  createdOn: string;
  updatedOn: string;
  militaryStatus: MilitaryStatus;

  contacts: UserContacts;
  military: UserMilitary;
  personal: UserPersonal;
  jobs: UserJob[];
  education: UserEducation[];
  training: UserTraining[];
  personalWeapons: UserPersonalWeapon[];
};

export type MilitaryStatus =
  | 'active'
  | 'vacation'
  | 'dutyIn'
  | 'dutyOut'
  | 'mission'
  | 'sickWithoutTraining'
  | 'sickInHospital'
  | 'sickInUnit';

export type UserJob = {
  id: string;
  name: string;
  department: UserJobDepartment;
  grade: number;
  militaryProfessionCode: number;
  status: JobStatus;
};

export type UserJobDepartment = {
  id: string;
  name: string;
};

export type UserPersonal = {
  fullName: string;
  dateOfBirths: string;
  mainPhoto: string;
  ipn: number;
  passport: UserPassport;
  residenceAddress: string;
  bloodType: string;
};

export type UserPassport = {
  code: string;
  department: string;
  date: string;
};

export type UserPersonalWeapon = {
  id: string;
  code: string;
  name: string;
  description: string;
};

export type UserContacts = {
  email: string;
  personalEmail: string;
  phones: string[];
  signalNickname: string;
  deltaNickname: string;
  address: string;
};

export type UserMilitary = {
  enlistmentDate: string;
  enlistmentDepartment: string;
  rank: string;
};

export type UserEducation = {
  id: string;
  name: string;
  description: string;
  degree: string;
  startDate: string;
  endDate: string | null;
  images: string[];
};

export type UserTraining = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string | null;
  images: string[];
};

export type Department = {
  id: string;
  parent: DepartmentParent | null;
  name: string;
  description: string;
  createdOn: string;
  updatedOn: string;
  jobs: DepartmentJob[];
};

export type DepartmentParent = {
  id: string;
  name: string;
};

export type DepartmentJob = {
  id: string;
  name: string;
  grade: number;
  isBoss: boolean;
  rank: string;
  department: JobDepartment;
  militaryProfessionCode: number;
  status: JobStatus;
  user: DepartmentJobUser | null;
};

export type DepartmentJobUser = {
  id: string;
  fullName: string;
  rank: string;
  mainPhoto: string;
  militaryStatus: MilitaryStatus;
};

export type JobDepartment = {
  id: string;
  name: string;
};

export enum JobStatus {
  RESERVED = 'Reserved',
  FILLED = 'Filled',
  TEMPORARY_FILLED = 'TemporaryFilled',
  FREE = 'Free',
}

export enum UserRole {
  'REGULAR' = 'Regular',
  'ADMIN' = 'Admin',
  'SUPERADMIN' = 'Superadmin',
}

export enum UserStatus {
  'ACTIVE' = 'Active',
  'INACTIVE' = 'Inactive',
}
