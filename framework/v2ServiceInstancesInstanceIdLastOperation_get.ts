/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

import { LastOperationResource } from './LastOperationResource';

export type V2ServiceInstancesInstanceIdLastOperationResponse = LastOperationResource;

export const ENDPOINT_v2ServiceInstancesInstanceIdLastOperation_get = (
  serviceId?: string,
  planId?: string,
  operation?: string,
  options?: StringifyOptions,
) => `/v2/service_instances/${instanceId}/last_operation?${stringify({ service_id: serviceId, plan_id: planId, operation }, options)}`;
