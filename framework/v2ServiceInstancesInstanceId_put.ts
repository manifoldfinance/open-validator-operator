/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

import { ServiceInstanceProvisionRequest } from './ServiceInstanceProvisionRequest';
import { ServiceInstanceProvisionResponse } from './ServiceInstanceProvisionResponse';

export type V2ServiceInstancesInstanceIdBody = ServiceInstanceProvisionRequest;

export type V2ServiceInstancesInstanceIdResponse = ServiceInstanceProvisionResponse;

export const ENDPOINT_v2ServiceInstancesInstanceId_put = (acceptsIncomplete?: boolean, options?: StringifyOptions) =>
  `/v2/service_instances/${instanceId}?${stringify({ AcceptsIncomplete: acceptsIncomplete }, options)}`;
