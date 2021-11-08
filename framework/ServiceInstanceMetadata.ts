/* eslint-disable */


export interface ServiceInstanceMetadataLabels {
  [k: string]: any;
}

export interface ServiceInstanceMetadataAttributes {
  [k: string]: any;
}

export interface ServiceInstanceMetadata {
  labels?: ServiceInstanceMetadataLabels;
  attributes?: ServiceInstanceMetadataAttributes;
}
