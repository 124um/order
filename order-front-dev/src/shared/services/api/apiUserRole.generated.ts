import { UserRole } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiUserRole = {
  getUserRole: (params: RequestParams = {}) =>
    httpClient.request<UserRole[]>({
      path: `/api/user/roles`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  getUserRole2: (key: string, params: RequestParams = {}) =>
    httpClient.request<UserRole>({
      path: `/api/user/roles/${key}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  postUserRole: (data: UserRole, params: RequestParams = {}) =>
    httpClient.request<UserRole>({
      path: `/api/user/role`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  putUserRole: (key: string, data: UserRole, params: RequestParams = {}) =>
    httpClient.request<UserRole>({
      path: `/api/user/role/${key}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deletedDelete: (key: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/user/roles/deleted/${key}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiUserRole;
