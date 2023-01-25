import { Passport } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiPassport = {
  passportsList: (params: RequestParams = {}) =>
    httpClient.request<Passport[]>({
      path: `/api/passports`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  passportsCreate: (data: Passport, params: RequestParams = {}) =>
    httpClient.request<Passport>({
      path: `/api/passports`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  passportsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Passport>({
      path: `/api/passports/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  passportsUpdate: (id: string, data: Passport, params: RequestParams = {}) =>
    httpClient.request<Passport>({
      path: `/api/passports/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deletePassport: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/passports/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiPassport;
