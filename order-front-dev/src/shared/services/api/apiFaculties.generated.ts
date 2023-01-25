import { Faculties } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiFaculties = {
  facultiesList: (params: RequestParams = {}) =>
    httpClient.request<Faculties[]>({
      path: `/api/faculties`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  facultiesCreate: (data: Faculties, params: RequestParams = {}) =>
    httpClient.request<Faculties>({
      path: `/api/faculties`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  facultiesDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Faculties>({
      path: `/api/faculties/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  facultiesUpdate: (id: string, data: Faculties, params: RequestParams = {}) =>
    httpClient.request<Faculties>({
      path: `/api/faculties/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteFaculties: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/faculties/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiFaculties;
