# CI/CD & GitOps

## Summary
Continuous Integration and Continuous Delivery with GitOps principles. Implement pipelines with ArgoCD, Tekton, and ensure supply chain security with image signing and verification.

## Key Concepts

### CI/CD Pipelines
- **Continuous Integration**: Automated build and test
- **Continuous Delivery**: Automated deployment to environments
- **Pipeline Stages**: Build, test, scan, deploy
- **Pipeline as Code**: Jenkinsfile, GitLab CI, GitHub Actions

### GitOps
- **Git as Single Source of Truth**: All config in Git
- **Declarative Infrastructure**: Desired state in Git repos
- **Pull-based Deployments**: Operators pull from Git
- **Automated Sync**: Keep cluster state in sync with Git

### ArgoCD
- **Application CRDs**: Defining applications declaratively
- **Sync Strategies**: Auto-sync, manual sync, sync waves
- **Health Status**: Monitoring application health
- **Multi-cluster**: Managing multiple Kubernetes clusters

### Tekton
- **Tasks**: Reusable CI/CD steps
- **Pipelines**: Orchestrating Tasks
- **Triggers**: Event-driven pipeline execution
- **Results**: Passing data between Tasks

### Image Security
- **Image Scanning**: Detecting vulnerabilities (Trivy, Clair)
- **Image Signing**: Cosign, Notary for supply chain security
- **SBOM (Software Bill of Materials)**: Tracking dependencies
- **Admission Controllers**: Enforcing signed images

## Essential Tasks

1. **Set up CI/CD pipelines** for application deployments
2. **Implement GitOps workflows** with ArgoCD
3. **Create Tekton pipelines** for complex workflows
4. **Scan and sign container images** for security
5. **Monitor pipeline execution** and troubleshoot failures
6. **Implement promotion strategies** across environments

## Key Links

- [ArgoCD Documentation](https://argo-cd.readthedocs.io/)
- [Tekton Documentation](https://tekton.dev/docs/)
- [GitOps Principles](https://opengitops.dev/)
- [Sigstore/Cosign](https://docs.sigstore.dev/)
