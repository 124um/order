import { Education } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiEducation = {
  educationsList: (params: RequestParams = {}) =>
    httpClient.request<Education[]>({
      path: `/api/educations`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  educationsCreate: (data: Education, params: RequestParams = {}) =>
    httpClient.request<Education>({
      path: `/api/educations`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  educationsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Education>({
      path: `/api/educations/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  educationsUpdate: (id: string, data: Education, params: RequestParams = {}) =>
    httpClient.request<Education>({
      path: `/api/educations/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteEducation: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/educations/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiEducation;
