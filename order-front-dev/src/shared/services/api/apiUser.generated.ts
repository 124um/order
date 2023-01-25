import { User } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiUser = {
  usersDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<User>({
      path: `/api/users/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  usersUpdate: (id: string, data: User, params: RequestParams = {}) =>
    httpClient.request<User>({
      path: `/api/users/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  usersList: (params: RequestParams = {}) =>
    httpClient.request<User[]>({
      path: `/api/users`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  usersCreate: (data: User, params: RequestParams = {}) =>
    httpClient.request<User>({
      path: `/api/users`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteUser: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/users/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiUser;
