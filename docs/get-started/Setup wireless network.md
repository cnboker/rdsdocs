---
sidebar_position: 4
---

# Setup wireless network

Open the SD file wpa_supplicant.conf as follows.

```bash
network={
 ssid="name"
 psk="password"
}

ap_scan=1
autoscan=periodic:10-
disable_scan_offload=1

```

ssid is the hotspot name, psk is the hotspot password. After modification, save the file and insert it into the Raspberry Pi, after the system reboot, it will actively connect to the network.
