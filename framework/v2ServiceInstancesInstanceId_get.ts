/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

import { ServiceInstanceResource } from './ServiceInstanceResource';

export type V2ServiceInstancesInstanceIdResponse = ServiceInstanceResource;

export const ENDPOINT_v2ServiceInstancesInstanceId_get = (serviceId?: string, planId?: string, options?: StringifyOptions) =>
  `/v2/service_instances/${instanceId}?${stringify({ service_id: serviceId, plan_id: planId }, options)}`;
