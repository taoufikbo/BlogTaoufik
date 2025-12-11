# Terraform & IaC

## Summary
Infrastructure as Code (IaC) with Terraform enables declarative infrastructure management. Learn modules, state management, and provider configuration for consistent, repeatable deployments.

## Key Concepts

### Terraform Basics
- **HCL (HashiCorp Configuration Language)**: Terraform's declarative language
- **Resources**: Infrastructure objects to create/manage
- **Data Sources**: Query existing infrastructure
- **Variables**: Parameterize configurations
- **Outputs**: Export information from modules

### State Management
- **State Files**: Tracking infrastructure state
- **Remote State**: Storing state in S3, Consul, etc.
- **State Locking**: Preventing concurrent modifications
- **State Commands**: terraform state list, show, mv, rm

### Modules
- **Module Structure**: Organizing reusable infrastructure code
- **Module Registry**: Public and private module repositories
- **Module Versioning**: Pinning module versions
- **Module Composition**: Building complex infrastructure

### Providers
- **Provider Configuration**: AWS, Azure, GCP, OpenStack, etc.
- **Provider Versions**: Managing provider compatibility
- **Multiple Providers**: Using multiple cloud providers
- **Custom Providers**: Building custom providers

### Workflows
- **terraform init**: Initialize working directory
- **terraform plan**: Preview changes
- **terraform apply**: Apply changes
- **terraform destroy**: Destroy managed infrastructure

## Essential Tasks

1. **Write Terraform configurations** for infrastructure
2. **Manage state files** securely with remote backends
3. **Create reusable modules** for common patterns
4. **Implement CI/CD pipelines** for Terraform
5. **Use workspaces** for environment separation
6. **Handle secrets** securely (vault, encrypted variables)

## Key Links

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [Terraform Registry](https://registry.terraform.io/)
- [Learn Terraform](https://developer.hashicorp.com/terraform/tutorials)
