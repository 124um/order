import { PersonalWeapon } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiPersonalWeapon = {
  weaponsList: (params: RequestParams = {}) =>
    httpClient.request<PersonalWeapon[]>({
      path: `/api/weapons`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  weaponsCreate: (data: PersonalWeapon, params: RequestParams = {}) =>
    httpClient.request<PersonalWeapon>({
      path: `/api/weapons`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  weaponsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<PersonalWeapon>({
      path: `/api/weapons/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  weaponsUpdate: (id: string, data: PersonalWeapon, params: RequestParams = {}) =>
    httpClient.request<PersonalWeapon>({
      path: `/api/weapons/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deletePersonalWeapon: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/weapons/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiPersonalWeapon;
