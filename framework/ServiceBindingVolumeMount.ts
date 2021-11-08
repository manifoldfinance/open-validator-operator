/* eslint-disable */


import { ServiceBindingVolumeMountDevice } from './ServiceBindingVolumeMountDevice';

export enum ServiceBindingVolumeMountMode {
  R = 'r',
  RW = 'rw',
}

export enum ServiceBindingVolumeMountDeviceType {
  SHARED = 'shared',
}

export interface ServiceBindingVolumeMount {
  driver: string;
  container_dir: string;
  mode: ServiceBindingVolumeMountMode;
  device_type: ServiceBindingVolumeMountDeviceType;
  device: ServiceBindingVolumeMountDevice;
}
