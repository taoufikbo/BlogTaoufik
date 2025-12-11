# Tunneling & Overlay Networks

## Summary
Overlay networking technologies including GENEVE, VXLAN, and GRE provide flexible connectivity options for Cloud-Native Network Functions (CNFs) in Telco environments.

## Key Concepts

### Overlay Networks
- **Encapsulation**: Wrapping packets in outer headers
- **Underlay vs Overlay**: Physical vs virtual networks
- **Tunnel Endpoints**: VTEP (VXLAN), GTEP (GENEVE)
- **Use Cases**: Multi-tenant isolation, flexible topology

### VXLAN (Virtual Extensible LAN)
- **24-bit VNI**: 16 million network segments vs 4K VLANs
- **UDP Encapsulation**: Port 4789
- **Multicast vs Unicast**: Control plane options
- **EVPN**: BGP-based control plane for VXLAN
- **Hardware Offload**: VXLAN acceleration in NICs

### GENEVE (Generic Network Virtualization Encapsulation)
- **Flexible Header**: Variable-length option headers
- **Protocol Agnostic**: Not tied to Ethernet
- **TLV Options**: Type-Length-Value for extensibility
- **Cloud Integration**: Native support in cloud platforms
- **Future-Proof**: Designed for evolution

### GRE (Generic Routing Encapsulation)
- **Simple Encapsulation**: IP-over-IP tunneling
- **Protocol Support**: Carrying multiple protocols
- **Point-to-Point**: Direct tunnel between endpoints
- **Overhead**: 24-byte GRE header
- **Security**: Often combined with IPsec

### Kubernetes Overlay
- **CNI Plugins**: Calico, Flannel, Weave, Cilium
- **Pod Network**: Inter-pod communication
- **Network Policies**: Controlling traffic flow
- **Performance**: Overhead vs flexibility trade-offs

### Performance Considerations
- **MTU Settings**: Accounting for encapsulation overhead
- **Fragmentation**: Avoiding IP fragmentation
- **Offload**: Hardware acceleration support
- **Latency**: Encap/decap overhead

## Essential Tasks

1. **Configure VXLAN networks** for multi-tenant isolation
2. **Set up GENEVE tunnels** in OVS/OVN environments
3. **Optimize MTU settings** for overlay networks
4. **Troubleshoot overlay connectivity** with packet captures
5. **Benchmark overlay performance** vs native networking
6. **Implement network policies** over overlay networks

## Key Links

- [GENEVE RFC 8926](https://datatracker.ietf.org/doc/rfc8926/)
- [VXLAN RFC 7348](https://datatracker.ietf.org/doc/rfc7348/)
- [GRE RFC 2784](https://datatracker.ietf.org/doc/rfc2784/)
- [OVN Architecture](https://www.ovn.org/support/dist-docs/ovn-architecture.7.html)
- [Calico Networking](https://docs.tigera.io/calico/latest/networking/)
