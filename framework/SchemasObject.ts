/* eslint-disable */


import { ServiceInstanceSchemaObject } from './ServiceInstanceSchemaObject';
import { ServiceBindingSchemaObject } from './ServiceBindingSchemaObject';

export interface SchemasObject {
  service_instance?: ServiceInstanceSchemaObject;
  service_binding?: ServiceBindingSchemaObject;
}
