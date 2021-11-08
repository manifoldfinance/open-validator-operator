/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

import { ServiceBindingResource } from './ServiceBindingResource';

export type V2ServiceInstancesInstanceIdServiceBindingsBindingIdResponse = ServiceBindingResource;

export const ENDPOINT_v2ServiceInstancesInstanceIdServiceBindingsBindingId_get = (serviceId?: string, planId?: string, options?: StringifyOptions) =>
  `/v2/service_instances/${instanceId}/service_bindings/${bindingId}?${stringify({ service_id: serviceId, plan_id: planId }, options)}`;
