/* eslint-disable */


import { ServiceBindingMetadata } from './ServiceBindingMetadata';
import { ServiceBindingVolumeMount } from './ServiceBindingVolumeMount';
import { ServiceBindingEndpoint } from './ServiceBindingEndpoint';

export interface ServiceBindingResponseCredentials {
  [k: string]: any;
}

export interface ServiceBindingResponse {
  metadata?: ServiceBindingMetadata;
  credentials?: ServiceBindingResponseCredentials;
  syslog_drain_url?: string;
  route_service_url?: string;
  volume_mounts?: ServiceBindingVolumeMount[];
  endpoints?: ServiceBindingEndpoint[];
}
