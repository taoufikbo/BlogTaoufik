# MANO & Orchestrators

## Summary
NFV Management and Orchestration (MANO) with ONAP and OSM. Understand VNF vs CNF lifecycle management, service orchestration, and network function virtualization.

## Key Concepts

### NFV Architecture
- **MANO Components**: VIM, VNFM, NFVO
- **VNF (Virtual Network Function)**: Virtualized network services
- **CNF (Cloud-Native Network Function)**: Containerized network functions
- **NFVI**: NFV Infrastructure (compute, storage, network)

### ONAP (Open Network Automation Platform)
- **Design Time**: Service and resource design
- **Runtime**: Orchestration and lifecycle management
- **SO (Service Orchestrator)**: Service orchestration
- **SDNC**: SDN controller integration
- **A&AI**: Active and Available Inventory
- **Policy Framework**: Automated policy management

### OSM (Open Source MANO)
- **Lightweight MANO**: Simpler alternative to ONAP
- **VNF Descriptors**: VNFD, NSD formats
- **Day-0/1/2 Operations**: Initial config, provisioning, operations
- **Helm Charts**: CNF deployment with Kubernetes

### VNF Lifecycle
- **Onboarding**: Package and catalog VNF/CNF
- **Instantiation**: Deploying VNF instances
- **Configuration**: Day-0 and Day-1 config
- **Scaling**: Horizontal and vertical scaling
- **Healing**: Auto-recovery from failures
- **Termination**: Graceful shutdown

### Service Chaining
- **SFC (Service Function Chaining)**: Ordered services
- **Network Service Descriptors**: Defining service chains
- **VNF Forwarding Graphs**: Traffic steering
- **Virtual Links**: Connecting VNFs

## Essential Tasks

1. **Design VNF/CNF descriptors** following ETSI standards
2. **Onboard network functions** into MANO systems
3. **Orchestrate service deployment** end-to-end
4. **Manage VNF lifecycle** (instantiate, scale, heal)
5. **Implement service chaining** for complex services
6. **Monitor network function** performance and health

## Key Links

- [ONAP Documentation](https://docs.onap.org/)
- [OSM Documentation](https://osm.etsi.org/wikipub/)
- [ETSI NFV Standards](https://www.etsi.org/technologies/nfv)
- [CNCF CNF WG](https://github.com/cncf/cnf-wg)
