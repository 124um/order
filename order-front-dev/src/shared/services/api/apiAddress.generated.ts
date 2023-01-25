import { Address } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiAddress = {
  addressList: (params: RequestParams = {}) =>
    httpClient.request<Address[]>({
      path: `/api/address`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  addressCreate: (data: Address, params: RequestParams = {}) =>
    httpClient.request<Address>({
      path: `/api/address`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  addressDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Address>({
      path: `/api/address/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  addressUpdate: (id: string, data: Address, params: RequestParams = {}) =>
    httpClient.request<Address>({
      path: `/api/address/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteAddress: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/address/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiAddress;
