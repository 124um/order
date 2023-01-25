import { Contact } from '@appTypes/types.generated';

import httpClient, { ContentType, RequestParams } from '@services/api/api.service';

const apiContact = {
  contactsList: (params: RequestParams = {}) =>
    httpClient.request<Contact[]>({
      path: `/api/contacts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  contactsCreate: (data: Contact, params: RequestParams = {}) =>
    httpClient.request<Contact>({
      path: `/api/contacts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  contactsDetail: (id: string, params: RequestParams = {}) =>
    httpClient.request<Contact>({
      path: `/api/contacts/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    }),

  contactsUpdate: (id: string, data: Contact, params: RequestParams = {}) =>
    httpClient.request<Contact>({
      path: `/api/contacts/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    }),

  deleteContact: (id: string, params: RequestParams = {}) =>
    httpClient.request<void>({
      path: `/api/contacts/deleted/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    }),
};

export default apiContact;
