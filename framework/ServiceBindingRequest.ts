/* eslint-disable */


import { Context } from './Context';
import { ServiceBindingResourceObject } from './ServiceBindingResourceObject';

export interface ServiceBindingRequestParameters {
  [k: string]: any;
}

export interface ServiceBindingRequest {
  context?: Context;
  service_id: string;
  plan_id: string;
  app_guid?: string;
  bind_resource?: ServiceBindingResourceObject;
  parameters?: ServiceBindingRequestParameters;
  predecessor_binding_id?: string;
}
