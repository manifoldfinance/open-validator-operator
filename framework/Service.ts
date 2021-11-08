/* eslint-disable */


import { Metadata } from './Metadata';
import { DashboardClient } from './DashboardClient';
import { Plan } from './Plan';

export enum ServiceRequires {
  SYSLOG_DRAIN = 'syslog_drain',
  ROUTE_FORWARDING = 'route_forwarding',
  VOLUME_MOUNT = 'volume_mount',
}

export interface Service {
  name: string;
  id: string;
  description: string;
  tags?: string[];
  requires?: ServiceRequires[];
  bindable: boolean;
  instances_retrievable?: boolean;
  bindings_retrievable?: boolean;
  allow_context_updates?: boolean;
  metadata?: Metadata;
  dashboard_client?: DashboardClient;
  binding_rotatable?: boolean;
  plan_updateable?: boolean;
  plans: Plan[];
}
