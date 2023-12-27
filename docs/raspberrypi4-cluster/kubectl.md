---
sidebar_position: 1
---
# Kubectl Cheatsheet

## Install with Homebrew on macOS

If you are on macOS and using Homebrew package manager, you can install kubectl with Homebrew.

* Run the installation command:

```bash
brew install kubectl

```

* Test to ensure the version you installed is up-to-date

``` bash
kubectl version --client

```

## Kubectl shortcut

```bash
alias k=kubectl
```

* Pods:
  po is a shorthand for 'pod'. For example: 'k get po' instead of 'k get pods'

* Services:
  'svc' is a shorthand for 'service'. For example: 'k get svc' instead of 'k get services'

* Deployments:
  'deploy' is a shorthand for 'deployments'. For example: 'k get deploy' instead of 'k get deployments'.

* Nodes:
  'no' is a shorthand for 'node'. For example: 'k get no' instead of 'k get nodes'

* Namespaces:
  'ns' is a shorthand for 'namespaces'. For example 'k get ns' instead of 'k get namespaces'

* Contexts:
  'ctx' is a shorthand for 'context'.

## Basic Commands

* Get Information
  
```bash
k get no
k get po
k get po -A
k get po -o wide
k get svc

```

* Describe Resources
  
```bash
k desc node <node-name>
k desc pod <pod-name>
k desc svc <service-name>
```

* Create or Apply
  
```bash
k apply -f <filename.yaml>
```

* Delete Resource

```bash
k delete node <node-name>
#delete the pod whose namespace is default
k delete pod <pod-name>
#delete the pod whose namespace is <namespace>
k delete pod <pod-name> -n <namespace>
k delete svc <service-name>
```

## Work with Pods

* Access Pod shell:
  
```bash
k exec -it <pod-name> -n <namespace> -- /bin/sh  
```

* Logs:

```bash
k logs <pod-name>

```

## Work with Service

* Expose a Deplyment:
  
```bash
  k expose deploy <deployment-name> --type=NodePort --port=<port>
```

* Scale a Deplyment:
  
```bash
k scale deploy <deployment-name> --replicas=<replica-count>  
```

* Update a Deployment:

```bash

k set image deply/<deploy-name> <conatiner-name>=<new-image>

```

## Configuration

* View and Edit config:
  
## Advanced Commands

* Port Forwarding:

```bash

k port-forward <pod-name> <local-port>:<pod-port>
```

* Create a Secret:

```bash
k create secret generic <secret-name --from-literal=key1=value1 --from-literal=key2=value2

```

* Apply a Resource from URL:

```base
k appy -f https://example.com/example.yaml
```

* Resource Metrics;
  
```bash

k top node
k top pod
```
