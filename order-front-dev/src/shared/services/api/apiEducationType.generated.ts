import { EducationType } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiEducationType = {
  getEducationType: (params: RequestParams = {}) =>
    httpClient.request<EducationType[]>({
      path: `/api/education/types`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  postEducationType: (data: EducationType, params: RequestParams = {}) =>
    httpClient.request<EducationType>({
      path: `/api/education/types`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  getEducationType2: (key: string, params: RequestParams = {}) =>
    httpClient.request<EducationType>({
      path: `/api/education/types/${key}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  putEducationType: (key: string, data: EducationType, params: RequestParams = {}) =>
    httpClient.request<EducationType>({
      path: `/api/education/types/${key}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deletedDelete: (key: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/education/types/deleted/${key}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiEducationType;
