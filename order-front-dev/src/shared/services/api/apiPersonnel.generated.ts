import { Personnel } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiPersonnel = {
  personnelsList: (params: RequestParams = {}) =>
    httpClient.request<Personnel[]>({
      path: `/api/personnels`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  personnelsCreate: (data: Personnel, params: RequestParams = {}) =>
    httpClient.request<Personnel>({
      path: `/api/personnels`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  personnelsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Personnel>({
      path: `/api/personnels/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  personnelsUpdate: (id: string, data: Personnel, params: RequestParams = {}) =>
    httpClient.request<Personnel>({
      path: `/api/personnels/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deletePersonnel: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/personnels/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiPersonnel;
