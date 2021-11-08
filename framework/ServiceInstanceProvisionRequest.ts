/* eslint-disable */


import { Context } from './Context';
import { MaintenanceInfo } from './MaintenanceInfo';

export interface ServiceInstanceProvisionRequestParameters {
  [k: string]: any;
}

export interface ServiceInstanceProvisionRequest {
  service_id: string;
  plan_id: string;
  context?: Context;
  organization_guid: string;
  space_guid: string;
  parameters?: ServiceInstanceProvisionRequestParameters;
  maintenance_info?: MaintenanceInfo;
}
