import { UserStatus } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiUserStatus = {
  getUserStatus: (params: RequestParams = {}) =>
    httpClient.request<UserStatus[]>({
      path: `/api/user/statuses`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  postUserStatus: (data: UserStatus, params: RequestParams = {}) =>
    httpClient.request<UserStatus>({
      path: `/api/user/statuses`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  getUserStatus2: (key: string, params: RequestParams = {}) =>
    httpClient.request<UserStatus>({
      path: `/api/user/statuses/${key}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  putUserStatus: (key: string, data: UserStatus, params: RequestParams = {}) =>
    httpClient.request<UserStatus>({
      path: `/api/user/statuses/${key}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deletedDelete: (key: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/user/statuses/deleted/${key}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiUserStatus;
