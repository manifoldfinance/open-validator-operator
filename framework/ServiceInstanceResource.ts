/* eslint-disable */


import { MaintenanceInfo } from './MaintenanceInfo';
import { ServiceInstanceMetadata } from './ServiceInstanceMetadata';

export interface ServiceInstanceResourceParameters {
  [k: string]: any;
}

export interface ServiceInstanceResource {
  service_id?: string;
  plan_id?: string;
  dashboard_url?: string;
  parameters?: ServiceInstanceResourceParameters;
  maintenance_info?: MaintenanceInfo;
  metadata?: ServiceInstanceMetadata;
}
