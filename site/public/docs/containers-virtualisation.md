# Containers & Virtualisation

## Summary
Containers and virtualization technologies are the building blocks of modern Telco cloud infrastructure. Understanding KVM, OCI images, container registries, and Linux namespaces is essential.

## Key Concepts

### Virtualization with KVM
- **Kernel-based Virtual Machine**: Hardware virtualization in Linux
- **QEMU**: Machine emulator and virtualizer
- **libvirt**: API for managing VMs
- **Virtual Networks**: Bridge, NAT, host-only networking

### Containers Basics
- **Linux Namespaces**: Process, network, mount, IPC, UTS, user
- **Control Groups (cgroups)**: Resource limiting and accounting
- **Container vs VM**: Differences and use cases
- **Container Runtimes**: Docker, containerd, CRI-O

### OCI (Open Container Initiative)
- **OCI Image Spec**: Standard container image format
- **OCI Runtime Spec**: Standard for container execution
- **Container Layers**: Union file systems, copy-on-write
- **Image Building**: Dockerfile, buildah, kaniko

### Container Registries
- **Docker Hub**: Public container registry
- **Harbor**: Enterprise container registry
- **Image Scanning**: Vulnerability detection
- **Image Signing**: Content trust and verification

### Networking
- **Bridge Networks**: Default container networking
- **Host Networking**: Using host's network stack
- **Overlay Networks**: Multi-host container networks
- **Port Mapping**: Exposing container ports

## Essential Tasks

1. **Run and manage containers** using Docker/Podman
2. **Build container images** with Dockerfiles
3. **Set up a container registry** for private images
4. **Understand resource limits** and apply cgroups constraints
5. **Troubleshoot container networking** issues

## Key Links

- [Open Container Initiative](https://opencontainers.org/)
- [Docker Documentation](https://docs.docker.com/)
- [Podman Documentation](https://docs.podman.io/)
- [KVM Documentation](https://www.linux-kvm.org/)
