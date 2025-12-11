# ACM (OpenShift) & Multi-Cluster Ops

## Summary
Red Hat Advanced Cluster Management for Kubernetes - managing multiple clusters with policies, application placement, and centralized observability for multi-cluster operations.

## Key Concepts

### ACM Architecture
- **Hub Cluster**: Central management cluster
- **Managed Clusters**: Target clusters for workloads
- **Klusterlet**: Agent running on managed clusters
- **Multicluster Hub**: ACM control plane
- **Application Lifecycle**: Multi-cluster app management

### Cluster Management
- **Cluster Import**: Adding existing clusters
- **Cluster Creation**: Provisioning new clusters
- **Cluster Sets**: Grouping related clusters
- **Cluster Pools**: Pre-provisioned cluster inventory
- **Hibernate**: Shutting down clusters to save costs

### Policy Management
- **Policy Framework**: Governance and compliance
- **Policy Types**: Configuration, security, placement
- **Policy Templates**: Reusable policy definitions
- **Compliance Dashboard**: Centralized compliance view
- **Remediation**: Automated policy enforcement

### Application Placement
- **Placement Rules**: Where to deploy applications
- **Subscriptions**: GitOps-style app delivery
- **Channel**: Source repositories (Git, Helm, Object storage)
- **Application Topology**: Visualizing deployments
- **Multi-cluster Scheduling**: Workload distribution

### Observability
- **Metrics Collection**: From all managed clusters
- **Grafana Integration**: Centralized dashboards
- **Alert Aggregation**: Unified alerting
- **Search**: Query across all clusters
- **Distributed Tracing**: Cross-cluster tracing

### GitOps Integration
- **ArgoCD Integration**: Using ACM with ArgoCD
- **ApplicationSet**: Multi-cluster application deployment
- **Progressive Rollout**: Staged deployments
- **Disaster Recovery**: Multi-cluster failover

## Essential Tasks

1. **Deploy ACM hub cluster** and configure multicluster hub
2. **Import and manage** multiple Kubernetes clusters
3. **Define and enforce policies** across all clusters
4. **Deploy applications** to multiple clusters with placement rules
5. **Set up centralized observability** for all clusters
6. **Implement GitOps workflows** with ArgoCD/ACM
7. **Configure disaster recovery** strategies

## Key Links

- [Red Hat ACM Documentation](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/)
- [Open Cluster Management](https://open-cluster-management.io/)
- [ACM Policy Framework](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.9/html/governance/)
- [Submariner](https://submariner.io/) - Multi-cluster networking
