/* eslint-disable */


export enum LastOperationResourceState {
  IN_PROGRESS = 'in progress',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export interface LastOperationResource {
  state: LastOperationResourceState;
  description?: string;
  instance_usable?: boolean;
  update_repeatable?: boolean;
}
