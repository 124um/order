import { Job } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiJob = {
  jobsList: (params: RequestParams = {}) =>
    httpClient.request<Job[]>({
      path: `/api/jobs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  jobsCreate: (data: Job, params: RequestParams = {}) =>
    httpClient.request<Job>({
      path: `/api/jobs`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  jobsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Job>({
      path: `/api/jobs/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  jobsUpdate: (id: string, data: Job, params: RequestParams = {}) =>
    httpClient.request<Job>({
      path: `/api/jobs/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteJob: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/jobs/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiJob;
