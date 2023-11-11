---
sidebar_position: 2
---

# Setting Up and Accessing the K3s Dashboard for Kubernetes Cluster Management

## Create Dashboard namespace YAML:

* Create YAML file(e.g., 'dashboard-namespace.yaml') with the following content:
  
```yml
apiVersion: v1
kind: Namespace
metadata:
  name: kubernetes-dashboard

```

* Apply Deployment and Services:

```bash
kubectl apply -f dashboard-namespace

```

## Create Dashboard Deployment YAML

* Create YAML file(e.g., 'dashboard.yaml') with the following content:
  
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  selector:
    matchLabels:
      app: kubernetes-dashboard
  replicas: 1
  template:
    metadata:
      labels:
        app: kubernetes-dashboard
    spec:
      containers:
      - name: kubernetes-dashboard
        image: kubernetesui/dashboard:v2.3.1
        ports:
        - containerPort: 80

```

## Create Dashboard Service YAML

* Create another YAML file(e.g., 'dashboard-service.yaml') whith the following content:
  
```yml

apiVersion: v1
kind: Service
metadata:
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  type: NodePort
  selector:
    app: kubernetes-dashboard
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80

```

## Apply Deployment and Services:

```bash
kubectl apply -f dashboard.yaml
kubectl apply -f dashboard-service.yaml

```

## Access the dashboard

* To access the dashboard, you need the NodePort assigned to the 'kubernetes-dashboard' service, Retrieve the NodePort:

```bash
kubectl get service -n kubernetes-dashboard
```

* Note the 'PORT' value under the '80:NodePort/TCP' section.
* Access the dashboard in the web browser using the IP address of any of your worker nodes and the NodePort, For example:
  
```bash
http://work_node_ip:node_port
```

* You might need a token for authentication, To get the token run:
  
  ```bash
  kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep default-token | awk '{print $1}')


  ```