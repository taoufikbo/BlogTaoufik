# Kubernetes — Concepts & Objects

## Summary
Kubernetes is the de facto standard for container orchestration in Telco cloud environments. Master Pods, Deployments, StatefulSets, and CNI networking with plugins like Calico and Multus.

## Key Concepts

### Core Objects
- **Pods**: Smallest deployable units, one or more containers
- **Deployments**: Declarative updates for Pods and ReplicaSets
- **StatefulSets**: For stateful applications requiring stable network identities
- **DaemonSets**: Run a Pod on every node
- **Jobs & CronJobs**: Batch processing and scheduled tasks

### Networking
- **CNI (Container Network Interface)**: Plugin-based networking
- **Calico**: Network policy and IP management
- **Multus**: Multiple network interfaces per Pod
- **Services**: ClusterIP, NodePort, LoadBalancer
- **Ingress**: HTTP/HTTPS routing to services

### Storage
- **Persistent Volumes (PV)**: Cluster-level storage resources
- **Persistent Volume Claims (PVC)**: Storage requests by Pods
- **Storage Classes**: Dynamic provisioning
- **CSI (Container Storage Interface)**: Plugin architecture for storage

### Configuration & Secrets
- **ConfigMaps**: Non-sensitive configuration data
- **Secrets**: Sensitive data like passwords, tokens
- **Environment Variables**: Passing config to containers
- **Volume Mounts**: Mounting config as files

### Workload Management
- **Labels & Selectors**: Organizing and selecting objects
- **Namespaces**: Virtual clusters within a cluster
- **Resource Quotas**: Limiting resource consumption
- **Limit Ranges**: Default resource limits

## Essential Tasks

1. **Deploy applications** using Deployments and Services
2. **Configure networking** with CNI plugins
3. **Manage storage** with PVs and PVCs
4. **Implement network policies** for security
5. **Scale workloads** manually and with HPA
6. **Troubleshoot Pods** using kubectl logs, describe, exec

## Key Links

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Kubernetes Patterns](https://k8spatterns.io/)
- [Calico Documentation](https://docs.tigera.io/calico/)
- [Multus CNI](https://github.com/k8snetworkplumbingwg/multus-cni)
