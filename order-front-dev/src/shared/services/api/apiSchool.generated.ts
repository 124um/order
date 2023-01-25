import { School } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiSchool = {
  schoolsList: (params: RequestParams = {}) =>
    httpClient.request<School[]>({
      path: `/api/schools`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  schoolsCreate: (data: School, params: RequestParams = {}) =>
    httpClient.request<School>({
      path: `/api/schools`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  schoolsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<School>({
      path: `/api/schools/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  schoolsUpdate: (id: string, data: School, params: RequestParams = {}) =>
    httpClient.request<School>({
      path: `/api/schools/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteSchool: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/schools/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiSchool;
