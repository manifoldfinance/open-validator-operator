/* eslint-disable */


import { Context } from './Context';
import { ServiceInstancePreviousValues } from './ServiceInstancePreviousValues';
import { MaintenanceInfo } from './MaintenanceInfo';

export interface ServiceInstanceUpdateRequestParameters {
  [k: string]: any;
}

export interface ServiceInstanceUpdateRequest {
  context?: Context;
  service_id: string;
  plan_id?: string;
  parameters?: ServiceInstanceUpdateRequestParameters;
  previous_values?: ServiceInstancePreviousValues;
  maintenance_info?: MaintenanceInfo;
}
