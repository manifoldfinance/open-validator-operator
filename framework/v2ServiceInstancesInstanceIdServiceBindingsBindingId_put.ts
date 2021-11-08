/* eslint-disable */


import { stringify, StringifyOptions } from 'query-string';

import { ServiceBindingRequest } from './ServiceBindingRequest';
import { ServiceBindingResponse } from './ServiceBindingResponse';

export type V2ServiceInstancesInstanceIdServiceBindingsBindingIdBody = ServiceBindingRequest;

export type V2ServiceInstancesInstanceIdServiceBindingsBindingIdResponse = ServiceBindingResponse;

export const ENDPOINT_v2ServiceInstancesInstanceIdServiceBindingsBindingId_put = (acceptsIncomplete?: boolean, options?: StringifyOptions) =>
  `/v2/service_instances/${instanceId}/service_bindings/${bindingId}?${stringify({ AcceptsIncomplete: acceptsIncomplete }, options)}`;
