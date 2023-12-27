---
sidebar_position: 2
---

# Setting Up a K3s Cluster on Raspberry Pi Devices with Ubuntu Server

To set up a K3s cluster with three Raspberry pi 4 devices(work1, work2 and kmaster) with static IPs(192.168.0.200,192.168.0.201 and 192.168.0.202,respectively) on Ubuntu Server 22.04.3 LTS,follow these steps:

|  hostname | static ip |
|---|---|
|  work1 |  192.168.0.201|
|  work2|   192.168.0.202|
|  kmaster |192.168.0.200   |

## OS Installation

* Use the Raspberry Pi Imager tool to install Ubuntu Serer 22.04.3 LTS(66-bit) on each Raspberry Pi device.

### Set Static IPS

* Modify the natplan configuration file on each Raspberry Pi. Edit '/etc/netplan/50-cloud-init.yaml'

``` yaml
# This file is generated from information provided by the datasource.  Changes
# to it will not persist across an instance reboot.  To disable cloud-init's
# network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
  ethernets:
        eth0:
            dhcp4: no
            addresses: [192.168.0.202/24]
            gateway4: 192.168.0.1
            nameservers:
                addresses: [8.8.8.8,192.168.0.1]
            optional: true
  version: 2
```

* After editing, apply the changes:
  
```bash
sudo netplan apply
```

### Modify hostname

* Type the following command to edit /etc/hostname using nano or vi text editor:

```bash
sudo nano /etc/hostname
```

* Next Edit the /etc/hosts file, Replace any occurrence of the existing computer name with your new one

* Reboot the system to changes take effect

### Install K3s on Master Node(kmaster)

* Use the k3s installation script on the master node:
  
```base
  curl -sfL https://get.k3s.io | K3S_TOKEN=your_token sh -
```

* Replace 'your_token' with a secure token. You can generate one using a tool like 'openssl rand -hex 20'.
  
* Retrieve k3s 'kubeconfig' from Master Node:
  
  Copy the k3s 'kubeconfig' file from the master node to your local mache:

  ```base
  scp ubuntu@192.168.0.200:/etc/rancher/k3s/k3s.yaml ~/.kube/config

  # replace http://localhost to http://masterip in config file
  ```

* Install k3s on Worker nodes(work1 and work2):
  
  Use hte same installation script on both worker nodes, replaceing 'your_master_ip' with the actual IP of the kmaster node

  ```bash
  curl -sfL https://get.k3s.io | K3S_URL=https://192.168.0.200:6443 K3S_TOKEN=your-token sh -

  ```
* Check Node status

```bash

kubectl get nodes
```

output

|NAME |    STATUS  |   ROLES          |        AGE  | VERSION
|--|--|--|--|--|
|worker1 |  Ready  |    none          |     66m  | v1.27.7+k3s2|
|kmaster |  Ready  |    control-plane,master |  98m |  v1.27.7+k3s2|
|worker2 |  NotReady |  none        |        15m  | v1.27.7+k3s2 |
