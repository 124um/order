import { Degrees } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiDegrees = {
  degreesList: (params: RequestParams = {}) =>
    httpClient.request<Degrees[]>({
      path: `/api/degrees`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  degreesCreate: (data: Degrees, params: RequestParams = {}) =>
    httpClient.request<Degrees>({
      path: `/api/degrees`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  degreesDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Degrees>({
      path: `/api/degrees/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  degreesUpdate: (id: string, data: Degrees, params: RequestParams = {}) =>
    httpClient.request<Degrees>({
      path: `/api/degrees/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteDegrees: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/degrees/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiDegrees;
