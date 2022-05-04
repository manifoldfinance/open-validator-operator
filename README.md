---
title: Open Node Validator Service Broker
version: v0.1.2
author: The Contributors
license: Apache-2.0
---

# Open Node Validator Service Broker

> [Based from the OpenService Broker API Spec, v2.6.1](https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md)

## Abstract 

A service broker provides an interface between an service provider (e.g. GCP, Azure or AWS), and an application platform (e.g. Kubernetes or Cloud Foundry). The service broker is managed by platform operators (Node Operators in Lido Finance's case). 

These platform/node operators are responsible for configuring the broker to meet the needs of their network, platform(w.r.t. Staking requirements, e.g. uptime, availability, slashing mitigation, etc), and developers(including users). Developers could possibly use the broker to provision and bind new services to their applications. An example of this would be a team wanting to provide RPC access to its managed node's for their own users (this could end up being like a 'Infura' like service where a team uses their staked ETH and can access the equivalent nodes that their stake would provision).

Therefore, a service broker is responsible for federating access between an application provider and a developer with respecting the wishes of the platform and its operators. Each of these parties influences the broker, its services, and structure.


Provisioning a new service instance doesn’t necessarily mean that the service broker has to spin up a new virtual machine. For example, provisioning could also mean reserving some space in database which has previously been created. 

## Validator Service API

Validator Service Catalog is an extension API that enables applications running in Kubernetes clusters to easily use external managed software offerings, such as a node validator service offered by a cloud/bare metal provider.

It provides a way to list, provision, and bind with external Managed Staking services from validator service Brokers without needing detailed knowledge about how those validator services are created or managed.

### Validator Service Brokers

A validator Service broker, as defined by the spec, is an endpoint for a set of managed validator services offered and maintained by a third-party, an example would be Manifold Finance offering managed bare metal instances to Eth2 Validators / Staking Pools. Another use case is offering teams customized RPC services, such as using a plugin system to make available an accessible a customized endpoint.

### Validator Service Catalog

Using Validator Service Catalog, a [staking pool operator](#) can browse the list of managed validator services offered by a validator service broker, provision an instance of a managed validator service, and bind with it to make it available to an application running for example in a Kubernetes cluster.

### Node Instances 

#### Overview

Service Instances

  

#### API 

  **PUT**

  `/v2/service_instances/{instance_id}`

  provision a service instance



  **PATCH**

  `/v2/service_instances/{instance_id}`

  update a service instance



  **DELETE**

  `/v2/service_instances/{instance_id}`

  deprovision a service instance



  **GET**

  `/v2/service_instances/{instance_id}`

  gets a service instance



  **GET**

  > last requested operation state for service instance

  /v2/service_instances/{instance_id}/last_operation




### Node Bindings


##### Overview 
Service Bindings

  
#### API 
**GET**

> last requested operation state for service binding

  

/v2/service_instances/{instance_id}/service_bindings/{binding_id}/last_operation

  
  

**PUT**

> generation of a service binding

  

/v2/service_instances/{instance_id}/service_bindings/{binding_id}

  
  

**DELETE**

> deprovision of a service binding

/v2/service_instances/{instance_id}/service_bindings/{binding_id}

  
  

**GET**

> gets a service binding

/v2/service_instances/{instance_id}/service_bindings/{binding_id}

## Probes

### Liveness

| Field              	| Default     	| Range (Minimum-Maximum) 	| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            	|
|--------------------	|-------------	|-------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| path               	| None        	|                         	| If you want liveness checks to be forwarded to your application container, specify a URL path, such as "/liveness_check"                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	|
| timeout_sec        	| 4 seconds   	| 1-300                   	| Timeout interval for each request, in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         	|
| check_interval_sec 	| 30 seconds  	| 1-300                   	| Time interval between checks, in seconds. Note that this value must be greater than timeout_sec.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       	|
| failure_threshold  	| 4 checks    	| 1-10                    	| An instance is unhealthy after failing this number of consecutive checks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
| success_threshold  	| 2 checks    	| 1-10                    	| An unhealthy instance becomes healthy again after successfully responding to this number of consecutive checks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        	|
| initial_delay_sec  	| 300 seconds 	| 0-3600                  	| The delay, in seconds, after the instance starts during which health check responses are ignored. This setting applies to each newly created instance and can allow a new instance more time to get up and running. The setting delays autohealing from checking on and potentially prematurely recreating the instance if the instance is in the process of starting up. The initial delay timer starts when the instance is in RUNNING mode. For example, you may want to increase the delay if your application has initialization tasks that take a long time before it is ready to serve traffic. 	|
  
### Readiness

| Field                 	| Default     	| Range (Minimum-Maximum) 	| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 	|
|-----------------------	|-------------	|-------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| path                  	| None        	|                         	| If you want readiness checks to be forwarded to your application container, specify a URL path, such as "/readiness_check"                                                                                                                                                                                                                                                                                                                                                                                                                                                  	|
| timeout_sec           	| 4 seconds   	| 1-300                   	| Timeout interval for each request, in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
| check_interval_sec    	| 5 seconds   	| 1-300                   	| Time interval between checks, in seconds. Note that this value must be greater than timeout_sec.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            	|
| failure_threshold     	| 2 checks    	| 1-10                    	| An instance is unhealthy after failing this number of consecutive checks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	|
| success_threshold     	| 2 checks    	| 1-10                    	| An unhealthy instance becomes healthy after successfully responding to this number of consecutive checks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	|
| app_start_timeout_sec 	| 300 seconds 	| 1-1800                  	| This setting applies to new deployments, not individual VMs. It specifies the maximum time in seconds allowed for a sufficient number of instances in a deployment to pass health checks. If this duration is exceeded then the deployment fails and is rolled back. The timer starts when the Compute Engine instances have been provisioned and the Load Balancer backend service has been created. For example, you might want to increase the timeout if you wish to provide longer timeouts during deployments for a sufficient number of instances to become healthy. 	|
  

