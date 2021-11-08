/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

export interface V2ServiceInstancesInstanceIdApiResponse {
  [k: string]: any;
}

export type V2ServiceInstancesInstanceIdResponse = V2ServiceInstancesInstanceIdApiResponse;

export const ENDPOINT_v2ServiceInstancesInstanceId_delete = (
  acceptsIncomplete?: boolean,
  serviceId: string,
  planId: string,
  options?: StringifyOptions,
) => `/v2/service_instances/${instanceId}?${stringify({ AcceptsIncomplete: acceptsIncomplete, ServiceId: serviceId, PlanId: planId }, options)}`;
