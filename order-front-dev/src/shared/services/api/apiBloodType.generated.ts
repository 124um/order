import { BloodType } from '@appTypes/types.generated';

import httpClient, { RequestParams } from '@services/api/api.service';

const apiBloodType = {
  bloodsList: (params: RequestParams = {}) =>
    httpClient.request<BloodType[]>({
      path: `/api/bloods`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  bloodsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<BloodType>({
      path: `/api/bloods/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),
};

export default apiBloodType;
