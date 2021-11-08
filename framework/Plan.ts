/* eslint-disable */


import { Metadata } from './Metadata';
import { SchemasObject } from './SchemasObject';
import { MaintenanceInfo } from './MaintenanceInfo';

export interface Plan {
  id: string;
  name: string;
  description: string;
  metadata?: Metadata;
  free?: boolean;
  bindable?: boolean;
  plan_updateable?: boolean;
  schemas?: SchemasObject;
  maximum_polling_duration?: number;
  maintenance_info?: MaintenanceInfo;
  binding_rotatable?: boolean;
}
