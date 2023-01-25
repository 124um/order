import { Department } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiDepartment = {
  departmentsList: (params: RequestParams = {}) =>
    httpClient.request<Department[]>({
      path: `/api/departments`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  departmentsCreate: (data: Department, params: RequestParams = {}) =>
    httpClient.request<Department>({
      path: `/api/departments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  departmentsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Department>({
      path: `/api/departments/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  departmentsUpdate: (id: string, data: Department, params: RequestParams = {}) =>
    httpClient.request<Department>({
      path: `/api/departments/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteDepartment: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/departments/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiDepartment;
