/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

export interface V2ServiceInstancesInstanceIdServiceBindingsBindingIdApiResponse {
  [k: string]: any;
}

export type V2ServiceInstancesInstanceIdServiceBindingsBindingIdResponse = V2ServiceInstancesInstanceIdServiceBindingsBindingIdApiResponse;

export const ENDPOINT_v2ServiceInstancesInstanceIdServiceBindingsBindingId_delete = (
  serviceId: string,
  planId: string,
  acceptsIncomplete?: boolean,
  options?: StringifyOptions,
) =>
  `/v2/service_instances/${instanceId}/service_bindings/${bindingId}?${stringify(
    { ServiceId: serviceId, PlanId: planId, AcceptsIncomplete: acceptsIncomplete },
    options,
  )}`;
