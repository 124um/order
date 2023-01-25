import { Rank } from '@appTypes/types.generated';

import httpClient, { RequestParams } from '@services/api/api.service';

const apiRank = {
  ranksList: (params: RequestParams = {}) =>
    httpClient.request<Rank[]>({
      path: `/api/ranks`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  ranksDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Rank>({
      path: `/api/ranks/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),
};

export default apiRank;
