# local network pool configration

## Install MetalLB

```bash
helm repo add metallb https://metallb.github.io/metallb
helm repo update
```



## Install MetalLB using Helm

```bash
helm install metallb metallb/metallb --create-namespace --namespace metallb-system 
```

## Config external Network

``` yml
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: default-pool
  namespace: metallb-system
spec:
  addresses:
  - 192.168.0.150-192.168.0.199
--
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: default
  namespace: metallb-system
spec:
  ipAddressPools:
  - default-pool
```

## Verify that MetalLB components are running

```bash
k get pods -n metallb-system
```

helm upgrade --install metallb metallb/metallb --create-namespace --namespace metallb-system --wait

we need to create a simple port forward to forward traffic to the Traefik dashboard. To do this, you need to use the following command:

```bash
kubectl port-forward -n kube-system "$(kubectl get pods -n kube-system| grep '^traefik-' | awk '{print $1}')" 9000:9000
```
