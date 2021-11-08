/* eslint-disable */


export enum ServiceBindingEndpointProtocol {
  TCP = 'tcp',
  UDP = 'udp',
  ALL = 'all',
}

export interface ServiceBindingEndpoint {
  host: string;
  ports: string[];
  protocol?: ServiceBindingEndpointProtocol;
}
