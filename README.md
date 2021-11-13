# Open Validator Service Broker

## Validator Service API


Validator Service Catalog is an extension API that enables applications running in Kubernetes clusters to easily use external managed software offerings, such as a node validator service offered by a cloud provider.
It provides a way to list, provision, and bind with external Managed validator services from validator service Brokers without needing detailed knowledge about how those validator services are created or managed.

### Validator Service Brokers
A validator Service broker, as defined by the spec, is an endpoint for a set of managed validator services offered and maintained by a third-party, an example would be Manifold Finance offering managed bare metal instances to Eth2 Validators / Staking Pools. Another use case is offering teams customized RPC services, such as using a plugin system to expand the standard JSON RPC endpoints normally available. 

### Validator Service Catalog

Using Validator Service Catalog, a [staking pool operator](#) can browse the list of managed validator services offered by a validator service broker, provision an instance of a managed validator service, and bind with it to make it available to an application running for example in a Kubernetes cluster.


### Node Instances 

#### Overview
Service Instances

  

#### API 
**PUT**

/v2/service_instances/{instance_id}

provision a service instance

  

**PATCH**

/v2/service_instances/{instance_id}

update a service instance

  

**DELETE**

/v2/service_instances/{instance_id}

deprovision a service instance

  

**GET**

/v2/service_instances/{instance_id}

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

  
  
  

## Workflow

<pre>

requesting                             authorization resource resource
  party        client                      server     server    owner
    |            |                           |          |         |
    |            |                           |Set policy|         |
    |            |                           |conditions (anytime)|
    |            |                           |<- - - - - - - - - -|
    |            |Resource request (no access token)    |         |
    |            |------------------------------------->|         |
    |            |401 response with initial permission  |         |
    |            |ticket, authz server location         |         |
    |            |<-------------------------------------|         |
    |            |Access token (RPT) request |          |         |
    |            |with permission ticket,    |          |         |
    |            |claim token (push claims)  |          |         |
    |            |-------------------------->|          |         |
    |            |                      +----|Authz     |         |
    |            |                      +--->|assessment|         |
    |            |403 response with new      |          |         |
    |            |permission ticket,         |          |         |
    |            |need_info error,           |          |         |
    |            |redirect_user hint         |          |         |
    |            |<--------------------------|          |         |
    |Redirect    |                           |          |         |
    |user with   |                           |          |         |
    |permission  |                           |          |         |
    |ticket      |                           |          |         |
    |<-----------|                           |          |         |
    |Follow redirect to authz server         |          |         |
    |--------------------------------------->|          |         |
    |Interactive claims gathering            |          |         |
    |<- - - - - - - - - - - - - - - - - - - >|          |         |
    |Redirect back with new permission       |          |         |
    |ticket                                  |          |         |
    |<---------------------------------------|          |         |
    |Follow      |                           |          |         |
    |redirect    |                           |          |         |
    |to client   |                           |          |         |
    |----------->|                           |          |         |
    |            |RPT request with permission|          |         |
    |            |ticket                     |          |         |
    |            |-------------------------->|          |         |
    |            |                      +----|Authz     |         |
    |            |                      +--->|assessment|         |
    |            |Response with RPT and PCT  |          |         |
    |            |<--------------------------|          |         |
    |            |Resource request with RPT  |          |         |
    |            |------------------------------------->|         |
    |            |Protected resource         |          |         |
    |            |<-------------------------------------|         |

</pre>
