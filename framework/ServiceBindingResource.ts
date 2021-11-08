/* eslint-disable */


import { ServiceBindingMetadata } from './ServiceBindingMetadata';
import { ServiceBindingVolumeMount } from './ServiceBindingVolumeMount';
import { ServiceBindingEndpoint } from './ServiceBindingEndpoint';

export interface ServiceBindingResourceCredentials {
  [k: string]: any;
}

export interface ServiceBindingResourceParameters {
  [k: string]: any;
}

export interface ServiceBindingResource {
  metadata?: ServiceBindingMetadata;
  credentials?: ServiceBindingResourceCredentials;
  syslog_drain_url?: string;
  route_service_url?: string;
  volume_mounts?: ServiceBindingVolumeMount[];
  endpoints?: ServiceBindingEndpoint[];
  parameters?: ServiceBindingResourceParameters;
}
