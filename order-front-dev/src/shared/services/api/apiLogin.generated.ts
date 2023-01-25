import { Bearer, Login } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiLogin = {
  postLogin: (data: Login, params: RequestParams = {}) =>
    httpClient.request<Bearer>({
      path: `/api/auth/login/`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),
};

export default apiLogin;
