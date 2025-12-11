# Réseaux IP

## Summary
Understanding IP networking is crucial for Telco DevOps. This includes TCP/UDP protocols, VLANs, MTU configuration, QoS, and routing fundamentals that underpin all Telco cloud communications.

## Key Concepts

### TCP/IP Stack
- **Network Layers**: Physical, Data Link, Network, Transport, Application
- **IP Addressing**: IPv4, IPv6, CIDR notation, subnetting
- **TCP vs UDP**: Connection-oriented vs connectionless protocols
- **Ports & Sockets**: Well-known ports, ephemeral ports

### VLANs & Switching
- **Virtual LANs**: Segmenting network traffic at Layer 2
- **Trunk Ports**: Carrying multiple VLANs
- **802.1Q Tagging**: VLAN tagging standard
- **VLAN Configuration**: Creating and managing VLANs

### MTU & Fragmentation
- **Maximum Transmission Unit**: Largest packet size
- **Path MTU Discovery**: Finding optimal MTU
- **Jumbo Frames**: Frames larger than 1500 bytes
- **Fragmentation Issues**: Impact on performance

### QoS (Quality of Service)
- **Traffic Prioritization**: Ensuring critical traffic gets priority
- **DiffServ**: Differentiated Services model
- **Traffic Shaping**: Controlling bandwidth usage
- **Packet Marking**: DSCP, CoS values

### Routing
- **Static Routing**: Manually configured routes
- **Dynamic Routing**: OSPF, BGP protocols
- **Default Gateway**: Route of last resort
- **Route Tables**: Viewing and managing routes

## Essential Tasks

1. **Configure network interfaces** with proper IP addressing
2. **Set up VLANs** for network segmentation
3. **Troubleshoot connectivity issues** using ping, traceroute, tcpdump
4. **Implement QoS policies** for traffic prioritization
5. **Configure routing** for multi-network environments

## Key Links

- [TCP/IP Illustrated](https://www.principlesofnetwork.com/)
- [Cloudflare Learning - Networking](https://www.cloudflare.com/learning/network-layer/)
- [ip command cheat sheet](https://access.redhat.com/articles/ip-command-cheat-sheet)
