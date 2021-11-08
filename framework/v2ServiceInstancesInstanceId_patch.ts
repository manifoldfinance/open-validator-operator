/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

import { ServiceInstanceUpdateRequest } from './ServiceInstanceUpdateRequest';

export interface V2ServiceInstancesInstanceIdApiResponse {
  [k: string]: any;
}

export type V2ServiceInstancesInstanceIdBody = ServiceInstanceUpdateRequest;

export type V2ServiceInstancesInstanceIdResponse = V2ServiceInstancesInstanceIdApiResponse;

export const ENDPOINT_v2ServiceInstancesInstanceId_patch = (acceptsIncomplete?: boolean, options?: StringifyOptions) =>
  `/v2/service_instances/${instanceId}?${stringify({ AcceptsIncomplete: acceptsIncomplete }, options)}`;
