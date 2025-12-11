# Security & Supply Chain

## Summary
Comprehensive Kubernetes security including RBAC, NetworkPolicy, Pod hardening, image scanning, SBOM generation, and attestation for supply chain security.

## Key Concepts

### RBAC (Role-Based Access Control)
- **Roles & ClusterRoles**: Defining permissions
- **RoleBindings & ClusterRoleBindings**: Assigning permissions
- **ServiceAccounts**: Identity for Pods
- **Least Privilege**: Minimal required permissions
- **Auditing**: Tracking access and changes

### Network Security
- **NetworkPolicies**: Pod-to-pod traffic control
- **Ingress & Egress Rules**: Controlling traffic direction
- **Default Deny**: Secure by default approach
- **Namespace Isolation**: Network segmentation
- **Encryption**: TLS for service mesh (Istio, Linkerd)

### Pod Security
- **Security Contexts**: User, group, capabilities
- **Pod Security Standards**: Privileged, baseline, restricted
- **AppArmor & SELinux**: Mandatory access control
- **seccomp**: System call filtering
- **Read-Only Root Filesystem**: Immutable containers

### Image Security
- **Image Scanning**: Trivy, Clair, Anchore
- **Vulnerability Management**: CVE tracking and patching
- **Image Signing**: Cosign, Notary v2
- **Admission Controllers**: Enforcing policies (OPA, Kyverno)
- **Private Registries**: Securing image distribution

### Supply Chain Security
- **SBOM (Software Bill of Materials)**: Dependency tracking
- **SLSA (Supply-chain Levels for Software Artifacts)**: Framework for integrity
- **Provenance**: Build and source verification
- **Attestation**: Cryptographic proof of build process
- **Transparency Logs**: Public audit trails (Rekor)

### Secrets Management
- **Kubernetes Secrets**: Base64-encoded data
- **External Secrets**: HashiCorp Vault, AWS Secrets Manager
- **Encryption at Rest**: etcd encryption
- **Rotation**: Automated secret rotation
- **Sealed Secrets**: GitOps-friendly encrypted secrets

## Essential Tasks

1. **Implement RBAC policies** for least privilege access
2. **Configure NetworkPolicies** for micro-segmentation
3. **Harden Pod security** with security contexts and PSS
4. **Scan and sign container images** in CI/CD pipelines
5. **Generate SBOMs** for all deployed applications
6. **Integrate secrets management** solution (Vault)
7. **Set up admission controllers** to enforce policies

## Key Links

- [Kubernetes Security](https://kubernetes.io/docs/concepts/security/)
- [SLSA Framework](https://slsa.dev/)
- [Sigstore](https://www.sigstore.dev/)
- [CNCF Security TAG](https://github.com/cncf/tag-security)
- [CIS Kubernetes Benchmark](https://www.cisecurity.org/benchmark/kubernetes)
- [NSA Kubernetes Hardening Guide](https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF)
