---
sidebar_position: 2
---

# Secrets

## Create Secret

Create a new secret called creds with the following imperative command.

```bash

k create secret generic creds --from-literal user=scott --from-literal pwd=123456
k get secret creds -o yaml

#output, the user and password values are both base64-encoded

apiVersion: v1
data:
  pwd: MTIzNDU2
  user: c2NvdHQ=
kind: Secret
metadata:
  creationTimestamp: "2023-12-12T13:47:51Z"
  name: creds
  namespace: default
  resourceVersion: "2915948"
  uid: b7585a07-75c7-443b-af8a-37afc69a853f
type: Opaque

#decode password
echo MTIzNDU2 | base64 -d
```

## Using Secrets in Pods

The most flexible way to inject a Secret into a Pod is via a special type of volume called a Secret volume.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secret-pod
  labels:
    topic: secrets
spec:
  volumes:
  - name: secret-vol
    secret:
      secretName: creds
  containers:
  - name: secret-ctr
    image: nginx
    volumeMounts:
    - name: secret-vol
      mountPath: "/etc/tkb"
```

```bash
k apply -f secretpd.yaml
# The following command hows the Select is mounted as two files /etc/tkb
k exec secret-pod -- ls /etc/tkb
pwd
user
k exec secret-pod -- cat /etc/tkb/pwd
#output
123456%
```