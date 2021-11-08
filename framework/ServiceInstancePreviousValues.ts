/* eslint-disable */


import { MaintenanceInfo } from './MaintenanceInfo';

export interface ServiceInstancePreviousValues {
  service_id?: string;
  plan_id?: string;
  organization_id?: string;
  space_id?: string;
  maintenance_info?: MaintenanceInfo;
}
