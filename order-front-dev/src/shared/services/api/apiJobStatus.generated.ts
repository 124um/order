import { JobStatus } from '@appTypes/types.generated';

import httpClient, { RequestParams } from '@services/api/api.service';

const apiJobStatus = {
  getJobStatus: (params: RequestParams = {}) =>
    httpClient.request<JobStatus[]>({
      path: `/api/jobs/statuses`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  getJobStatus2: (key: string, params: RequestParams = {}) =>
    httpClient.request<JobStatus>({
      path: `/api/jobs/statuses/${key}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),
};

export default apiJobStatus;
