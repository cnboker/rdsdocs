---
sidebar_position: 3
---

# The Problem

## Endpoint is not Created for Service in Kubernetes

### The Problem

```bash
k describe svc bing-cloud-app-service -n bingo

output

Name:              bing-cloud-app-service
Namespace:         bingo
Labels:            app.kubernetes.io/instance=bingo-cloud-app
Annotations:       <none>
Selector:          app=bing-cloud-app
Type:              ClusterIP
IP Family Policy:  SingleStack
IP Families:       IPv4
IP:                10.43.27.204
IPs:               10.43.27.204
Port:              http  80/TCP
TargetPort:        80/TCP
Endpoints:         <none>
Session Affinity:  None
Events:            <none>
```



above Endpoints is <none>

### The Solution

The service selector doesn't match any pod's label

```bash
k get pods --show-labels -n bingo

output:

NAME                             READY   STATUS    RESTARTS   AGE    LABELS
bing-cloud-app-69565754f-6mlbx   1/1     Running   0          5h8m   app=bingo-cloud-app,pod-template-hash=69565754f
bing-cloud-app-69565754f-46vg4   1/1     Running   0          5h8m   app=bingo-cloud-app,pod-template-hash=69565754f
```



Make sure Service yaml selector/app is equal to bingo-cloud-app matches pods label.