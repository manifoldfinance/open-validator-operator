/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

import { LastOperationResource } from './LastOperationResource';

export type V2ServiceInstancesInstanceIdServiceBindingsBindingIdLastOperationResponse = LastOperationResource;

export const ENDPOINT_v2ServiceInstancesInstanceIdServiceBindingsBindingIdLastOperation_get = (
  serviceId?: string,
  planId?: string,
  operation?: string,
  options?: StringifyOptions,
) =>
  `/v2/service_instances/${instanceId}/service_bindings/${bindingId}/last_operation?${stringify(
    { service_id: serviceId, plan_id: planId, operation },
    options,
  )}`;
